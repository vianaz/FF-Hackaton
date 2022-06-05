import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import authRouter from './routes/authRouter.js';
import personalRouter from './routes/personalRouter.js';

dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(authRouter);
app.use(personalRouter);

export default app;
