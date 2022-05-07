// import models 
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// define association
//User has many post

//post belong to user

//user has many comment

//comment belong to user

//post has many comment

//comment belong to post

//export models
module.exports = { User, Post, Comment };