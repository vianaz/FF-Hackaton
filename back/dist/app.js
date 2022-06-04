import express, { json } from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/authRouter.js';
dotenv.config();
const app = express();
app.use(json());
app.use(authRouter);
export default app;
