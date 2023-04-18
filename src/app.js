const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const JOBS = require('./jobs');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// Configure mustache
app.set('views', `${__dirname}/pages`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

// Render the template
app.get('/', (req, res) => {
    res.render('index', { jobs: JOBS});
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on https://localhost:${port}`)
})
