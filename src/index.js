require('dotenv').config({ path: `${__dirname}/../.env` });
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static(`${__dirname}/public`));


// GET
app.get('/', (_, res) => {
    res.status(302).redirect('/login');
});

app.get('/login', (_, res) => {
    res.sendFile(`${__dirname}/views/login.html`);
});

app.get('/signup', (_, res) => {
    res.sendFile(`${__dirname}/views/signup.html`);
});

app.get('/dashboard', (_, res) => {
    res.sendFile(`${__dirname}/views/dashboard.html`);
});

// POST
app.post('/login', (req, res) => {
    
});

const listener = app.listen(80, () => {
    console.log(`Listening on port ${listener.address().port}`);
});