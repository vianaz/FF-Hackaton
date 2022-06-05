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
export function getMechanics(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mechanicsData = yield db.query('SELECT * FROM mechanics');
            const addressData = yield db.query('SELECT adress, city, "postalCode", complement FROM adresses WHERE "mechanicId" = 5');
            const newData = mechanicsData.rows.map((element) => {
                return Object.assign(Object.assign({}, element), { address: addressData.rows });
            });
            res.send(((_a = mechanicsData.rows[0]) === null || _a === void 0 ? void 0 : _a.id) ? newData : []);
            return;
        }
        catch (error) {
            res.sendStatus(400);
            return;
        }
    });
}
export function postMechanics(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, phone, open, close, description, address, city, postalCode, complement, } = req.body;
        try {
            const responseMechanicsData = yield db.query(`INSERT INTO "mechanics" (name, phone, open, close, description) VALUES ($1, $2, $3, $4, $5) RETURNING id`, [name, phone, open, close, description]);
            const { id } = responseMechanicsData.rows[0];
            yield db.query(`INSERT INTO "adresses" ("mechanicId", city, adress, "postalCode", complement) VALUES ($1, $2, $3, $4, $5)`, [id, city, address, postalCode, complement]);
            res.sendStatus(201);
            return;
        }
        catch (error) {
            console.log(error);
            res.sendStatus(400);
            return;
        }
    });
}
