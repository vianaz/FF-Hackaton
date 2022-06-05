import { Router } from 'express';

import {
  getMechanics,
  postMechanics,
} from '../controllers/mechanicsController.js';

const mechanicsRouter = Router();
mechanicsRouter.get('/mechanics', getMechanics);
mechanicsRouter.post('/mechanics', postMechanics);

export default mechanicsRouter;
