import { Request, Response } from 'express';
import joi from 'joi';
import db from '../db.js';

export function signIn(req: Request, res: Response) {
  console.log('oi');
}
export async function signUp(req: Request, res: Response) {
  const { email, password, city, street, zipCode, complement } = req.body;
  const signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(1).required(),
    nome: joi.string().required(),
    city: joi.string().required(),
    street: joi.string().required(),
    zipCode: joi.string().required(),
    complement: joi.string(),
  });
  const { error } = signUpSchema.validate(req.body);
  if (error) {
    console.log(error);
    res.sendStatus(400);
    return;
  }
  try {
    const responseUserData = await db.query(
      `INSERT INTO "users" (email, password) VALUES ($1, $2) RETURNING id`,
      [email, password],
    );
    const { id } = responseUserData.rows[0];
    await db.query(
      `INSERT INTO "adresses" ("userId", city, street, "zipCode", complement) VALUES ($1, $2, $3, $4, $5)`,
      [id, city, street, zipCode, complement],
    );
    res.status(201).send(responseUserData.rows);
  } catch (error) {
    console.log(error);
    res.status(400).send("");
  }
}
