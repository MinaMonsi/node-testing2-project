const express = require("express");
const productsRouter = require('./product/products-router')
const server = express();

server.use(express.json());
server.use('/api/products', productsRouter)

server.use('*', (req,res) => {
    res.json({api: "up"})
})

module.exports = server