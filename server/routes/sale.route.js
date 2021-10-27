const express = require('express');
const Sale = require('../models/sale.model');

const router = new express.Router();

router.post('/sale', async (req, res) => {
    const sale = new Sale(req.body);
    try {
        await sale.save();
    } catch (error) {
        res.status(400).send({
            errorMessage: error.message,
            status: 400
        });
    }
    res.send(sale);
});

router.get('/sales', async (req, res) => {
    try {
        const sales = await Sale.find({}, { _id: false, __v: false });
        res.status(200).send(sales);
    } catch (error) {
        res.status(404).send({
            errorMessage: error.message,
            status: 404
        });
    }
});

router.put('/sale/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        await Sale.findOneAndUpdate({ id: id }, req.body);
        res.status(200).send({
            message: 'Sale successfully updated',
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

