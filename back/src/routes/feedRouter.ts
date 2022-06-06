import { Router } from 'express';

import { getFeed, postFeed } from '../controllers/feedController.js';

const feedRouter = Router();

feedRouter.get('/feed', getFeed);
feedRouter.post('/feed', postFeed);

export default feedRouter;
