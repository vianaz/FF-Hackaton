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
export function getStories(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const storiesData = yield db.query('SELECT * FROM stores');
            const addressData = yield db.query('SELECT adress, city, "postalCode", complement FROM adresses WHERE "storeId" = $1', [(_a = storiesData.rows[0]) === null || _a === void 0 ? void 0 : _a.id]);
            const newData = storiesData.rows.map((element, i) => {
                return Object.assign(Object.assign({}, element), { address: addressData.rows });
            });
            res.send(((_b = storiesData.rows[0]) === null || _b === void 0 ? void 0 : _b.id) ? newData : []);
            return;
        }
        catch (error) {
            res.sendStatus(400);
            return;
        }
    });
}
export function postStories(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, phone, open, close, description, address, city, postalCode, complement, } = req.body;
        try {
            const responseStoriesData = yield db.query(`INSERT INTO "stores" (name, phone, open, close, description) VALUES ($1, $2, $3, $4, $5) RETURNING id`, [name, phone, open, close, description]);
            const { id } = responseStoriesData.rows[0];
            yield db.query(`INSERT INTO "adresses" ("storeId", city, adress, "postalCode", complement) VALUES ($1, $2, $3, $4, $5)`, [id, city, address, postalCode, complement]);
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
