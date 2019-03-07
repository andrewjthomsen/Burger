var express = require('express');
var burger = require('../models/burger.js')
var router = express.Router();

router.get("/", function(req, res) {
    cat.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
    //   res.render("index", hbsObject);
    });
  });

  router.get("/burgers", function(req, res) {
    burger.all(function(data) {
     res.render("index", {burger_data: data});
      console.log(data);
    //   res.render("index", hbsObject);
    });
  });

  router.post("/burgers/create", function(req, res) {
    burger.create( req.body.burger_name
   , function(result) {
      // Send back the ID of the new quote
      res.redirect("/burgers");
      console.log(result);
    });
  });

  router.put("/burgers/:id", function(req, res) {
  
    burger.update(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;