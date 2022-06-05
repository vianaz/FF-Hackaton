export default function verifyBody(req, res, next) {
    if (!req.body) {
        res.sendStatus(400);
        return;
    }
    req.id = 1;
    next();
}
