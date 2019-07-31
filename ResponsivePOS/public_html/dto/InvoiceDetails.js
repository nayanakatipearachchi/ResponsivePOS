/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function InvoiceDetails(invoiceNo, itemCode, qty, price) {

    var _invoiceNo = invoiceNo;
    var _itemCode = itemCode;
    var _qty = qty;
    var _price  = price;

    this.setInvoiceNo = function (newInvoiceNo) {
        _invoiceNo = newInvoiceNo;
    },
    this.getInvoiceNo = function () {
        return _invoiceNo;
    },
    this.setItemCode = function (newItemCode){
        _itemCode = newItemCode;
    },
    this.getItemCode = function (){
        return _itemCode; 
    },
    this.setQty = function (newQty) {
        _qty = newQty;
    },
    this.getQty = function () {
        return _qty;
    },
    this.setDisCount = function (newPrice) {
        _price = newPrice;
    },
    this.getDiscount = function () {
        return _price;
    };
}