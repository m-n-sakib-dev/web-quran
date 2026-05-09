import express, { type Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import quranRoutes from './routes/quranRoutes.js';

// Load environment variables
dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', quranRoutes);

// Server Start Logic
if (process.env.NODE_ENV !== 'production') {
    const PORT: number = 3001;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

export default app;
