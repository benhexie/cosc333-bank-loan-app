const db = require('../models/connection');

const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
        res.status(400).json({ error: 'Missing username or password' });
        return;
    }
    if (username.length < 1) {
        res.status(400).json({ error: 'Username cannot be empty' });
        return;
    }
    if (password.length < 8) {
        res.status(400).json({ error: 'Password must be at least 8 characters long' });
        return;
    }
    res.status(200).json({ success: 'Logged in' });
};

module.exports = login;