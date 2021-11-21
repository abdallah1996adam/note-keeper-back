require('dot-env').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')



const server = express()
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())
server.use(express.urlencoded({extended:true}))



server.listen(process.env.SERVER_PORT, ()=>{
    console.log(`server is running on PORT ${process.env.SERVER_PORT} `);
})