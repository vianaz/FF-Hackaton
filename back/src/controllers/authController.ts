import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import db from '../db.js';

export async function signIn(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const responseUser = await db.query(
      `SELECT * FROM users WHERE email = $1`,
      [email],
    );
    const userDatas = responseUser.rows[0];
    if (
      responseUser.rows[0] &&
      bcrypt.compareSync(password, userDatas.password)
    ) {
      const tokenGen = uuid();

      await db.query(`INSERT INTO sessions ("userId", token) VALUES ($1, $2)`, [
        userDatas.id,
        tokenGen,
      ]);

      res.send({ id: userDatas.id, token: tokenGen });
      return;
    }
    res.sendStatus(400);
    return;
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
    return;
  }
}
export async function signUp(req: Request, res: Response) {
  const { email, password, phone, city, street, zipCode, complement, name } =
    req.body;
  const passwordHash = bcrypt.hashSync(password, 10);
  try {
    const responseUserData = await db.query(
      `INSERT INTO "users" (name, phone, email, password) VALUES ($1, $2, $3, $4) RETURNING id`,
      [name, phone, email, passwordHash],
    );
    const { id } = responseUserData.rows[0];
    await db.query(
      `INSERT INTO "adresses" ("userId", city, adress, "postalCode", complement) VALUES ($1, $2, $3, $4, $5)`,
      [id, city, street, zipCode, complement],
    );
    await db.query(`INSERT INTO wallet ("userId", "value") VALUES ($1, $2)`, [
      id,
      250,
    ]);
    res.sendStatus(201);
    return;
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
    return;
  }
}
