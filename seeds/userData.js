const { User } = require('../models');

const userData = [{
    username: 'LukeSkywalker',
    password: 'forcespirit'

},
{
    username: 'PrincessLeia',
    password: 'anewhope'
},
{
    username: 'Yoda',
    password: 'galaxyfaraway'
},
{
    username: 'Chewbacca',
    password: 'whoolala'
},
{
    username: 'DarthVader',
    password: 'controlyourfear'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;