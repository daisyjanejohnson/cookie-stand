'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(location, minCustomersEachHour, maxCustomersEachHour, avgCookieSoldPerCustomer) {
  this.location = location;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.avgCookie = avgCookieSoldPerCustomer;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesPerDay = 0;
}
Store.prototype.calcCustomersPerHour = function () {
  // calculate the customers each hour and populate the array
  for (var i = 0; i < hours.length; i++) {
    var customersThisHour = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

    this.customersEachHour.push(customersThisHour);
    console.log('customers each hour', this.customersEachHour);
  }
};
Store.prototype.calcCookiesSoldEachHour = function () {
  // multiply the customers by the average cookies each customer buys
  for (var i = 0; i < this.customersEachHour.length; i++) {
    var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.avgCookie);

    this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

    this.totalCookiesPerDay += wholeCookiesSoldForOneHour;
    console.log(this.cookiesSoldEachHour);
  }
  console.log(this.totalCookiesPerDay);
};
Store.prototype.render = function () {
  this.calcCustomersPerHour();
  this.calcCookiesSoldEachHour();
  //get the parent element from the DOM
  // 1. create an element
  // 2. fll it with text content
  // 3. append

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

  // // this will render totalCookiesPerDay to the DOM
  tableData = document.createElement('td');
  tableData.textContent = this.totalCookiesPerDay;
  tableRow.appendChild(tableData);

  // // put UL into main element
  parentElement.appendChild(tableRow);

};

// Parent Element for TABLE
var parentElement = document.getElementById('table');

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

// use keyword new

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);


// render to DOM
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// helper functions
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
