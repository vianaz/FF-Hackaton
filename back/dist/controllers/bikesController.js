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
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const bikesData = yield db.query(`SELECT bikes.id, bikes.image, bikes.number FROM bikes WHERE "userId" = $1`, [id]);
            res.send(bikesData.rows);
        }
        catch (error) { }
    });
}
export function postBikes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userId, image, distance } = req.body;
        try {
            yield db.query(`INSERT INTO bikes ("userId", "image", "distance") VALUES ($1, $2, $3)`, [userId, image, distance]);
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
            yield db.query(`UPDATE bikes SET image = $1, distance = $2 WHERE userId = $3`, [
                image,
                distance,
                userId,
            ]);
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
