import { Request, Response } from 'express';

import db from '../db.js';

export async function getStories(req: Request, res: Response) {
  try {
    const storiesData = await db.query('SELECT * FROM stores');
    const addressData = await db.query(
      'SELECT adress, city, "postalCode", complement FROM adresses WHERE "storeId" = $1',
      [storiesData.rows[0]?.id],
    );
    const newData = storiesData.rows.map((element, i) => {
      return { ...element, address: addressData.rows };
    });
    res.send(storiesData.rows[0]?.id ? newData : []);
    return;
  } catch (error) {
    res.sendStatus(400);
    return;
  }
}

export async function postStories(req: Request, res: Response) {
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
    const responseStoriesData = await db.query(
      `INSERT INTO "stores" (name, phone, open, close, description) VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [name, phone, open, close, description],
    );
    const { id } = responseStoriesData.rows[0];
    await db.query(
      `INSERT INTO "adresses" ("storeId", city, adress, "postalCode", complement) VALUES ($1, $2, $3, $4, $5)`,
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
