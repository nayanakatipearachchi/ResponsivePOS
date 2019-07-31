/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function Invoice(invoiceNo, date, customerNic, invoiceDetails) {

    var _invoiceNo = invoiceNo;
    var _date = date;
    var _customerNic = customerNic;
    var _invoiceDetails = invoiceDetails;

    this.setInvoiceNo = function (newInvoiceNo) {
        _invoiceNo = newInvoiceNo;
    },
    this.getInvoiceNo = function () {
        return _invoiceNo;
    },
    this.setDate = function (newDate) {
        _date = newDate;
    },
    this.getDate = function () {
        return _date;
    },
    this.setCustomerNic = function (newNic) {
        _customerNic = newNic;
    },
    this.getCustomerNic = function () {
        return _customerNic;
    },
    this.setInvoiceDetails = function (newInvoiceDetails) {
        _invoiceDetails = newInvoiceDetails;
    },
    this.getInvoiceDetails = function () {
        return _invoiceDetails;
    };
}