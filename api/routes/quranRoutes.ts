import { Router, type Request, type Response } from 'express';
import * as quranController from '../controllers/quranController.js';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: "Hello from quran-backend!" });
});

router.get('/surahs', quranController.getSurahList);
router.get('/surah/:id', quranController.getSurahDetails);
router.get('/ayah/:text', quranController.serchAyahFromTranslation);
router.get('/surah/:id/ayah/:text', quranController.serchAyahFromSurah);

export default router;

