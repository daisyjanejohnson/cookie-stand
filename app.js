'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// random # function
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
  }
};
Store.prototype.calcCookiesSoldEachHour = function () {
  // multiply the customers by the average cookies each customer buys
  for (var i = 0; i < this.customersEachHour.length; i++) {
    var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.avgCookie);

    this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

    this.totalCookiesPerDay += wholeCookiesSoldForOneHour;
  }
};
Store.prototype.render = function () {
  this.calcCustomersPerHour();
  this.calcCookiesSoldEachHour();
  var mainElement = document.getElementById('stores');
  //get the parent element from the DOM
  // 1. create an element
  //2. fll it with text content
  //3. append
  //render the name of the store
  var unorderedL = document.createElement('ul');

  var listItem = document.createElement('li');
  listItem.textContent = this.location;
  unorderedL.appendChild(listItem);

  //render cookiesSoldEachHour
  for (var i = 0; i < hours.length; i++) {
    listItem = document.createElement('li');
    listItem.textContent = `${hours[i]}, ${this.cookiesSoldEachHour[i]} cookies.`;
    unorderedL.appendChild(listItem);
  }

  // this will render totalCookiesPerDay to the DOM
  listItem = document.createElement('li');
  listItem.textContent = `total ${this.totalCookiesPerDay}`;
  unorderedL.appendChild(listItem);

  // put UL into main element
  mainElement.appendChild(unorderedL);
};



// use keyword new

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.3);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);


// render to DOM
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
