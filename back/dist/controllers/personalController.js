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
      SELECT users.name, users.email, users.phone,
      json_build_object(
          'city',adresses.city , 
          'adress', adresses.adress, 
          'postalCode', adresses."postalCode", 
          'complement', adresses.complement) AS address
      FROM users
      JOIN adresses
      ON adresses."userId" = $1 
      WHERE users.id = $1`, [id]);
            const transitionsData = yield db.query(`
      SELECT transitions."date", transitions."value", transitions."description" FROM transitions 
      JOIN users
      ON users."id" = 2
      WHERE transitions."userId" = users."id"
    `);
            res.send(Object.assign(Object.assign({}, personalData.rows), { transitions: transitionsData.rows }));
            return;
        }
        catch (error) {
            console.log(error);
            res.sendStatus(400);
            return;
        }
    });
}
export function putPersonalInfo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { email, password, city, street, zipCode, complement, name } = req.body;
        try {
            yield db.query(`UPDATE users SET `);
            return;
        }
        catch (error) {
            console.log(error);
            res.sendStatus(400);
            return;
        }
    });
}
