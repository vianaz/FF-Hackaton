import { Request, Response } from 'express';

export default function verifyBody(req: Request, res: Response, next) {
  if (!req.body) {
    res.sendStatus(400);
    return;
  }
  next();
}
