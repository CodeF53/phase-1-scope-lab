// Write your solution in this file!
/*
  Fix the Scope
    declare customerName to be bob in global scope
      1) returns the customerName
    upperCaseCustomerName()
      2) modifies the customerName variable
    setBestCustomer()
      3) setBestCustomer
    overwriteBestCustomer()
      4) overwrites the best customer
    changeLeastFavoriteCustomer()
      5) unsuccessfully tries to reassign the least favorite customer

*/

var bestCustomer;
var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "bob";
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "not bob";
}