const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    uri: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise(); 

module.exports = pool;
