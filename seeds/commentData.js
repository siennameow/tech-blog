const { Comment } = require('../models');

const commentData = [{
        comment_text: "I have a very bad feeling about this.",
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: "Why you stuck up?",
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: "I don't even know if i should code or not!",
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: "Do or do not. There is no try.",
        user_id: 4,
        post_id: 5
    },
    {
        comment_text: "Don't let yourself get burnt out",
        user_id: 5,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;