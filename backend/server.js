const mongoose = require("./config/dbConnection"); //MongoDb connection
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const app = express();

/** Middleware */
app.use(cors());
app.use(express.json());

/** Routes */
app.use('/api/auth', authRoutes);

app.use('/', (req, res)=>{
    res.status(200).send('Welcome to Ride Meter!');
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening at PORT ${process.env.PORT}`)
})