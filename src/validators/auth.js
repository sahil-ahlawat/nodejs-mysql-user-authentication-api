const Joi = require('joi');
const validatorHandler = require('../middlewares/validatorHandler');

const signup = (req, res, next) => {
    const schema = Joi.object().keys({
        firstname: Joi.string()
            .trim()
            .alphanum()
            .min(3)
            .max(50)
            .required(),
        lastname: Joi.string()
            .trim()
            .alphanum()
            .min(3)
            .max(50)
            .required(),
        email: Joi.string()
            .trim()
            .email()
            .required(),
        password: Joi.string()
            .trim()
            .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
            .required()
    });
    validatorHandler(req, res, next, schema);
};

const signin = (req, res, next) => {
    const schema = Joi.object().keys({
        email: Joi.string()
            .trim()
            .email()
            .required(),
        password: Joi.string()
            .trim()
            .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
            .required()
    });
    validatorHandler(req, res, next, schema);
};

const forgotpassword = (req, res, next) => {
    const schema = Joi.object().keys({
        email: Joi.string()
            .trim()
            .email()
            .required()
    });
    validatorHandler(req, res, next, schema);
};
const resetpassword = (req, res, next) => {
    const schema = Joi.object().keys({
        email: Joi.string()
            .trim()
            .email()
            .required(),
        oldpassword: Joi.string()
            .trim()
            .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
            .required(),
        newpassword: Joi.string()
            .trim()
            .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
            .required()
    });
    validatorHandler(req, res, next, schema);
};
const updateuserinfo = (req, res, next) => {
    const schema = Joi.object().keys({
        firstname: Joi.string()
            .trim()
            .alphanum()
            .min(3)
            .max(50),
        lastname: Joi.string()
            .trim()
            .alphanum()
            .min(3)
            .max(50),
        bio: Joi.string()
            .trim(),
        profilepic: Joi.string()
            .trim(),
        email: Joi.string()
            .trim()
            .email()
            .required(),
        gender: Joi.string()
            .trim()
            .min(3)
            .max(50),
        country: Joi.string()
            .trim()
            .min(3)
            .max(50)
            .required(),
        address: Joi.string()
            .trim()
            .min(1)
            .max(500),
        state: Joi.string()
            .trim()
            .min(1)
            .max(500),
        city: Joi.string()
            .trim()
            .min(1)
            .max(500),
        location: Joi.string()
            .trim()
            .alphanum()
            .min(1)
            .max(500),
        gym: Joi.string()
            .trim()
            .min(1)
            .max(50)
            .required(),
        sportscategory: Joi.string()
            .trim()
            .min(1)
            .max(50)
            .required(),
    });
    validatorHandler(req, res, next, schema);
};
module.exports = {
    signup,
    signin,
    forgotpassword,
    resetpassword,
    updateuserinfo
};