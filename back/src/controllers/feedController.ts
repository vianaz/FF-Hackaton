import { Request, Response } from 'express';
import db from '../db.js';

export async function getFeed(req: Request, res: Response) {
  try {
    const feedData = await db.query(`SELECT feed.*, users."name" FROM feed
        JOIN users
        ON users.id = feed."userId"`);
    res.send(feedData.rows);
    return;
  } catch (error) {
    res.sendStatus(400);
    return;
  }
}

export async function postFeed(req: Request, res: Response) {
  const { mensage, userId } = req.body;
  try {
    await db.query(`INSERT INTO feed ("userId", "menssage") VALUES ($1, $2)`, [
      userId,
      mensage,
    ]);
    res.sendStatus(200);
    return;
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
    return;
  }
}
