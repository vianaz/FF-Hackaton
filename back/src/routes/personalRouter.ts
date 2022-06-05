import { Router } from 'express';

import { getPersonalInfo } from '../controllers/personalController.js';

const personalRouter = Router();

personalRouter.get('/personal/:id', getPersonalInfo);
personalRouter.put('/personal/:id');

export default personalRouter;
