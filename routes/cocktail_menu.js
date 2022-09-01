var express = require('express');
var router = express.Router();

/* GET cocktail menu */
router.get('/', function(req, res, next) {
    res.render('cocktail_menu');
});

/* POST cocktail menu */
router.post('/', function(req, res, next) {
    let drink = req.body.drink;
    res.render('cocktail_menu');
    console.log("The customer has requested a " + req.body.drink + ".");
});

module.exports = router;