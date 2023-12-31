//importamos
const app = require('../../app');
const { Router } = require('express');

//Importamos el crud desde user.controller

const {
    readTrazabilidad,
    readTrazabilidadId,
    createTrazabilidad,
    updateTrazabilidad,
    deleteTrazabilidad,  
    readTrazabilidadIdpila,  
    readTotalPecesPila
}= require('../controller/trazabilidad.controller');

const router = Router();


//endpoint rutas
//recibe una peticion y el servidor siempre da una respuesta 

router.get('/', readTrazabilidad);
router.get('/:id',readTrazabilidadId );
router.get('/pila/:id',readTrazabilidadIdpila );
router.post('/', createTrazabilidad);
router.put('/:id', updateTrazabilidad);
router.delete('/:id', deleteTrazabilidad);
router.get('/total/:id', readTotalPecesPila);




//Exportamos las endpoints
module.exports = router;