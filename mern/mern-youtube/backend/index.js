//importar librerias
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');



// use methods  libs.
const app = express();
require('dotenv').config();


// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());


//Database setup

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => {console.log("Conección de Base de Datos exitosa");})

//Routes setup

app.use('/api/category', require('./routes/category'));
app.use('/api/videogame', require('./routes/videogames'));
//Listen to port

const port = process.env.PORT;


app.listen(port, () => {
    console.log(`Servidor de videojuegos MERN esta siendo ejecutado en el puerto: ${port}`);
})

