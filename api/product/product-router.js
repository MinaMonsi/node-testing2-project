const router = require('express').Router()

router.get('/', (req,res, next)=>{
    res.status(200).json("product")
    next()
})

router.get('/id', (req,res)=>{
    res.end()
})

router.post('/', (req,res)=>{
    res.end()
})

router.delete('/id', (req,res)=>{
    res.end()
})

router.delete('/id', (req,res)=>{
    res.end()
})

module.exports = router