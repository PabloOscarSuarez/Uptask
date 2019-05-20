//construido en MVC , cada pieza separada patron de diseño de software
const express= require('express');
const router = express.Router()
//importo controlador
const controller=  require('../controllers/proyectosController')
module.exports=function() {
    //pagina home 
    router.get("/",controller.proyectosHome);
    return router
}