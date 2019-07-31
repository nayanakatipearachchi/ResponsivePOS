/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//
//function additem() {
//    
//    var code = $("#code").val();
//    var name = $("#name").val();
//    var qty = $("#qty").val();
//    var price = $("#price").val();
//
//    var valid = newitemValidation();alert(valid);
//    if (valid) {
//        var item = new item(code, name, qty, "true" ,price);
//        itemArray.push(item);
//        alert("item Added Success !!");
//    } else {
//        alert("item Added Failed !!");
//    }
//
//}



function additem(Item) {
    itemArray.push(Item);
}


function searchItem(key) {

    var item = null;
    for (var i = 0; i < itemArray.length; i++) {
        item = itemArray[i];

        if (item.getItemCode() === key) {
            return item;
        } else {
            return null;
        }
    }

}

function updateItem(Item) {
    
    var tempItem = null;
    for (var i = 0; i < itemArray.length; i++) {
        tempItem = itemArray[i];

        if (Item.getItemCode() === tempItem.getItemCode()) {
            tempItem.setItemName(Item.getItemName());
            tempItem.setQty(Item.getQty());
            tempItem.setActive(Item.getActive());
            tempItem.setPrice(Item.getprice());
        }
    }

}

function removeItem(key) {

    var boolean = false;

    for (var i = 0; i < itemArray.length; i++) {
        item = itemArray[i];

        if (item.getItemCode() === key) {
            itemArray.splice(i, 1);
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

function getAllItems() {

    return itemArray;

}