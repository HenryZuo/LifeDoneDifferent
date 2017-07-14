"use strict";

// create router to write routes on
var express = require('express');
var router = express.Router();

// import mongodb models
var Podcast = require('../models/models').Podcast;
var Comment = require('../models/models').Comment;
var User = require('../models/models').User;

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
  Podcast.find().exec(function(err, pArr){
    if(err){
      res.send(err);
    } else {
      res.render('podcasts', {
        pArr: pArr
      });
    }
  })
});

router.get('/podcasts/:podcastName', function (req, res) {
    res.render('podcasts', {
      words: "Welcome to Podcasts!!"
    });
});

router.post('/podcasts/:podcastName', function (req, res) {
  res.render('podcasts', {
    words: "Welcome to Podcasts!!"
  });
});

module.exports = router;
