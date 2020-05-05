// Goal:

// Make object literals for each shop location

var seattle = {
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  cookieSales:[],
  randoCust: function getRandomIntInclusive(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  render: function(){
    var parent = document.getElementById('seattle');
    var listItem = document.createElement('li');
    listItem.textContent = this.hoursOpen;
    parent.appendChild(listItem);
  }
};
seattle.randoCust();
seattle.render();


// var tokyo = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
// };

// var dubai = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
// };
