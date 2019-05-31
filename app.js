/**
 * require 
 */
const express = require('express');
// require data.json
const indexRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectsRoute = require('./routes/projects');

const app = express();

// use static route to serve static files located in public folder
app.use('/static', express.static('public'));

// set view engine to Pug
app.set('view engine', 'pug');

// use routes
app.use(indexRoute);
app.use('/about', aboutRoute);
app.use('/projects', projectsRoute);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('The server has started');
});