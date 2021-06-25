import { request } from './request';

export function showInvoiceSubmissionEvidence(params) {
  return request("get", `/invoice_submissions/${params.path.guid}/evidence`, { "header": { "accept": "application/json", }, })(params);
}

export function createInvoiceSubmission(params) {
  return request("post", `/invoice_submissions`, { "header": { "accept": "application/json", }, })(params);
}

export function createDocumentSubmission(params) {
  return request("post", `/document_submissions`, { "header": { "accept": "application/json", }, })(params);
}

export function preflightInvoiceRecipient(params) {
  return request("post", `/invoice_submissions/preflight`, { "header": { "accept": "application/json", }, })(params);
}

export function createLegalEntity(params) {
  return request("post", `/legal_entities`, { "header": { "accept": "application/json", }, })(params);
}

export function getLegalEntity(params) {
  return request("get", `/legal_entities/${params.path.id}`)(params);
}

export function deleteLegalEntity(params) {
  return request("delete", `/legal_entities/${params.path.id}`)(params);
}

export function updateLegalEntity(params) {
  return request("patch", `/legal_entities/${params.path.id}`)(params);
}

export function createPeppolIdentifier(params) {
  return request("post", `/legal_entities/${params.path.legal_entity_id}/peppol_identifiers`, { "header": { "accept": "application/json", }, })(params);
}

export function deletePeppolIdentifier(params) {
  return request("delete", `/legal_entities/${params.path.legal_entity_id}/peppol_identifiers/{superscheme}/{scheme}/{identifier}`)(params);
}

export function createAdministration(params) {
  return request("post", `/legal_entities/${params.path.legal_entity_id}/administrations`, { "header": { "accept": "application/json", }, })(params);
}

export function getAdministration(params) {
  return request("get", `/legal_entities/${params.path.legal_entity_id}/administrations/{id}`)(params);
}

export function deleteAdministration(params) {
  return request("delete", `/legal_entities/${params.path.legal_entity_id}/administrations/{id}`)(params);
}

export function updateAdministration(params) {
  return request("patch", `/legal_entities/${params.path.legal_entity_id}/administrations/{id}`)(params);
}

export function getInvoiceJson(params) {
  return request("get", `/purchase_invoices/${params.path.guid}`)(params);
}

export function getInvoiceUbl(params) {
  return request("get", `/purchase_invoices/${params.path.guid}/{packaging}`)(params);
}

export function getInvoiceUblVersioned(params) {
  return request("get", `/purchase_invoices/${params.path.guid}/{packaging}/{package_version}`)(params);
}

export function getWebhookInstances() {
  return request("get", `/webhook_instances/`)();
}

export function deleteWebhookInstance(params) {
  return request("delete", `/webhook_instances/${params.path.guid}`)(params);
}

export function discoveryReceives(params) {
  return request("post", `/discovery/receives`, { "header": { "accept": "application/json", }, })(params);
}

