const Controller = require('./Controller')

module.exports = [
  {
    method: 'GET',
    path: '/items',
    options: {
        	description: 'Get items list',
          notes: 'Returns an array of items',
          tags: ['api'],
          handler: Controller.getItems
    }
  }
]
