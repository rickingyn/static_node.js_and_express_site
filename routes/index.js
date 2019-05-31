const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/', (req, res) => {
    res.locals.data = projects;
    res.render('index');
});

module.exports = router;