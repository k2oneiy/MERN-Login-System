
const express = require('express');
const app = express()
const connect = require('./database/connection');
const cors = require('cors');
require('dotenv').config({ path: "./config.env"});



app.use(express.json());
app.use(cors());

require('dotenv').config({path: "./config.env"});

const PORT  = process.env.PORT||8080;

connect();
app.use('/api',require('./router/router'));



app.listen(PORT,()=>{
    console.log(`App is running on http://localhost:4000/`);
})

