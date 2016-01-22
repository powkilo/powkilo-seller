angular.module('starter.services', [])


.factory('Orders', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var orders = [{
    id: 0,
    name: 'BatMobile',
    lastText: 'Original BatMobile replica',
    face: 'img/bat.jpeg'
  }, {
    id: 1,
    name: 'Knife',
    lastText: 'Foldable chromiun knife with plantinum',
    face: 'img/knife.jpg'
  }, {
    id: 2,
    name: 'Gold Mini Sword',
    lastText: 'Ancient sword made of pure gold',
    face: 'img/minisword.jpg'
  }, {
    id: 3,
    name: 'Rotatory Blade',
    lastText: 'Rotatory blade for luxury cars',
    face: 'img/machine.jpg'
  }, {
    id: 4,
    name: 'Checkers',
    lastText: 'DC comics superhero checkers',
    face: 'img/chessset.jpg'
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
