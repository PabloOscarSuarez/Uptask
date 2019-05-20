// import express from express (nueva EMC6)
const express= require('express')
const routes = require('./routes')
// path lo que hace es leer archivos
const path= require('path')

//crea una app de express
const app = express();

//habilitar pug siempre despues de app 
app.set('view engine','pug');

//Añadir la carpeta de las vistas
app.set('views',path.join(__dirname,'./views'))

//ruta para el home 
app.use("/",routes());




//puerto donde funciona mi servidor 
app.listen(3000);


