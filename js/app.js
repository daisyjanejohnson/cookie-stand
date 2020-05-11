'use strict';

var allStores = [];

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Parent Element for TABLE
var parentElement = document.getElementById('table');


// constructor function
function Store(location, minCustomersEachHour, maxCustomersEachHour, avgCookieSoldPerCustomer) {
  this.location = location;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.avgCookie = avgCookieSoldPerCustomer;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesPerDay = 0;
  allStores.push(this);
}
Store.prototype.calcCustomersPerHour = function () {
  this.customersEachHour = [];
  // calculate the customers each hour and populate the array
  for (var i = 0; i < hours.length; i++) {
    var customersThisHour = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

    this.customersEachHour.push(customersThisHour);
  }
};
Store.prototype.calcCookiesSoldEachHour = function () {
  this.cookiesSoldEachHour = [];
  this.calcCustomersPerHour();

  // multiply the customers by the average cookies each customer buys
  for (var i = 0; i < this.customersEachHour.length; i++) {
    var totalCookies = Math.ceil(this.customersEachHour[i] * this.avgCookie);

    this.cookiesSoldEachHour.push(totalCookies);

    this.totalCookiesPerDay += totalCookies;
  }
};
Store.prototype.render = function () {
  this.calcCookiesSoldEachHour();
  // ONLY FOR THE BODY OF THE TABLE
  // put 'Location' on a table.
  var tableRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = this.location;
  tableRow.appendChild(tableHeader);

  // //render cookiesSoldEachHour
  for (var i = 0; i < this.cookiesSoldEachHour.length; i++) {
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesSoldEachHour[i];
    tableRow.appendChild(tableData);
  }

  // this will render totalCookiesPerDay to the DOM
  tableData = document.createElement('td');
  tableData.textContent = this.totalCookiesPerDay;
  tableRow.appendChild(tableData);

  // put UL into main element
  parentElement.appendChild(tableRow);

};

// object instances
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

function buildHeaderRow() {
  //put 'Hours' on Header
  var hoursRow = document.createElement('tr');
  var hoursHeader = document.createElement('th');
  hoursRow.appendChild(hoursHeader);
  for (var i = 0; i < hours.length; i++) {
    hoursHeader = document.createElement('th');
    hoursHeader.textContent = hours[i];
    hoursRow.appendChild(hoursHeader);
  }
  hoursHeader = document.createElement('th');
  hoursHeader.textContent = 'Daily Total';
  hoursRow.appendChild(hoursHeader);
  parentElement.appendChild(hoursRow);
}

// footer
function renderFooterRow() {
  var tableRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = 'Hourly Total';
  tableRow.appendChild(tableHeader);

  //outer loop for each hour
  var totalOfAllTotals = 0;
  for (var i = 0; i < hours.length; i++) {
    var sum = 0;
    // inner loop is going to loop over each store
    //access my cookies sold each hour array at the same position as my outer loop
    for (var j = 0; j < allStores.length; j++) {
      sum += allStores[j].cookiesSoldEachHour[i];
    }

    totalOfAllTotals += sum;
    // totalOfAllTotals = totalOfAllToal + sum

    var tableData = document.createElement('td');
    tableData.textContent = sum;
    tableRow.appendChild(tableData);

  }

  //append the totalofalltotals
  tableData = document.createElement('td');
  tableData.textContent = totalOfAllTotals;
  tableRow.appendChild(tableData);
  parentElement.appendChild(tableRow);
}


// helper functions
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function addElement(element, content, parent){

// Form

var form = document.getElementById('form');

function handleFormSubmit(event) {
  event.preventDefault();

  var location = event.target.location.value;
  var minCustomersEachHour = parseInt(event.target.minCustomersEachHour.value);
  var maxCustomersEachHour = parseInt(event.target.maxCustomersEachHour.value);
  var avgCookieSoldPerCustomer = parseInt(event.target.avgCookieSoldPerCustomer.value);

  new Store(location, minCustomersEachHour, maxCustomersEachHour, avgCookieSoldPerCustomer);

  parentElement.textContent = '';

  buildHeaderRow();

  // loop over object instances including new one
  //call render function on all of them
  for (var i=0; i<allStores.length;i++){
    allStores[i].render();
  }

  renderFooterRow();
}

buildHeaderRow();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
renderFooterRow();

form.addEventListener('submit', handleFormSubmit);

