const express = require('express')
const app = express()
const port = 3000
let products = [];
let users = [];

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.post('/create/product', (req, res) => {

    products.push(req.body)
    res.sendStatus(201)
})

app.post('/create/user', (req, res) => {

    users.push(req.body)
    res.sendStatus(201)
})

app.get('/get/products', (req, res) => {

    res.send(products)
})

app.get('/get/users', (req, res) => {

    res.send(users)
})

app.get('/get/product/:id', (req, res) => {

    const idProducto = req.params;
    let obj = products.find(obje => obje.id == idProducto.id);
    res.send(obj)
})

app.put('/edit/product/:id', (req, res) => {
    const idProducto = req.params;
    const body = req.body;

    for (let index = 0; index < products.length; index++) {

        const producto = products[index]
        if (producto.id == idProducto.id) {
            products[index].name = body.name
            products[index].price = body.price
            products[index].description = body.description
        }
    }

    res.send(products)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})