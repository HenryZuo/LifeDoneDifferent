var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, function(err){
  if(!err){
    console.log("Connected to database!");
  }
})

var Schema = mongoose.Schema

var podcastSchema = new Schema({
  guestName: { type: String, required: true },
  occupation: { type: String, required: true },
  imageURL: { type: String, required: true },
  shortBio: { type: String, required: true },
  longBio: { type: String, required: true },
  showNotes: { type: Array, required: true },
  showLinks: { type: Array, required: true },
  audioLink: { type: String, required: true },
  tags: { type: Array, required: true },
  comments: { type: Array, required: true }
});

var commentSchema = new Schema({
  userID: { type: String, required: true },
  content: { type: String, required: true },
  time: { type: Date, required: true },
  replies: { type: Array }
});

var userSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true }
});

module.exports = {
  Podcast: mongoose.model('Podcast', podcastSchema),
  Comment: mongoose.model('Comment', commentSchema),
  User: mongoose.model('User', userSchema)
};
