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
        pArr: pArr,

      });
    }
  });
});

router.get('/podcasts/:podcastID', function (req, res) {
  var p;
  Podcast.findOne({_id: req.params.podcastID}).exec()
  .then(function(pcast){
    p = pcast;
    return Comment.find({podcastID: p._id}).exec()})
  .then(function(cArr){
    res.render('onePodcast', {
      p: p._doc,
      cArr: cArr
    });
  });
});

router.post('/podcasts/:podcastName', function (req, res) {
  var paramString = req.params.podcastName;
  var paramName = paramString.split('.').join(' ');
  var p;

  Podcast.findOne({guestName: paramName}).exec()
  .then(function(pcast){
    p = pcast;
    return User.findOne({email: req.body.email})
  })
  .then(function(u){
    if(u===null){
      var u = new User({
        email: req.body.email,
        name: req.body.name});
    u.save()
    .then(function(u){
      var c = new Comment({
        podcastID: p._id,
        userID: u._id,
        content: req.body.content,
        name: req.body.name,
        time: new Date(),
        replies: []
      });
      return c.save();
    })
    .then(function(c){
      res.redirect('/podcasts/' + req.params.podcastName);
    })
    .catch(function(e){console.log("ERROR1: ", e);});
    } else {
      var c = new Comment({
        podcastID: p._id,
        userID: u._id,
        content: req.body.content,
        time: new Date(),
        name: req.body.name,
      });
      c.save()
      .then(function(c){
        res.redirect('/podcasts/' + req.params.podcastName);
      })
      .catch(function(e){console.log("ERROR2: ", e);});
    };
  });
});


module.exports = router;
