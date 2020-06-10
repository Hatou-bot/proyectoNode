const router = require ('express').Router();
const Item = require('../../models/items');
 
 //GET http://localhost:3000/api/items Devuelve todos los items

router.get('/', (req, res) => {
    Item.getAll()
    .then((rows) => {
        res.json(rows);
        // Sustituir 
    })
    .catch(err => {
        res.json({error: err.message});
    })
});
 
 //POST http://localhost:3000/api/items/ Crea un nuevo item en la base de datos

router.post('/', (req,res) => {
    res.send ('Estoy en /api/items')
})  
 
 //DELETE http://localhost:3000/api/items/IDITEM Borra un item
 
 //PUT http://localhost:3000/api/items/IDITEM Edita los datos de un producto

 
 module.exports=router;