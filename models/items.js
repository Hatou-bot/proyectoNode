const queries = require('../queries')

const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query(queries.selectAll, (err, rows) => {
            if(err) reject (err)
            resolve(rows)
        })
    })
}

const create = (name, description, pic_1, pic_2, pic_3, precio, post_delivery, hand_delivery) => {
    return new Promise((resolve, reject) => {
        db.query('insert into items (name, description, pic_1, pic_2, pic_3, precio, post_delivery, hand_delivery) values (?, ?, ?, ?, ?, ?, ?, ?)',
        [name, description, pic_1, pic_2, pic_3, precio, post_delivery, hand_delivery, new Date()],
        (err, result) => {
            if (err) reject(err)
            resolve(result)
        })
    })
}

module.exports = {
    getAll, create
} 