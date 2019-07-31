/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function addInvoice(Invoice) {
    invoiceArray.push(Invoice);
}


function searchInvoice(key) {

    var invoice = null;
    for (var i = 0; i < invoiceArray.length; i++) {
        invoice = invoiceArray[i];

        if (invoice.getInvoiceNo() === key) {
            return invoice;
        } else {
            return null;
        }
    }

}
//
//function updateInvoice(Invoice) {
//
//    var tempInvoice = null;
//    for (var i = 0; i < invoiceArray.length; i++) {
//        tempInvoice = invoiceArray[i];
//
//        if (Invoice.getNic() === tempInvoice.getNic()) {
//            tempInvoice.setFName(Invoice.getFName());
//            tempInvoice.setLName(Invoice.getLName());
//            tempInvoice.setCity(Invoice.getCity());
//            tempInvoice.setPhone(Invoice.getPhone());
//            tempInvoice.setAddress(Invoice.getAddress());
//        }
//    }
//
//}

function removeInvoice(key) {

    var boolean = false;

    for (var i = 0; i < invoiceArray.length; i++) {
        invoice = invoiceArray[i];

        if (invoice.getInvoiceNo() === key) {
            invoiceArray.splice(i, 1);
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

function getAllInvoices() {

    return invoiceArray;

}