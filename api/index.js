"use strict";
exports.__esModule = true;
exports.discoveryReceives = exports.deleteWebhookInstance = exports.getWebhookInstances = exports.getInvoiceUblVersioned = exports.getInvoiceUbl = exports.getInvoiceJson = exports.updateAdministration = exports.deleteAdministration = exports.getAdministration = exports.createAdministration = exports.deletePeppolIdentifier = exports.createPeppolIdentifier = exports.updateLegalEntity = exports.deleteLegalEntity = exports.getLegalEntity = exports.createLegalEntity = exports.preflightInvoiceRecipient = exports.createDocumentSubmission = exports.createInvoiceSubmission = exports.showInvoiceSubmissionEvidence = void 0;
var request_1 = require("./request");
function showInvoiceSubmissionEvidence(params) {
    return request_1.request("get", "/invoice_submissions/" + params.path.guid + "/evidence", { "header": { "accept": "application/json" } })(params);
}
exports.showInvoiceSubmissionEvidence = showInvoiceSubmissionEvidence;
function createInvoiceSubmission(params) {
    return request_1.request("post", "/invoice_submissions", { "header": { "accept": "application/json" } })(params);
}
exports.createInvoiceSubmission = createInvoiceSubmission;
function createDocumentSubmission(params) {
    return request_1.request("post", "/document_submissions", { "header": { "accept": "application/json" } })(params);
}
exports.createDocumentSubmission = createDocumentSubmission;
function preflightInvoiceRecipient(params) {
    return request_1.request("post", "/invoice_submissions/preflight", { "header": { "accept": "application/json" } })(params);
}
exports.preflightInvoiceRecipient = preflightInvoiceRecipient;
function createLegalEntity(params) {
    return request_1.request("post", "/legal_entities", { "header": { "accept": "application/json" } })(params);
}
exports.createLegalEntity = createLegalEntity;
function getLegalEntity(params) {
    return request_1.request("get", "/legal_entities/" + params.path.id)(params);
}
exports.getLegalEntity = getLegalEntity;
function deleteLegalEntity(params) {
    return request_1.request("delete", "/legal_entities/" + params.path.id)(params);
}
exports.deleteLegalEntity = deleteLegalEntity;
function updateLegalEntity(params) {
    return request_1.request("patch", "/legal_entities/" + params.path.id)(params);
}
exports.updateLegalEntity = updateLegalEntity;
function createPeppolIdentifier(params) {
    return request_1.request("post", "/legal_entities/" + params.path.legal_entity_id + "/peppol_identifiers", { "header": { "accept": "application/json" } })(params);
}
exports.createPeppolIdentifier = createPeppolIdentifier;
function deletePeppolIdentifier(params) {
    return request_1.request("delete", "/legal_entities/" + params.path.legal_entity_id + "/peppol_identifiers/{superscheme}/{scheme}/{identifier}")(params);
}
exports.deletePeppolIdentifier = deletePeppolIdentifier;
function createAdministration(params) {
    return request_1.request("post", "/legal_entities/" + params.path.legal_entity_id + "/administrations", { "header": { "accept": "application/json" } })(params);
}
exports.createAdministration = createAdministration;
function getAdministration(params) {
    return request_1.request("get", "/legal_entities/" + params.path.legal_entity_id + "/administrations/{id}")(params);
}
exports.getAdministration = getAdministration;
function deleteAdministration(params) {
    return request_1.request("delete", "/legal_entities/" + params.path.legal_entity_id + "/administrations/{id}")(params);
}
exports.deleteAdministration = deleteAdministration;
function updateAdministration(params) {
    return request_1.request("patch", "/legal_entities/" + params.path.legal_entity_id + "/administrations/{id}")(params);
}
exports.updateAdministration = updateAdministration;
function getInvoiceJson(params) {
    return request_1.request("get", "/purchase_invoices/" + params.path.guid)(params);
}
exports.getInvoiceJson = getInvoiceJson;
function getInvoiceUbl(params) {
    return request_1.request("get", "/purchase_invoices/" + params.path.guid + "/{packaging}")(params);
}
exports.getInvoiceUbl = getInvoiceUbl;
function getInvoiceUblVersioned(params) {
    return request_1.request("get", "/purchase_invoices/" + params.path.guid + "/{packaging}/{package_version}")(params);
}
exports.getInvoiceUblVersioned = getInvoiceUblVersioned;
function getWebhookInstances() {
    return request_1.request("get", "/webhook_instances/")();
}
exports.getWebhookInstances = getWebhookInstances;
function deleteWebhookInstance(params) {
    return request_1.request("delete", "/webhook_instances/" + params.path.guid)(params);
}
exports.deleteWebhookInstance = deleteWebhookInstance;
function discoveryReceives(params) {
    return request_1.request("post", "/discovery/receives", { "header": { "accept": "application/json" } })(params);
}
exports.discoveryReceives = discoveryReceives;
