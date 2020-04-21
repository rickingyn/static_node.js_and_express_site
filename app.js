/**
 * require dependencies
 */
const express = require('express');
const indexRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectsRoute = require('./routes/projects');

const app = express();

// use static route to serve static files located in public folder
// app.use(express.static('public'));
app.use('/static', express.static('public'));

// set view engine to Pug
app.set('view engine', 'pug');

// use routes
app.use(indexRoute);
app.use('/about', aboutRoute);
app.use('/projects', projectsRoute);

// middleware to handle 404 error
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    console.log('The URL does not exist')
    res.render('error');
});

// serve application on port 3000
app.listen(3000, () => {
    console.log('The server has started on port 3000.');
});