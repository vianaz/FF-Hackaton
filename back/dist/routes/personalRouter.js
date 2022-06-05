import { Router } from 'express';
import { getPersonalInfo } from '../controllers/personalController.js';
const personalRouter = Router();
personalRouter.get('/personal/:id', getPersonalInfo);
personalRouter.post('/personal/:id');
export default personalRouter;
