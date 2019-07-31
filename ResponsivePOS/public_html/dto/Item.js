/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function Item(itemCode, itemName, qty, active, price) {

    var _itemCode = itemCode;
    var _itemName = itemName;
    var _qty = qty;
    var _active = active;
    var _price = price;

    this.setItemCode = function (newCode) {
        _itemCode = newCode;
    },
    this.getItemCode = function () {
        return _itemCode;
    },

    this.setItemName = function (newName) {
        _itemName = newName;
    },
    this.getItemName = function () {
        return _itemName;
    },
    
    this.setQty = function (newQty) {
        _qty = newQty;
    },
    this.getQty = function () {
        return _qty;
    },
    
    this.setActive = function (newActive) {
        _active = newActive;
    },
    this.getActive = function () {
        return _active;
    },
    
    this.setPrice = function (newPrice) {
        _price = newPrice;
    },
    this.getprice = function () {
        return _price;
    };

}