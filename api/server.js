const express = require("express");
const productRouter = require('./product/product-router')
const server = express();

server.use(express.json());
server.use('/api/product', productRouter)

module.exports = server