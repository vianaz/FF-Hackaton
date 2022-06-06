import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './routes/authRouter.js';
import personalRouter from './routes/personalRouter.js';
import bikesRouter from './routes/bikeRouter.js';
import mechanicsRouter from './routes/mechanicsRouter.js';
import storiesRouter from './routes/storiesRouter.js';
dotenv.config();
const app = express();
app.use(json());
app.use(cors());
// Routers
app.use(authRouter);
app.use(personalRouter);
app.use(bikesRouter);
app.use(mechanicsRouter);
app.use(storiesRouter);
export default app;
