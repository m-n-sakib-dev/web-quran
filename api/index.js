const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const dbUrl = process.env.DATABASE_URL;
let db;

if (dbUrl) {
    db = mysql.createConnection(dbUrl);
    console.log("Database connection initialized.");
} else {
    console.log("No DATABASE_URL found. Database routes will not work.");
}

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from Express Backend!" });
});

app.get('/api/data', (req, res) => {
  if (!db) return res.status(500).json({ error: "Database not connected" });
  db.query('SELECT * FROM your_table_name', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// --- এই অংশটুকু যোগ করুন ---
if (process.env.NODE_ENV !== 'production') {
    const PORT = 3001;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
module.exports = app;
