/**
 * require dependencies
 */
const express = require('express');
const router = express.Router();
// require the projects object in the data.json file
const { projects } = require('../data/data.json');

// route to project page with ID
router.get('/:id', (req, res) => {
    // assign project object's properties to variables; pass into data variable to pass into project template
    const { id } = req.params;
    const { project_name } = projects[id];
    const { description } = projects[id];
    const { technologies } = projects[id];
    const { live_link } = projects[id];
    const { github_link } = projects[id];
    const { image_urls } = projects[id];

    const data = {id, project_name, description, technologies, live_link, github_link, image_urls};

    res.render('project', data);
});

// export module
module.exports = router;