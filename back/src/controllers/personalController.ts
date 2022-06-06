import { Request, Response } from 'express';
import db from '../db.js';

export async function getPersonalInfo(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const personalData = await db.query(
      `
      SELECT users.name, users.email, users.phone,
      json_build_object(
          'city',adresses.city , 
          'adress', adresses.adress, 
          'postalCode', adresses."postalCode", 
          'complement', adresses.complement) AS address
      FROM users
      JOIN adresses
      ON adresses."userId" = $1 
      WHERE users.id = $1`,
      [id],
    );
    const transitionsData = await db.query(`
      SELECT transitions."date", transitions."value", transitions."description" FROM transitions 
      JOIN users
      ON users."id" = 2
      WHERE transitions."userId" = users."id"
    `);
    res.send({ ...personalData.rows, transitions: transitionsData.rows });
    return;
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
    return;
  }
}

export async function putPersonalInfo(req: Request, res: Response) {
  const { id } = req.params;
  const { email, password, city, street, zipCode, complement, name } = req.body;
  try {
    await db.query(`UPDATE users SET `);
    return;
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
    return;
  }
}
