import { Router } from 'express';
import { getBikeInfo, postBikes, putBikes, } from '../controllers/bikesController.js';
import bikeMiddleware from '../middlewares/bikeMiddleware.js';
const bikesRouter = Router();
bikesRouter.get('/bikes/:id', getBikeInfo);
bikesRouter.post('/bikes', bikeMiddleware, postBikes);
bikesRouter.put('/bikes/:id', bikeMiddleware, putBikes);
export default bikesRouter;
