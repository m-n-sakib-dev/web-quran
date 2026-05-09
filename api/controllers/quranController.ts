import { type Request, type Response } from 'express';
import db from '../config/db.js';

export const getSurahList = async (req: Request, res: Response): Promise<void> => {
    try {
        const [rows] = await db.query('SELECT id, number, name_ar, name_en, name_en_translation as name_meaning FROM surahs');
        res.status(200).json(rows);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getSurahDetails = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const [rows] = await db.query(`
            SELECT a.surah_id,a.number_in_surah, a.text, ae.data, ae2.data as audio_link 
            FROM ayahs a, ayah_edition ae, ayah_edition ae2   
            WHERE a.id = ae.ayah_id AND ae.edition_id = 20 
            AND a.surah_id = ? AND a.id = ae2.ayah_id AND ae2.edition_id = 112
        `, [id]);

        const [data]: any = await db.query('SELECT number, name_ar, name_en, name_en_translation, type FROM surahs WHERE id = ?', [id]);
        
        res.status(200).json({
            info: data[0], 
            ayahs: rows
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const serchAyahFromTranslation = async (req: Request, res: Response): Promise<void> => {
    const { text } = req.params;
    try {
        const [rows] = await db.query(`
            SELECT a.surah_id,a.number_in_surah, a.text, ae.data, ae2.data as audio_link
            FROM ayahs a
            JOIN ayah_edition ae ON a.id = ae.ayah_id
            JOIN ayah_edition ae2 ON a.id = ae2.ayah_id AND ae2.edition_id = 112
            WHERE ae.edition_id = 20 
            AND (ae.data LIKE CONCAT('%', ?, '%') OR a.text LIKE CONCAT('%', ?, '%'))
        `, [text, text]);
        res.status(200).json(rows);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const serchAyahFromSurah = async (req: Request, res: Response): Promise<void> => {
    const { id, text } = req.params;
    try {
        const [rows] = await db.query(`
            SELECT a.number_in_surah, a.text, ae.data 
            FROM ayahs a, ayah_edition ae 
            WHERE a.id = ae.ayah_id AND ae.edition_id = 12 
            AND a.surah_id = ? AND ae.data LIKE CONCAT('%', ?, '%')
        `, [id, text]);
        res.status(200).json(rows);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
