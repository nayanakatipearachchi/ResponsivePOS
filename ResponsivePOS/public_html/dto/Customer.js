/* 
 * To change this license header; choose License Headers in Project Properties.
 * To change this template file; choose Tools | Templates
 * and open the template in the editor.
 */


function Customer(fName, lName, nic, email, phone, address, city) {

    var _fName = fName;
    var _lName = lName;
    var _nic = nic;
    var _email = email;
    var _phone = phone;
    var _address = address;
    var _city = city;


    this.setFName = function (newFName) {
        _fName = newFName;
    },
    this.getFName = function () {
        return _fName;
    },
    this.setLName = function (newLName) {
        _lName = newLName;
    },
    this.getLName = function () {
        return _lName;
    },
    this.setNic = function (newNic) {
        _nic = newNic;
    },
    this.getNic = function () {
        return _nic;
    },
    this.setPhone = function (newPhone) {
        _phone = newPhone;
    },
    this.getPhone = function () {
        return _phone;
    },
    this.setEmail = function (newEmail) {
        _email = newEmail;
    },
    this.getEmail = function () {
        return _email;
    },
    this.setAddress = function (newAdddress) {
        _address = newAdddress;
    },
    this.getAddress = function () {
        return _address;
    },
    this.setCity = function (newCity) {
        _city = newCity;
    },
    this.getCity = function () {
        return _city;
    };

}
