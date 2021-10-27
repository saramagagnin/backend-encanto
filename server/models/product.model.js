const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    id: {
        unique: true,
        type: Number
    },
    product: String,
    price: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;