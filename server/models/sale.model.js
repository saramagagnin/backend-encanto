const mongoose = require('mongoose');
const { Schema } = mongoose;

const saleSchema = new Schema({
    id: {
        unique: true,
        type: Number
    },
    sold_price: Number,
    sold_product: String,
});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;