const express = require('express');
const Product = require('../models/product.model');

const router = new express.Router();

router.post('/product', async (req, res) => {
    const product = new Product(req.body);
    try {
        await product.save();
    } catch (error) {
        res.status(400).send({
            errorMessage: error.message,
            status: 400
        });
    }
    res.send(product);
});

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({}, { _id: false, __v: false });
        res.status(200).send(products);
    } catch (error) {
        res.status(404).send({
            errorMessage: error.message,
            status: 404
        });
    }
});

router.put('/product/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        await Product.findOneAndUpdate({ id: id }, req.body);
        res.status(200).send({
            message: 'Product successfully updated',
            status: 200
        });
    } catch (error) {
        res.status(400).send({
            errorMessage: error.message,
            status: 400
        });
    }
});

module.exports = router;

