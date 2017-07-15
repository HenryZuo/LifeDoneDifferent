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
  });
});

router.get('/podcasts/:podcastName', function (req, res) {
  var paramString = req.params.podcastName;
  var paramName = paramString.split('.').join(' ');
  Podcast.findOne({guestName: paramName}).exec(function(err, p){
    if(err){
      res.send(err);
    } else {
      res.render('onePodcast', {
        p: p._doc
      });
    }
  });
});

router.post('/podcasts/:podcastName', function (req, res) {
  var paramString = req.params.podcastName;
  var paramName = paramString.split('.').join(' ');
  Podcast.findOne({guestName: paramName}).exec(function(err, p){
    if(err){res.send(err);} else {
      User.findOne({email: req.body.email}).exec(function(err, u){
        if(err){res.send(err);}
        else {
          if(u===null){
            var u = new User({
              email: req.body.email,
              name: req.body.name});
            u.save().exec(function(err){
              if(err){res.send(err)}
              else {
                var c = new Comment({
                  userID: u._id,
                  content: req.body.content,
                  time: new Date(),
                  replies: []
                });
                console.log("what is c??");
                c.save().exec(function(err){
                  if(err){res.send(err)}
                  else {
                    Podcast.update({ _id: p._id }, { $push: { comments: commentID } })
                    .exec(function(err, p){
                      if(err){res.send(err);
                      } else {res.redirect('/podcasts/' + req.body.params.podcastName)};
                    });
                  }
                });
              };
            });
          } else {
            var c = new Comment({
              userID: u._id,
              content: req.body.content,
              time: new Date(),
              replies: []
            });
            console.log("________________________________________________");
            console.log("________________________________________________");
            console.log("________________________________________________");
            c.save(function(err){
              if(err){
              console.log(err);}
              res.send("save succeeded!");
            })
            // .exec(function(err){
            //   if(err){res.send(err)}
            //   else {
            //     Podcast.update({ _id: p._id }, { $push: { comments: commentID } })
            //     .exec(function(err, p){
            //       if(err){res.send(err);
            //       } else {res.redirect('/podcasts/' + req.body.params.podcastName)};
            //     });
            //   }
            // });
          };
        };
      });
    };
  });
});


module.exports = router;
