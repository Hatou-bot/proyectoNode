const queries = require('../queries')

const getAll = () => {
    return new promise((resolve, reject) => {
        db.query(queries.selectAll, (err, row) => {
            if(err) reject (err)
            resolve(rows)
        })
    })
}



module.exports = {
    getAll
}