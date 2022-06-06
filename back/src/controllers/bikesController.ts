import { Request, Response } from 'express';
import db from '../db.js';

export async function getBikeInfo(req: Request, res: Response) {
  const { id } = req.params;
  try {
    let bikeData = await db.query(
      `SELECT bikes."id", bikes."name", bikes."image", bikes."distance" 
      FROM bikes 
      WHERE "userId" = $1
      `,
      [id],
    );
    const maintenancesData = await db.query(
      `SELECT "id", "day", "description" FROM maintenances WHERE "bikeId" = $1`,
      [bikeData.rows[0]?.id],
    );
    const newData = bikeData.rows.map((element, i) => {
      return { ...element, maintenances: maintenancesData.rows };
    });
    res.send(bikeData.rows[0]?.id ? newData : []);
    return;
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
    return;
  }
}
export async function postBikes(req: Request, res: Response) {
  const { userId, name, image, distance } = req.body;
  try {
    await db.query(
      `INSERT INTO bikes ("userId", "name", "image", "distance") VALUES ($1, $2, $3, $4)`,
      [userId, name, image, distance],
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
    await db.query(
      `UPDATE bikes SET image = $1, distance = $2 WHERE userId = $3`,
      [image, distance, userId],
    );
    res.sendStatus(200);
    return;
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
    return;
  }
}
