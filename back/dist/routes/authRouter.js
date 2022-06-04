import { Router } from 'express';
import AuthController from '../controllers/authController.js';
const authRouter = Router();
authRouter.post('/login', AuthController.signIn);
authRouter.post('/sign-up', AuthController.signUp);
export default authRouter;
