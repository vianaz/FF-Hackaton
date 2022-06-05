import { Router } from 'express';
const personalRouter = Router();
personalRouter.get('/personal/:id');
personalRouter.post('/personal/:id');
export default personalRouter;
