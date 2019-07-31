/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BUTTON_ID_ARRAY = ["dashboard-div", "newcustomer-div", "newitem-div", "neworder-div", "vieworder-div",
    "allcustomer-div", "allitem-div", "remcustomer-div", "editcustomer-div", "removeitem-div", "edititem-div"];
var LINK_ARRAY = ["dash", "nc", "ec", "rc", "ac", "ni", "ei", "ri", "ai", "no", "o", "r"];
$(document).ready(function () {
    $("#newcustomer-div").hide();
    $("#newitem-div").hide();
    $("#neworder-div").hide();
    $("#vieworder-div").hide();
    $("#dashboard-div").show();
    $("allcustomer-div").hide();
    $("allitem-div").hide();
    $("editcustomer-div").hide();
    $("remcustomer-div").hide();
    $("removeitem-div").hide();
    $("edititem-div").hide();
});

function loadDiv(div) {
    for (var i = 0; i < BUTTON_ID_ARRAY.length; i++) {
        if (div === BUTTON_ID_ARRAY[i]) {
            $("#" + BUTTON_ID_ARRAY[i]).show();
        } else {
            $("#" + BUTTON_ID_ARRAY[i]).hide();
        }
    }

}

// VALIDATIONS

function newCustomerValidation() {

    var valid = false;
    var count = 0;

    var fName = $("#firstName").val();
    var lName = $("#lastName").val();
    var city = $("#city").val();
    var email = $("#email").val();
    var nic = $("#nic").val();
    var tel = $("#mobile").val();
    var address = $("#address").val();

    if ((fName.length === 0) || (lName.length === 0) || (city.length === 0) || (email.length === 0) || (nic.length === 0) || (tel.length === 0) || (address.length === 0)) {
        alert("Fill all Fields");
    } else {
        var nameReg = /^[A-Za-z]+$/;
        var nicReg = /^[0-9]{9}[vV]/;
        var telReg = /^0[1-9]{9}/;
        var addressReg = /^[0-9a-zA-Z]/;
        var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if (!fName.match(nameReg)) {
            $("#firstName").val('');
            $("#firstName").addClass("error");
            count--;
        } else {
            $("#firstName").removeClass("error");
            count++;
        }

        if (!lName.match(nameReg)) {
            $("#lastName").val('');
            $("#lastName").addClass("error");
            count--;
        } else {
            $("#lastName").removeClass("error");
            count++;
        }

        if (!city.match(nameReg)) {
            $("#city").val('');
            $("#city").addClass("error");
            count--;
        } else {
            $("#city").removeClass("error");
            count++;
        }

        if (!email.match(emailReg)) {
            $("#email").val('');
            $("#email").addClass("error");
            count--;
        } else {
            $("#email").removeClass("error");
            count++;
        }

        if (!tel.match(telReg)) {
            $("#mobile").val('');
            $("#mobile").addClass("error");
            count--;
        } else {
            $("#mobile").removeClass("error");
            count++;
        }

        if (!nic.match(nicReg)) {
            $("#nic").val('');
            $("#nic").addClass("error");
            count--;
        } else {
            $("#nic").removeClass("error");
            count++;
        }

        if (!address.match(addressReg)) {
            $("#address").val('');
            $("#address").addClass("error");
            count--;
        } else {
            $("#address").removeClass("error");
            count++;
        }

    }


    if (count === 7) {
        valid = true;
    } else {
        valid = false;
    }

    return valid;

}


function newItemValidation() {

    var valid = false;
    var count = 0;

    var code = $("#code").val();
    var name = $("#name").val();
    var qty = $("#qty").val();
    var price = $("#price").val();


    if ((code.length === 0) || (name.length === 0) || (qty.length === 0) || (price.length === 0)) {
        alert("Fill all Fields");
    } else {
        var nameReg = /^[A-Za-z]+$/;
        var codeReg = /^[A-Za-z0-9]+$/;
        var qtyReg = /^[0-9]{2}/;
        var priceReg = /^\d+(?:[.,]\d+)*$/gm;

        if (!code.match(codeReg)) {
            $("#code").val('');
            $("#code").addClass("error");
            count--;
        } else {
            $("#code").removeClass("error");
            count++;
        }

        if (!name.match(nameReg)) {
            $("#name").val('');
            $("#name").addClass("error");
        } else {
            $("#name").removeClass("error");
            count++;
        }

        if (!qty.match(qtyReg)) {
            $("#qty").val('');
            $("#qty").addClass("error");
            count--;
        } else {
            $("#qty").removeClass("error");
            count++;
        }

        if (!price.match(priceReg)) {
            $("#price").val('');
            $("#price").addClass("error");
            count--;
        } else {
            $("#price").removeClass("error");
            count++;
        }

    }

    if (count === 4) {
        valid = true;
    } else {
        valid = false;
    }

    return valid;
}


