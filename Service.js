const Mongoose = require('mongoose')

const ItemModel = Mongoose.model("WDFS.items", {
    itemName: String,
})

module.exports = {
  async getItems() {
    let items = await ItemModel.find().exec()
    console.log(items)
    return items
  },
  async createItem(itemName) {
    try {
            var item = new ItemModel(request.payload);
            var result = await item.save();
            return result;
        } catch (error) {
            return error;
        }
  }
}
