"use strict";

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('home', {
      words: "Welcome to Life Done Different!!"
    });
});

router.get('/about', function (req, res) {
    res.render('about', {
      words: "Welcome to About!!"
    });
});

router.get('/podcasts', function (req, res) {
    res.render('podcasts', {
      words: "Welcome to Podcasts!!"
    });
});

module.exports = router;
