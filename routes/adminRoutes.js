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
  var p = new Podcast({
    guestName: req.body.guestName,
    occupation: req.body.occupation,
    imageURL: req.body.imageURL,
    shortBio: req.body.shortBio,
    longBio: req.body.longBio,
    audioLink: req.body.audioLink,
    showNotes: req.body.showNotes.split(','),
    showLinks: req.body.showLinks.split(','),
    tags: req.body.tags.split(','),
    comments: []
  });
  p.save(function(err){
      if(err){
        res.send(err);
      } else {
        res.render('addPodcast', {
          success: true
        });
      };
    });
});

module.exports = router;
