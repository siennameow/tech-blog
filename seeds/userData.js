const { User } = require('../models');

const userData = [{
    username: 'SnowWhite',
    password: 'notapple'

},
{
    username: 'EvilQueen',
    password: 'mirrormirror'
},
{
    username: 'Prince',
    password: 'charming'
},
{
    username: 'SevenDwarfs',
    password: 'whoolala'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;