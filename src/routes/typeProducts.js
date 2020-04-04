const {Router}= require('express')
const  getTypeProducts  = require('../controllers/typeProductController')
const router =Router()

router.get('/type_products', getTypeProducts);

module.exports = router
