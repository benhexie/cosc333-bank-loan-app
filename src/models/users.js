const db = require('./connection');
const { nanoid } = require('nanoid');

const createUser = (username, password, callback) => {
    const id = nanoid(16);
    const query = 'INSERT INTO users (id, username, password) VALUES (?, ?, ?)';
    db.query(query, [id, username, password], (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

const getUser = (username, callback) => {
    const query = 'SELECT users.id, users.username, users.wallet, loans.amount FROM users LEFT JOIN loans ON users.id = loans.user_id WHERE users.username = ? AND loans.status = ?';
    db.query(query, [username, 'pending'], (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

module.exports = {
    createUser,
    getUser
};