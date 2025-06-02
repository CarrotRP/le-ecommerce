const express = require('express')

const productRouter = require('./routes/products')

const app = express();

app.use('/product', productRouter);

app.listen(3000);