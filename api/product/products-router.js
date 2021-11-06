const router = require('express').Router()
const productsModel = require('./products-model')

router.get('/', (req,res, next)=>{
    productsModel.getAll()
    .then(products => {
      res.status(200).json("product")
    })
    .catch(next)
})


router.delete('/id', async(req,res)=>{
    const id = req.params.id
    const deleteProduct = await productsModel.remove(id)
    res.status(200).json(deleteProduct)
})


router.use((err, req, res, next) =>{//eslint-disable-line
    res.status(500).json({
        customMessage: 'unable to get product',
        message: err.message,
    })
})

module.exports = router