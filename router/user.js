const express = require('express');
const router = express.Router();
const { usersData } = require('../Users.js')

router.get('/all', (req, res) => {
    // res.end('Welcome to the home page');
    console.log(usersData);
    res.json(usersData);
});


router.get('/:id', (req, res) => {
    const id  =  req.params.id;
    console.log(id);
    const user = usersData.find((user) => user.id == id);
    res.json(user);
});

module.exports = router;