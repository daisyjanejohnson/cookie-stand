'use strict';
// need an array to store the hours -given

//object literal for each store
//min cust each hour - given
//max customer each hour -given
//average cookie sold per cutomer - given
//for each hour
//make an array that holds the cutomers for each hour
//need a random number between the min and the max.
// *** make an array that holds the number of cookies sold each hour ***
// multiply the customers by the average cookies each customer buys
// ^^ This is what we want to put on the DOM
// total cookies for the day

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattle = {
  name: 'Seattle',
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  avgCookieSoldPerCustomer: 6.3,
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesPerDay: 0,

  calcCustomersPerHour: function () {
    // calculate the customers each hour and populate the array
    for (var i = 0; i < hours.length; i++) {
      var customersThisHour = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

      this.customersEachHour.push(customersThisHour);
    }
  },

  calcCookiesSoldEachHour: function () {
    // multiply the customers by the average cookies each customer buys
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.avgCookieSoldPerCustomer);

      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

      this.totalCookiesPerDay += wholeCookiesSoldForOneHour;
    }
  },
  render: function () {
    seattle.calcCustomersPerHour();
    seattle.calcCookiesSoldEachHour();
    var seattleElement = document.getElementById('seattle');
    //get the parent element from the DOM
    // 1. create an element
    //2. fll it with text content
    //3. append
    //render the name of the store
    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    seattleElement.appendChild(listItem);

    //render cookiesSoldEachHour
    for (var i = 0; i < hours.length; i++) {
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}, ${this.cookiesSoldEachHour[i]} cookies.`;
      seattleElement.appendChild(listItem);
    }
    // this will render totalCookiesPerDay to the DOM
    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesPerDay;
    seattleElement.appendChild(listItem);
  }
};


seattle.render();

// got this function from MDN MAth.random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

// Tokyo
var tokyo = {
  name: 'Tokyo',
  minCustomersEachHour: 3,
  maxCustomersEachHour: 24,
  avgCookieSoldPerCustomer: 1.2,
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesPerDay: 0,

  calcCustomersPerHour: function () {
    // calculate the customers each hour and populate the array
    for (var i = 0; i < hours.length; i++) {
      var customersThisHour = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

      this.customersEachHour.push(customersThisHour);
    }
  },

  calcCookiesSoldEachHour: function () {
    // multiply the customers by the average cookies each customer buys
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.avgCookieSoldPerCustomer);

      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

      this.totalCookiesPerDay += wholeCookiesSoldForOneHour;
    }
  },
  render: function () {
    tokyo.calcCustomersPerHour();
    tokyo.calcCookiesSoldEachHour();
    var tokyoElement = document.getElementById('tokyo');
    //get the parent element from the DOM
    // 1. create an element
    //2. fll it with text content
    //3. append
    //render the name of the store
    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    tokyoElement.appendChild(listItem);

    //render cookiesSoldEachHour
    for (var i = 0; i < hours.length; i++) {
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}, ${this.cookiesSoldEachHour[i]} cookies.`;
      tokyoElement.appendChild(listItem);
    }
    // this will render totalCookiesPerDay to the DOM
    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesPerDay;
    tokyoElement.appendChild(listItem);
  }
};


tokyo.render();

// Dubai
var dubai = {
  name: 'Dubai',
  minCustomersEachHour: 11,
  maxCustomersEachHour: 38,
  avgCookieSoldPerCustomer: 3.7,
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesPerDay: 0,

  calcCustomersPerHour: function () {
    // calculate the customers each hour and populate the array
    for (var i = 0; i < hours.length; i++) {
      var customersThisHour = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

      this.customersEachHour.push(customersThisHour);
    }
  },

  calcCookiesSoldEachHour: function () {
    // multiply the customers by the average cookies each customer buys
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.avgCookieSoldPerCustomer);

      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

      this.totalCookiesPerDay += wholeCookiesSoldForOneHour;
    }
  },
  render: function () {
    dubai.calcCustomersPerHour();
    dubai.calcCookiesSoldEachHour();
    var dubaiElement = document.getElementById('tokyo');

    //render the name of the store
    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    dubaiElement.appendChild(listItem);

    //render cookiesSoldEachHour
    for (var i = 0; i < hours.length; i++) {
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}, ${this.cookiesSoldEachHour[i]} cookies.`;
      dubaiElement.appendChild(listItem);
    }
    // this will render totalCookiesPerDay to the DOM
    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesPerDay;
    dubaiElement.appendChild(listItem);
  }
};

dubai.render();

// Paris
var paris = {
  name: 'Paris',
  minCustomersEachHour:20,
  maxCustomersEachHour:38,
  avgCookieSoldPerCustomer:2.3,
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesPerDay: 0,

  calcCustomersPerHour: function () {
    // calculate the customers each hour and populate the array
    for (var i = 0; i < hours.length; i++) {
      var customersThisHour = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

      this.customersEachHour.push(customersThisHour);
    }
  },

  calcCookiesSoldEachHour: function () {
    // multiply the customers by the average cookies each customer buys
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.avgCookieSoldPerCustomer);

      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

      this.totalCookiesPerDay += wholeCookiesSoldForOneHour;
    }
  },
  render: function () {
    paris.calcCustomersPerHour();
    paris.calcCookiesSoldEachHour();
    var parisElement = document.getElementById('tokyo');

    //render the name of the store
    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    parisElement.appendChild(listItem);

    //render cookiesSoldEachHour
    for (var i = 0; i < hours.length; i++) {
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}, ${this.cookiesSoldEachHour[i]} cookies.`;
      parisElement.appendChild(listItem);
    }
    // this will render totalCookiesPerDay to the DOM
    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesPerDay;
    parisElement.appendChild(listItem);
  }
};


paris.render();

