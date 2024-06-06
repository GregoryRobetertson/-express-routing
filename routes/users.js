'use strict';

const express = require('express');
const router = express.Router();
const userData = require('../data');

router.get('/', (req, res) => {
    res.json(userData);
} )

function getUser (req, res) {
    try {
        const user = data.find((user) => user.id === +req.params.id);
        if(!user) return res.status(404).send('User not found');
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error');
    }
}

router.get('/user/:id', getUser)

module.exports = router;