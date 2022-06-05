import joi from 'joi';
export default function userMiddleware(req, res, next) {
    const signUpSchema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(1).required(),
        name: joi.string().required(),
        city: joi.string().required(),
        street: joi.string().required(),
        zipCode: joi.string().required(),
        complement: joi.string(),
    });
    const { error } = signUpSchema.validate(req.body);
    if (error) {
        console.log(error);
        res.sendStatus(400);
        return;
    }
    next();
}
