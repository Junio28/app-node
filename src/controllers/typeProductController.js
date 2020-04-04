const TypeProduct = require('../models/TypeProduct');
async function getTypeProducts(req, res) {
    try {
        const typeProducts = await TypeProduct.findAll({
        });
        res.json({
            data: typeProducts
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Ah ocurrido un error interno'
        });
    }
};

module.exports = getTypeProducts;
