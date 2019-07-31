///* 
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */


function addCustomer(Customer) {
    customerArray.push(Customer);
}


function searchCustomer(key) {

    var customer = null;
    for (var i = 0; i < customerArray.length; i++) {
        customer = customerArray[i];

        if (customer.getNic() === key) {
            return customer;
        } else {
            return null;
        }
    }

}

function updateCustomer(Customer) {

    var tempCust = null;
    for (var i = 0; i < customerArray.length; i++) {
        tempCust = customerArray[i];

        if (Customer.getNic() === tempCust.getNic()) {
            tempCust.setFName(Customer.getFName());
            tempCust.setLName(Customer.getLName());
            tempCust.setCity(Customer.getCity());
            tempCust.setPhone(Customer.getPhone());
            tempCust.setAddress(Customer.getAddress());
        }
    }

}

function removeCustomer(key) {

    var boolean = false;

    for (var i = 0; i < customerArray.length; i++) {
        customer = customerArray[i];

        if (customer.getNic() === key) {
            customerArray.splice(i, 1);
            boolean = true;
            break;
        }
    }

    if (boolean) {
        return true;
    } else {
        return false;
    }

}

function getAllCustomers() {

    return customerArray;

}