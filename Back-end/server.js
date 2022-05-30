const express = require('express')
const connectDb = require('./config/ConnexionDb')
const app = express()
const cors = require('cors')
const ProductRouter = require('./routes/Product')
require('dotenv').config()
const PORT = process.env.PORT

connectDb();

app.use(express.json())
app.use(cors())
app.use('/',ProductRouter)


app.listen(PORT,(err)=>{

    (err)? console.log(err): console.log(`Connected to the server via Port: ${PORT}`)
})
