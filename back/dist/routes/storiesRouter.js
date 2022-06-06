import { Router } from 'express';
import { getStories, postStories } from '../controllers/storesController.js';
const storiesRouter = Router();
storiesRouter.get('/stories', getStories);
storiesRouter.post('/stories', postStories);
export default storiesRouter;
