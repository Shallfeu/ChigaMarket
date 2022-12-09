const express =require('express')
const Product = require('../models/Product')
const router = express.Router({mergeParams: true})

router.get('/', async (req, res) => {
    try {
        const list = await Product.find()
        res.send(list)
    } catch (e) {
        res.status(500).json({
            message: 'Some problem occured on server. Try it later'
        })
    }
})

module.exports = router