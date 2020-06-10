const router = require ('express').Router();
const User = require('../../models/users');
 
 //GET http://localhost:3000/api/users Devuelve todos los users

 router.get('/', (req, res) => {
    User.getAll()
    .then((rows) => {
        res.json(rows);
        // Sustituir 
    })
    .catch(err => {
        res.json({error: err.message});
    })
});

 //POST http://localhost:3000/api/users/ Crea un nuevo user en la base de datos

router.post('/', (req,res) => {
    res.send ('Estoy en /api/users')
}) 
 
 //DELETE http://localhost:3000/api/users/IDUSER Borra un usuario
 
 //PUT http://localhost:3000/api/users/IDUSER Edita los datos de un usuario
 
 module.exports=router;