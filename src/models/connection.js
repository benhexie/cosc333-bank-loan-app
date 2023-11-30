/**
 * ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
 * flush privileges;
 */

require('dotenv').config({ path: `${__dirname}/../../.env`  });
const mysql = require('mysql');

let db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// create database
db.query('CREATE DATABASE IF NOT EXISTS `tentrust`', (err) => {
    if (err) throw err;
    console.log('Database created');
});

// use database
db.query('USE `tentrust`', (err) => {
    if (err) throw err;
    console.log('Using database');
});

// create users table
db.query(`CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    wallet VARCHAR(255) NOT NULL DEFAULT '0',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`, (err) => {
    if (err) throw err;
    console.log('Users table created');
});

// create loans table
db.query(`CREATE TABLE IF NOT EXISTS loans (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    amount DECIMAL(65, 2) NOT NULL,
    interest DECIMAL(65, 2) NOT NULL,
    duration INT(11) NOT NULL,
    status VARCHAR(255) NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
)`, (err) => {
    if (err) throw err;
    console.log('Loans table created');
});

db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'tentrust'
});

module.exports = db;