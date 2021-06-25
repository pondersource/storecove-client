"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.request = void 0;
var fetch = require("node-fetch");
var json_to_xml_1 = require("./json-to-xml");
var xml_to_json_1 = require("./xml-to-json");
var STORECOVE_API_ROOT = process.env.STORECOVE_API_ROOT || 'https://api.storecove.com/api/v2';
function request(method, url, defaultParams) {
    var _this = this;
    if (defaultParams === void 0) { defaultParams = {}; }
    return function (params) {
        if (params === void 0) { params = {}; }
        var query = new URLSearchParams(params.query).toString();
        var headers = __assign(__assign({ Authorization: "Bearer " + process.env.STORECOVE_API_KEY }, defaultParams.header), params.header);
        var body;
        var buildFormData = function (object) {
            var result = new FormData();
            Object.keys(object).forEach(function (key) {
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
                    body = json_to_xml_1.jsonToXml(params.body);
                    break;
                case "application/json":
                    body = JSON.stringify(params.body);
                    break;
                default:
                    body = params.body;
                    break;
            }
        }
        else if (params.formData) {
            body = buildFormData(params.formData);
        }
        body = "{ \"party_name\": \"Test Party\", \"line1\": \"Test Street\", \"city\": \"Test City\", \"zip\": \"Zippy\", \"country\": \"NL\", \"tenant_id\": \"my_id\"}";
        // CAREFUL: this will print your unencrypted Authorization header in the logs
        if (process.env.STORECOVE_DEBUG) {
            console.log('API request', {
                url: "" + STORECOVE_API_ROOT + url + (query ? "?" + query : ""),
                method: method,
                headers: headers,
                body: body
            });
        }
        return fetch("" + STORECOVE_API_ROOT + url + (query ? "?" + query : ""), {
            method: method,
            headers: headers,
            body: body
        }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
            var data, headersValues, headersKeys, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        data = null;
                        headersValues = Object.values(headers);
                        headersKeys = Object.keys(headers).map(function (value) {
                            return value.toLocaleLowerCase();
                        });
                        _a = headersValues[headersKeys.indexOf("content-type")];
                        switch (_a) {
                            case "multipart/form-data": return [3 /*break*/, 1];
                            case "application/xml": return [3 /*break*/, 3];
                            case "application/json": return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, response.formData()];
                    case 2:
                        data = _c.sent();
                        return [3 /*break*/, 8];
                    case 3:
                        _b = xml_to_json_1.xmlToJson;
                        return [4 /*yield*/, response.text()];
                    case 4:
                        data = _b.apply(void 0, [_c.sent()]);
                        return [3 /*break*/, 8];
                    case 5: return [4 /*yield*/, response.json()];
                    case 6:
                        data = _c.sent();
                        return [3 /*break*/, 8];
                    case 7: return [3 /*break*/, 8];
                    case 8: return [2 /*return*/, { response: response, data: data }];
                }
            });
        }); });
    };
}
exports.request = request;
