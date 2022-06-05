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
export function getBikeInfo(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            let bikeData = yield db.query(`SELECT bikes."id", bikes."name", bikes."image", bikes."distance" 
      FROM bikes 
      WHERE "userId" = $1
      `, [id]);
            const maintenancesData = yield db.query(`SELECT "id", "day", "description" FROM maintenances WHERE "bikeId" = $1`, [(_a = bikeData.rows[0]) === null || _a === void 0 ? void 0 : _a.id]);
            const newData = bikeData.rows.map((element, i) => {
                return Object.assign(Object.assign({}, element), { maintenances: maintenancesData.rows });
            });
            res.send(((_b = bikeData.rows[0]) === null || _b === void 0 ? void 0 : _b.id) ? newData : []);
            return;
        }
        catch (error) {
            console.log(error);
            res.sendStatus(400);
            return;
        }
    });
}
export function postBikes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userId, name, image, distance } = req.body;
        try {
            yield db.query(`INSERT INTO bikes ("userId", "name", "image", "distance") VALUES ($1, $2, $3, $4)`, [userId, name, image, distance]);
            res.sendStatus(201);
        }
        catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
    });
}
export function putBikes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userId, image, distance } = req.body;
        try {
            yield db.query(`UPDATE bikes SET image = $1, distance = $2 WHERE userId = $3`, [image, distance, userId]);
            res.sendStatus(200);
            return;
        }
        catch (error) {
            console.log(error);
            res.sendStatus(400);
            return;
        }
    });
}
