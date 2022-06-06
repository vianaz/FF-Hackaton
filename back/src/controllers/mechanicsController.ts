import { Request, Response } from 'express';

import db from '../db.js';

export async function getMechanics(req: Request, res: Response) {
  try {
    const mechanicsData = await db.query('SELECT * FROM mechanics');
    const addressData = await db.query(
      'SELECT adress, city, "postalCode", complement FROM adresses WHERE "mechanicId" = 5',
    );
    const newData = mechanicsData.rows.map((element) => {
      return { ...element, address: addressData.rows };
    });
    res.send(mechanicsData.rows[0]?.id ? newData : []);
    return;
  } catch (error) {
    res.sendStatus(400);
    return;
  }
}

export async function postMechanics(req: Request, res: Response) {
  const {
    name,
    phone,
    open,
    close,
    description,
    address,
    city,
    postalCode,
    complement,
  } = req.body;

  try {
    const responseMechanicsData = await db.query(
      `INSERT INTO "mechanics" (name, phone, open, close, description) VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [name, phone, open, close, description],
    );
    const { id } = responseMechanicsData.rows[0];
    await db.query(
      `INSERT INTO "adresses" ("mechanicId", city, adress, "postalCode", complement) VALUES ($1, $2, $3, $4, $5)`,
      [id, city, address, postalCode, complement],
    );
    res.sendStatus(201);
    return;
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
    return;
  }
}
