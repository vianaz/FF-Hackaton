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
export function getFeed(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const feedData = yield db.query(`SELECT feed.*, users."name" FROM feed
        JOIN users
        ON users.id = feed."userId"`);
            res.send(feedData.rows);
            return;
        }
        catch (error) {
            res.sendStatus(400);
            return;
        }
    });
}
export function postFeed(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { mensage, userId } = req.body;
        try {
            yield db.query(`INSERT INTO feed ("userId", menssage) VALUES ($1, $2)`, [
                userId,
                mensage,
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
