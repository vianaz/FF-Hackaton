import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import authRouter from './routes/authRouter.js';
import personalRouter from './routes/personalRouter.js';
import bikesRouter from './routes/bikeRouter.js';

dotenv.config();

const app = express();

app.use(json());
app.use(cors());

// Routers
app.use(authRouter);
app.use(personalRouter);
app.use(bikesRouter);

export default app;