// Customer Views

function makeCustomer() {

    var fName = $("#firstName").val();
    var lName = $("#lastName").val();
    var nic = $("#nic").val();
    var email = $("#email").val();
    var tel = $("#mobile").val();
    var address = $("#address").val();
    var city = $("#city").val();

    var valid = newCustomerValidation();
    if (valid) {
        var customer = new Customer(fName, lName, nic, email, tel, address, city);
        addCustomer(customer);
        alert("Customer Added Success !!");
    } else {
        alert("Customer Added Failed !!");
    }

}

function findCustomer() {
    var nic = $("#nicE").val();
    var Customer = searchCustomer(nic);

    $("#firstNameE").val(Customer.getFName());
    $("#lastNameE").val(Customer.getLName());
    $("#emailE").val(Customer.getEmail());
    $("#mobileE").val(Customer.getPhone());
    $("#addressE").val(Customer.getAddress());
    $("#cityE").val(Customer.getCity());

    if (Customer === null) {
        alert("Sorry No Customer Found !!");
    }

}


function modifyCustomer() {

    var fName = $("#firstNameE").val();
    var lName = $("#lastNameE").val();
    var nic = $("#nicE").val();
    var email = $("#emailE").val();
    var tel = $("#mobileE").val();
    var address = $("#addressE").val();
    var city = $("#cityE").val();

    var valid = newCustomerValidation();
    if (valid) {
        var customer = new Customer(fName, lName, nic, email, tel, address, city);
        updateCustomer(customer);
        alert("Customer Update Success !!");
        cleareAllCustData();
    } else {
        alert("Customer Update Failed !!");
    }

}


function deleteCustomer() {
    var nic = $("#nicE").val();
    var boolean = removeCustomer(nic);

    if (boolean) {
//        $("#firstNameE").val();
//        $("#lastNameE").val();
//        $("#emailE").val();
//        $("#mobileE").val();
//        $("#addressE").val();
//        $("#cityE").val();
        alert("Successfully Deleted Customer !");
        cleareAllCustData();

    } else {
        alert("Deleted Customer Failed !");
    }
}


function viewAllCustomer() {

    var allCust = getAllCustomers();

    var rows = "";

    for (var data in allCust) {
        rows += "<tr><td>" + allCust[data].getNic() + "</td><td>" + allCust[data].getFName() + " " + allCust[data].getLName() + "</td><td>" + allCust[data].getPhone() + "</td><td>" + allCust[data].getAddress();
        +"</td></tr>";
    }

    $("#tbleAllCust tbody").html(rows);

}

function cleareAllCustData() {

    $("#firstNameE").val('');
    $("#lastNameE").val('');
    $("#emailE").val('');
    $("#mobileE").val('');
    $("#addressE").val('');
    $("#cityE").val('');

}

// Items Viewa

function makeItem() {

    var code = $("#code").val();
    var name = $("#name").val();
    var qty = $("#qty").val();
    var active = $("#active").val();
    var price = $("#price").val();

    var valid = newItemValidation();
    if (valid) {
        var item = new Item(code, name, qty, active, price);
        additem(item);
        alert("Item Added Success !!");
    } else {
        alert("Item Added Failed !!");
    }

}

function findItem() {
    var code = $("#codeE").val();
    var item = searchItem(code);
    alert(item.getItemName());
    $("#nameE").val(item.getItemName());
    $("#qtyE").val(item.getQty());
    $("#activeE").val(item.getActive());
    $("#priceE").val(item.getprice());

    if (code.length === 0) {
        alert("Sorry No Item Found !!");
    }

}



