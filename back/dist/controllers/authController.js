var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import joi from 'joi';
import db from '../db.js';
export function signIn(req, res) {
    console.log('oi');
}
export function signUp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
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
            const responseUserData = yield db.query(`INSERT INTO "users" (email, password) VALUES ($1, $2) RETURNING id`, [email, password]);
            const { id } = responseUserData.rows[0];
            yield db.query(`INSERT INTO "adresses" ("userId", city, street, "zipCode", complement) VALUES ($1, $2, $3, $4, $5)`, [id, city, street, zipCode, complement]);
            res.status(201).send(responseUserData.rows);
        }
        catch (error) {
            console.log(error);
            res.status(400).send("");
        }
    });
}
