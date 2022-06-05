import { Request, Response } from 'express';
import db from '../db.js';

export async function getBikeInfo(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const bikesData = await db.query(
      `SELECT bikes.id, bikes.image, bikes.number FROM bikes WHERE "userId" = $1`,
      [id],
    );
    res.send(bikesData.rows);
  } catch (error) {}
}
export async function postBikes(req: Request, res: Response) {
  const { userId, image, distance } = req.body;
  try {
    await db.query(
      `INSERT INTO bikes ("userId", "image", "distance") VALUES ($1, $2, $3)`,
      [userId, image, distance],
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}
export async function putBikes(req: Request, res: Response) {
  const { userId, image, distance } = req.body;
  try {
    await db.query(`UPDATE bikes SET image = $1, distance = $2 WHERE userId = $3`, [
      image,
      distance,
      userId,
    ]);
    res.sendStatus(200);
    return
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
    return
  }
}
