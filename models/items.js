const getAll = () => {
    return new Promise ((resolve,reject) => {
        db.query('select * from items', (err, rows) => {
            if (err) reject(err);
            resolve (rows);
        });
    });
};

// DEFINIR QUERYS DE TABLA LA TABLA ITEMS

module.exports = {
    getAll
}