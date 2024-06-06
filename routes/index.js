'use strict';

const express = require('express');
const router = express.Router();
const data = require('../data');
router.get('/', (req, res) => {
    res.send('Hello from the main router!')
})

router.get('/about', (req, res) => {
    res.send('About Us')
})

router.get('/user/:id',(req, res) => {
const userId = req.params.id
res.send(`User ID: ${userId}`);
} )

module.exports = router;