const express = require('express');
const User = require('../models/user.model');

const router = new express.Router();

router.post('/user', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
    } catch (error) {
        res.status(400).send({
            errorMessage: error.message,
            status: 400
        });
    }
    res.send(user);
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({}, { _id: false, __v: false });
        res.status(200).send(users);
    } catch (error) {
        res.status(404).send({
            errorMessage: error.message,
            status: 404
        });
    }
});

router.put('/user/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        await User.findOneAndUpdate({ id: id }, req.body);
        res.status(200).send({
            message: 'User successfully updated',
            status: 200
        });
    } catch (error) {
        res.status(400).send({
            errorMessage: error.message,
            status: 400
        });
    }
});

router.delete('/user/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const deletedUser = await User.findOneAndDelete({ id: id });
        if (deletedUser) {
            res.status(200).send({
                message: 'User successfully deleted',
                status: 200
            })
        } else {
            res.status(404).send({
                message: 'User not found',
                status: 404
            })
        }

    } catch (error) {
        res.status(400).send({
            errorMessage: error.message,
            status: 400
        });
    }
});

module.exports = router;

