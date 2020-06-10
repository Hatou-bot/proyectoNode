const getAll = () => {
    return new Promise ((resolve,reject) => {
        db.query('select * from users', (err, rows) => {
            if (err) reject(err);
            resolve (rows);
        });
    });
};

// DEFINIR QUERYS DE TABLA LA TABLA USERS

module.exports = {
    getAll
}