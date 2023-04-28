import Joi from "joi";

export const customerSchema = Joi.object({
  nombre: Joi.string().required(),
  edad: Joi.number().integer().min(18).max(99).required(),
});
