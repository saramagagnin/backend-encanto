const express = require('express')
const userRouter = require('./routes/user.route')
const productRouter = require('./routes/product.route')
const saleRouter = require('./routes/sale.route')
require('./database/mongoose.config')
const app = express()
const port = 3005

app.use(express.json())
app.use(userRouter)
app.use(productRouter)
app.use(saleRouter)

app.listen(port, () => {
    console.log(`Encanto server listening at http://localhost:${port}`)
})