const express = require('express');
const router = express.Router();
const quranController = require('../controllers/quranController');

router.get('/hello', (req, res) => {
  res.json({ message: "Hello from quran-backend!" });
});

router.get('/surahs', quranController.getSurahList);
router.get('/surah/:id', quranController.getSurahDetails);
router.get('/ayah/:text',quranController.serchAyahFromTranslation )
router.get('/surah/:id/ayah/:text',quranController.serchAyahFromSurah )

module.exports = router;
