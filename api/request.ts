import * as fetch from 'node-fetch';
import { jsonToXml } from './json-to-xml';
import { xmlToJson } from './xml-to-json';

const STORECOVE_API_ROOT = process.env.STORECOVE_API_ROOT || 'https://api.storecove.com/api/v2';

export function request(method, url, defaultParams: any = {}) {
  return (params: any = {}) => {
    const query = new URLSearchParams(params.query).toString();
    const headers = {
      Authorization: `Bearer ${process.env.STORECOVE_API_KEY}`,
      ...defaultParams.header,
      ...params.header
    };

    let body;

    const buildFormData = (object) => {
      const result = new FormData();

      Object.keys(object).forEach((key) => {
        result.append(key, object[key]);
      });

      return result;
    };

    if (typeof headers['Content-Type'] === 'undefined') {
      // if not defined, assume we send what we accept:
      headers['Content-Type'] = headers.accept;
    }

    if (params.body) {
      switch (headers.accept) {
        case "multipart/form-data":
          body = buildFormData(params.body);
          break;
        case "application/xml":
          body = jsonToXml(params.body);
          break;
        case "application/json":
          body = JSON.stringify(params.body);
          break;
        default:
          body = params.body;
          break;
      }
    } else if (params.formData) {
      body = buildFormData(params.formData);
    }
    body = "{ \"party_name\": \"Test Party\", \"line1\": \"Test Street\", \"city\": \"Test City\", \"zip\": \"Zippy\", \"country\": \"NL\", \"tenant_id\": \"my_id\"}";
    // CAREFUL: this will print your unencrypted Authorization header in the logs
    if (process.env.STORECOVE_DEBUG) {
      console.log('API request', {
        url: `${STORECOVE_API_ROOT}${url}${query ? `?${query}` : ""}`,
        method,
        headers,
        body
      });
    }
    return fetch(`${STORECOVE_API_ROOT}${url}${query ? `?${query}` : ""}`, {
      method,
      headers,
      body,
    }).then(async (response) => {
      let data = null;

      const headersValues = Object.values(headers);
      const headersKeys = Object.keys(headers).map((value) =>
        value.toLocaleLowerCase(),
      );

      switch (headersValues[headersKeys.indexOf("content-type")]) {
        case "multipart/form-data":
          data = await response.formData();
          break;
        case "application/xml":
          data = xmlToJson(await response.text());
          break;
        case "application/json":
          data = await response.json();
          break;
        default:
          break;
      }

      return { response, data };
    });
  };
}
