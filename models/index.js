// import models 
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// define association
//User has many post
User.hasMany(Post, {
    foreignKey: 'user_id'
})
//post belong to user
Post.belongsTo(User, {
    foreignKey: 'user_id',
})
//user has many comment
User.hasMany(Comment, {
    foreignKey: 'user_id',
})
//comment belong to user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})
//post has many comment
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'casecade'
})
//comment belong to post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})
//export models
module.exports = { User, Post, Comment };