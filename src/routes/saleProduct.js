const {Router}= require('express')
const  getSaleProduct  = require('../controllers/saleProductController')
const router =Router()

router.get('/saleProduct', getSaleProduct);

module.exports = router
