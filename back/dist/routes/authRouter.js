import { Router } from 'express';
import { signIn, signUp } from '../controllers/authController.js';
import middleware from '../middlewares/middleware.js';
const authRouter = Router();
authRouter.post('/sign-in', middleware, signIn);
authRouter.post('/sign-up', middleware, signUp);
export default authRouter;
