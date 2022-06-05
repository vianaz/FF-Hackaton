import { Request, Response } from 'express';
import db from '../db.js';

export async function getPersonalInfo(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const personalData = await db.query(
      `
    SELECT users.name, 
    json_build_object(
        'city',adresses.city , 
        'street', adresses.street, 
        'zipCode', adresses."zipCode", 
        'complement', adresses.complement) AS adress, 
    json_build_object(
            'number', card.number, 
            'validity',card.validity, 
            'cvv', card.cvv) AS "cardInfo" 
    FROM users
    JOIN adresses
    ON adresses."userId" = $1
    JOIN "creditCards" AS card
    ON card."userId" = $1
    WHERE users.id = $1`,
      [id],
    );
    res.send(personalData.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}

export async function putPersonalInfo(req: Request, res: Response) {
  const { id } = req.params;
  const { email, password, city, street, zipCode, complement, name } = req.body;
  try {
    await db.query(`UPDATE users SET `);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}
