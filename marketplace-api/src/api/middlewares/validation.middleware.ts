import {celebrate, Joi} from 'celebrate'

const isValidOrderCreate = celebrate({
  body: Joi.object({
    idToken: Joi.number().required(),
    amount: Joi.number().required()
  })  
})

const isValidUpdateOrder = celebrate({
  body: Joi.object({
    address: Joi.string().required(),
    idToken: Joi.number().required(),
    amount: Joi.number().required()
  })
})

const isValidTokenCreate = celebrate({
  body: Joi.object({
    name: Joi.string().required(),
    imgUrl: Joi.string().required(),
    rarity: Joi.number().required(),
    id: Joi.number().required()
  })
})
export {
  isValidOrderCreate,
  isValidUpdateOrder,
  isValidTokenCreate
}