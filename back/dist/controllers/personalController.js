var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import db from '../db.js';
export function getPersonalInfo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const personalData = yield db.query(`
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
    WHERE users.id = $1`, [id]);
            res.send(personalData.rows);
        }
        catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
    });
}
export function putPersonalInfo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { email, password, city, street, zipCode, complement, name } = req.body;
        try {
            yield db.query(`UPDATE users SET `);
        }
        catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
    });
}
