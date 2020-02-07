const Service = require('./Service')

module.exports = {
  async getItems() {
    return await Service.getItems()
  },
  async createItem(request) {  
    return await Service.createItem(request.payload.itemName)
  }
}
