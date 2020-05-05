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

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; //eslint-disable-line

var seattle = { //eslint-disable-line
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  avgCookieSoldPerCustomer: 6.3,
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesPerDay: 0,

  calcCustomersPerHour: function(){
    // calculate the customers each hour and populate the array
    for( var i=0; i<hours.length; i++){
      var customersThisHour = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

      this.customersEachHour.push(customersThisHour);
    }
  },
  render: function (){
    // this will render totalCookiesPerDay to the DOM
  }
};

seattle.calcCustomersEachHour();

// got this function from MDN MAth.random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min; // The maximum is inclusive and the minimum is inclusive
}

