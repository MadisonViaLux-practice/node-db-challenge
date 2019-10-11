const db = require('../data/db-config')


module.exports = {
    find,
    findById,
}

function find(){
    return db('projects')
}

function findById(id){
    return db('projects')
        .where({id})
}