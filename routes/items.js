const router = require('express').Router()
const item = require('../models/items')
const moment = require('moment').Router()


router.get('/', async(req, res) => {
    item.getAll()
        .then(rows => {
            res.render('items/index', {items: rows})
        })
        .catch(err => {
            res.send(err)
        })
})
router.post('/create', async(req, res) => {
    const result = await item.create(req)
    res.send('Estoy en items/create')
})



module.exports = router