angular.module('starter.services', [])


.factory('Orders', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var orders = [{
    id: 0,
    name: 'Naveen Bansal',
    lastText: 'Swiss Gear',
    face: 'img/sc5.jpeg'
  }, {
    id: 1,
    name: 'Abignail Verma',
    lastText: 'Travel Kit',
    face: 'img/sc4.jpeg'
  }, {
    id: 2,
    name: 'Prakash Vinod',
    lastText: 'Home Entertainment',
    face: 'img/sc3.jpeg'
  }, {
    id: 3,
    name: 'Prokol Nisthan',
    lastText: 'Home Decoration',
    face: 'img/sc2.jpeg'
  }, {
    id: 4,
    name: 'Anuok Ipsal',
    lastText: 'Vintage Collectibles',
    face: 'img/sc1.jpeg'
  },{
    id: 5,
    name: 'Animish Tripathi',
    lastText: 'Consumer Electronic',
    face: 'img/sc6.jpeg'
  }];

  return {
    all: function() {
      return orders;
    },
    remove: function(chat) {
      orders.splice(orders.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < orders.length; i++) {
        if (orders[i].id === parseInt(chatId)) {
          return orders[i];
        }
      }
      return null;
    }
  };
});
