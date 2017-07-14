"use strict";

// create router to write routes on
var express = require('express');
var router = express.Router();

// import mongodb models
var Podcast = require('../models/models').Podcast;

router.get('/addPodcast', function (req, res) {
  res.render('addPodcast');
});

router.post('/addPodcast', function (req, res) {
  console.log(req);
  res.render('addPodcast');
});

module.exports = router;
