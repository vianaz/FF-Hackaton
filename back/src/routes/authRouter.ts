import { Router } from 'express';

import { signIn, signUp } from '../controllers/authController.js';
import notNullMiddleware from '../middlewares/notNullMiddleware.js';
import userMiddleware from '../middlewares/userMiddleware.js';

const authRouter = Router();

authRouter.post('/sign-in', notNullMiddleware, signIn);
authRouter.post('/sign-up', notNullMiddleware, userMiddleware, signUp);

export default authRouter;
