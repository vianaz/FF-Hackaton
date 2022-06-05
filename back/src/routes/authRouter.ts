import { Router } from 'express';

import { signIn, signUp } from '../controllers/authController.js';
import userMiddleware from '../middlewares/userMiddleware.js';

const authRouter = Router();

authRouter.post('/sign-in', signIn);
authRouter.post('/sign-up', userMiddleware, signUp);

export default authRouter;
