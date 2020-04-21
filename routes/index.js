/**
 * require dependencies
 */
const express = require('express');
const router = express.Router();

// require projects object in the data.json file using ES6 syntax
const { projects } = require('../data.json');

// route to render home page
router.get('/', (req, res) => {
    // set res.locals.data to the projects object
    res.locals.data = projects;
    res.render('index');
});

// export module
module.exports = router;