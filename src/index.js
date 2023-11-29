const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static(`${__dirname}/../public`));

app.get('/', (req, res) => {
    res.send('Hello World');
});

const listener = app.listen(80, () => {
    console.log(`Listening on port ${listener.address().port}`);
});