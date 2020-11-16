import Joi from 'joi';

export const registerUserSchema = Joi.object({
    username: Joi.string()
        .pattern(/^[a-zA-Z0-9]{4,20}$/)
        .required(),
    firstName: Joi.string()
        .pattern(/^[а-яА-Я]{3,20}$/)
        .required(),
    lastName: Joi.string()
        .pattern(/^[а-яА-Я]{3,20}$/)
        .required(),
    password: Joi.string()
        .pattern(/^.{6,20}$/)
        .required(),
})