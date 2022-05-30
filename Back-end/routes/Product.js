const express = require('express')

const ProductRouter = express.Router()
 const {GetProduct,AddProduct,DeleteProduct,UpdateProduct,GetProductById} = require('../controllers/Controllers')

ProductRouter.get('/read',GetProduct)

ProductRouter.post('/add',AddProduct )

ProductRouter.delete('/delete/:id',DeleteProduct)

ProductRouter.put('/update/:id',UpdateProduct)

ProductRouter.get('/Product/:id',GetProductById)

//ProductRouter.post('/',AddDescription)


module.exports = ProductRouter