function modifyItem() {

    var code = $("#codeE").val();
    var name = $("#nameE").val();
    var qty = $("#qtyE").val();
    var active = $("#activeE").val();
    var price = $("#priceE").val();

    var valid = newItemValidation();
    alert(valid);
    if (valid) {
        var item = new Item(code, name, qty, active, price);
        updateItem(item);
        alert("Item Update Success !!");
        clearAllItemData();
    } else {
        alert("Item Update Failed !!");
    }

}



function deleteItem() {
    var code = $("#codeE").val();
    var boolean = removeItem(code);

    if (boolean) {
        alert("Successfully Deleted Item !");
        clearAllItemData();

    } else {
        alert("Deleted Item Failed !");
    }
}


function viewAllItem() {

    var allItem = getAllItems();

    var rows = "";

    for (var data in allItem) {
        rows += "<tr><td>" + allItem[data].getItemCode() + "</td><td>" + allItem[data].getItemName() + "</td><td>" + allItem[data].getQty() + "</td><td>" + allItem[data].getprice() + "</td></tr>";
    }

    $("#tbleAllItem tbody").html(rows);

}



function clearAllItemData() {
    var code = $("#codeE").val('');
    var name = $("#nameE").val('');
    var qty = $("#qtyE").val('');
    var active = $("#activeE").val('');
    var price = $("#priceE").val('');
}


// Invoice Views

function addDataTotable() {
    var code = $("#codeI").val();
    var name = $("#nameI").val();
    var qty = $("#qtyI").val();
    var price = $("#priceI").val();

    var newRow = document.createElement('tr');

    newRow.innerHTML = "<td>" + code + "</td><td>" + name + "</td><td>" + qty + "</td><td>" + price + "</td><td>" + 0 + "</td><td>" + qty * price + "</td>";

    $("#tbleInvoice").append(newRow);

}

function addOrder() {

    var invoiceId = $("#id").val();
    var date = $("#date").val();
    var nic = $("#idI").val();

    var details = [];

    // var table = $("#tbleInvoice").val();
    var table = document.getElementById("tbleInvoice");

    var length = table.rows.length;

    for (var i = 0; i < length; i++) {
        var cell = table.rows.item(i).cells;
        var cellLength = cell.length;

        var orderDetails = null;

        for (var j = 0; j < cellLength; j++) {

            // var cellVal = cell.item(j).innerHTML;
            orderDetails = new InvoiceDetails(invoiceId, cell.item(0).innerHTML, cell.item(2).innerHTML, cell.item(3).innerHTML);
            details.push(orderDetails);

        }
    }

    var order = new Invoice(invoiceId, date, nic, details);


    addInvoice(order);

    alert("Order Added Suucess !!");

}

function viewOrders() {

    var invoices = getAllInvoices();

    for (var i = 0; i < invoices.length; i++) {
        var newRow = document.createElement('tr');
        newRow.innerHTML = "<td onclick=viewOrderDetails('" + invoices[i].getCustomerNic() + "','" + invoices[i].getInvoiceNo() + "')>" + invoices[i].getCustomerNic() + "</td><td>" + invoices[i].getInvoiceNo() + "</td><td>" + "qty" + "</td>";

        $("#tblOrders").append(newRow);
    }
    alert("in");

}

function viewOrderDetails(nic, invoice) {

    var invoices = getAllInvoices();
    for (var i = 0; i < invoice.length; i++) {

        if ((invoices[i].getInvoiceNo() === invoice) && (invoices[i]).getCustomerNic() === nic) {

            // var odLength = invoice[i].getInvoiceDetails().length;
            var od = invoices[i].getInvoiceDetails();
            var newRow = document.createElement('tr');
            for (var j = 0; j < od.length; j++) {

                newRow.innerHTML = "<td>" + od[1] + "</td><td>" + "-----" + "</td><td>" + "---------" + "</td><td>" + od[2] + "</td><td>" + od[3] + "</td><td>" + "------" + "</td><td>" + od[3] * od[2] + "</td>";
                $("#tbleOrderDetails").append(newRow);
            }
            
        }

    }

}