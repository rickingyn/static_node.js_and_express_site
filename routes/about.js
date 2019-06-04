/**
 * require dependencies
 */
const express = require('express');
const router = express.Router();

// route to render about page
router.get('/', (req, res) => {
    res.render('about');
});

// export module
module.exports = router;