var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from '../db.js';
export function signIn(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const responseUser = yield db.query(`SELECT * FROM users WHERE email = $1`, [email]);
            const userDatas = responseUser.rows[0];
            if (responseUser.rows[0] &&
                bcrypt.compareSync(password, userDatas.password)) {
                const tokenGen = uuid();
                yield db.query(`INSERT INTO sessions ("userId", token) VALUES ($1, $2)`, [
                    userDatas.id,
                    tokenGen,
                ]);
                res.send({ id: userDatas.id, token: tokenGen });
                return;
            }
            res.sendStatus(400);
            return;
        }
        catch (error) {
            console.log(error);
            res.sendStatus(400);
            return;
        }
    });
}
export function signUp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password, city, street, zipCode, complement, name } = req.body;
        const passwordHash = bcrypt.hashSync(password, 10);
        try {
            const responseUserData = yield db.query(`INSERT INTO "users" (name, email, password) VALUES ($1, $2, $3) RETURNING id`, [name, email, passwordHash]);
            const { id } = responseUserData.rows[0];
            yield db.query(`INSERT INTO "adresses" ("userId", city, street, "zipCode", complement) VALUES ($1, $2, $3, $4, $5)`, [id, city, street, zipCode, complement]);
            res.status(201).send('');
            return;
        }
        catch (error) {
            console.log(error);
            res.status(400).send('');
            return;
        }
    });
}
