const db = require('../config/db');

exports.getSurahList = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id, name_arabic, name_english FROM surah_info');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getSurahDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM quran_text WHERE surah_id = ?', [id]);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
