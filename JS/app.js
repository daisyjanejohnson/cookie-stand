// Goal:

// Make object literals for each shop location

var seattle = {
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  randCustPerHour: function () {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var randoCust = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;

      randoCust = randoCust * this.avgCookie;
      randoCust = Math.floor(randoCust);
      this.customersPerHour.push(randoCust);
    }
  },
  cookiesPerDay: function(){
    
  }
};
seattle.randCustPerHour();
console.log(seattle.customersPerHour);



// var tokyo = {
//   hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   custPerHour: function () {

//   },
//   cookiesPerHour: function () {

//   }

// };

// var dubai = {
//   hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
//   custPerHour: function () {

//   },
//   cookiesPerHour: function () {

//   }
// };

// var paris = {
//   hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   custPerHour: function () {

//   },
//   cookiesPerHour: function () {

//   }
// };

// var lima = {
//   hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   custPerHour: function () {

//   },
//   cookiesPerHour: function () {

//   },
// };
