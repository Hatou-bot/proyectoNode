const router = require('router')
const customer = require('../models/customer')

//Recovers customers and shows them in the table
router.get('/', (req, res) => {
    customer.getAll()
        .then (rows => {
            res.render('customers/index', {customers: rows})
        })
        .catch(err => {
            res.send(err)
        })
})







module.exports = router