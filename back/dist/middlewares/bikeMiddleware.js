import joi from 'joi';
export default function bikeMiddleware(req, res, next) {
    const bikeSquema = joi.object({
        userId: joi.number().required(),
        image: joi.string(),
        distance: joi.number(),
    });
    const { error } = bikeSquema.validate(req.body);
    if (error) {
        console.log(error);
        res.sendStatus(400);
        return;
    }
    next();
}
