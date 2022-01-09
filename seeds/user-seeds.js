const { User } = require('../models');

const userData = [
    {
        username: "tommy_bahama",
        github: "tommyB33",
        linkedIn: "TommyB",
        email: "bahamamama@gmail.com",
        password: "password1"
    },
    {
        username: "richey_rich",
        github: "richard_R",
        linkedIn: "RichardR",
        email: "richeyR@gmail.com",
        password: "password2"
    },
    {
        username: "peter-parker",
        github: "peteyP",
        linkedIn: "PeterP",
        email: "notspiderman@gmail.com",
        password: "password3"
    },
    {
        username: "heyArnold",
        github: "footballHead",
        linkedIn: "ArnieA",
        email: "arnoldo@gmail.com",
        password: "password4"
    },
    {
        username: "ray2jr",
        github: "rayrayjr",
        linkedIn: "RayJr",
        email: "rayray@gmail.com",
        password: "password5"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;