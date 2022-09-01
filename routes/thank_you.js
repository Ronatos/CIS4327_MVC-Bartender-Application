var express = require('express');
var router = express.Router();

/* GET thank you message */
router.get('/', function(req, res, next) {
    res.render('thank_you');
});

module.exports = router;
