// import express from express (nueva EMC6)
const express= require('express')
const routes = require('./routes')
//crea una app de express
const app = express();


//ruta para el home 
app.use("/",routes());




//puerto donde funciona mi servidor 
app.listen(3000);


