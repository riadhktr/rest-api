const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: String,
    quantity: Number,
    price: Number,
    image: String,
    processor: String,
    memory: Number,
    stockage: Number,


})

module.exports = mongoose.model('Product',ProductSchema)
    

