import Joi from 'joi'

export const postUserSchema = Joi.object({
	username: Joi.string().trim().min(2).max(50).required(),
})