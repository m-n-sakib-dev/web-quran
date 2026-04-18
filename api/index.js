const express = require('express');
const cors = require('cors');
const quranRoutes = require('./routes/quranRoutes');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());



// Routes
app.use('/api', quranRoutes);


if (process.env.NODE_ENV !== 'production') {
    const PORT = 3001;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
module.exports = app;
