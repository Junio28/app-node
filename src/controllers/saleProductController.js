const SaleProduct = require('../models/SaleProduct');
async function getSaleProduct(req, res) {
    try {
        const saleProduct = await SaleProduct.findAll({
        });
        res.json({
            data: saleProduct
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Ah ocurrido un error interno'
        });
    }
};

module.exports = getSaleProduct;
