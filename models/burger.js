var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(burger_name, cb) {
      orm.create("burgers", ["burger_name", "devoured"], [burger_name, false], cb);
    },
    update: function(id, cb) {
        var burgerID = "id=" + id;
      orm.update("burgers", {devoured: true}, burgerID, cb)
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;