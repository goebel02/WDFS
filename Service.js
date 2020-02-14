const Items = require('./Items')

module.exports = {
  async getItems() {
    let items = await Items.find()
    return items
  },
  async createItem(itemName) {
    try {
      const item = new Items({
        itemName: itemName
      });
        var result = await item.save();
        return result;
        } catch (error) {
          return error;
        }
  }
}
