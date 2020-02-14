const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ItemsSchema = new Schema({
itemName: String
});

module.exports = mongoose.model('items', ItemsSchema);
