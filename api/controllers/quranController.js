const db = require('../config/db');

exports.getSurahList = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT  id,number,name_ar, name_en,name_en_translation as name_meaning FROM surahs');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getSurahDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query(`SELECT  a.number_in_surah,a.text, ae.data, ae2.data as audio_link 
            from ayahs a , ayah_edition ae , ayah_edition ae2   
            where  a.id= ae.ayah_id and ae.edition_id=20 and a.surah_id =? and a.id=ae2.ayah_id and ae2.edition_id = 112`, [id]);
        const [data] = await db.query('SELECT  number,name_ar, name_en,name_en_translation,type FROM surahs where id=?',[id]);
        res.status(200).json({
        info: data[0], 
        ayahs: rows
    });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.serchAyahFromTranslation = async (req, res) => {
    const { text } = req.params;
    
    try {
        const [rows] = await db.query(`SELECT  a.number_in_surah,a.text, ae.data from ayahs a , ayah_edition ae  where  a.id= ae.ayah_id and ae.edition_id=12 and ae.data like CONCAT('%', ?, '%')`, [text]);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.serchAyahFromSurah = async (req, res) => {
    const { id,text } = req.params;
    
    try {
        const [rows] = await db.query(`SELECT  a.number_in_surah,a.text, ae.data from ayahs a , ayah_edition ae  where  a.id= ae.ayah_id and ae.edition_id=12 and a.surah_id =? and ae.data like CONCAT('%', ?, '%')`, [id,text]);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};