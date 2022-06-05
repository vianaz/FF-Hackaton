export default function verifyBody(req, res, next) {
    if (!req.body) {
        res.sendStatus(400);
        return;
    }
    next();
}
