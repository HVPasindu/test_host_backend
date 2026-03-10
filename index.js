require('dotenv').config();


const express = require('express')
const app = express()
const port = 3000
const customerRouter = require('./routes/customer-routes')

app.use(express.urlencoded())

// parse application/json
app.use(express.json())

// serve uploaded files
app.use('/uploads', express.static('uploads'));

app.use('/customer',customerRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
