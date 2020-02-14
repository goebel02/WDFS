const Controller = require('./Controller')
const Joi = require('@hapi/joi')

module.exports = [
  {
    method: 'GET',
    path: '/items',
    config: {
        	description: 'Get items list',
          notes: 'Returns an array of items',
          tags: ['api'],
          handler: Controller.getItems
    }
  },
  {
    method: 'POST',
    path: '/items',
    config: {
    	description: 'Create a new item',
      notes: 'creates a new item',
      tags: ['api'],
      handler: Controller.createItem,
      validate: {
        payload: Joi.object({
          itemName: Joi.string().required()
        })
      }
    }
  }
]
