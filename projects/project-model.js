const db = require('../data/db-config')


module.exports = {
    find,
    findById,
    // findRes,
    // findResById,
    findTask
}

function find(){
    return db('projects')
}

function findById(id){
    return db('projects')
        .where({id})
}

// function findRes(){
//     return db('resource')
// }

// function findResById(id){
//     return db('resource')
//         .where({id})
// }

function findTask(id){
    return db('projects AS p')
        .join('task AS t', {'p.id': 't.project_id'})
        .select('description', 'notes', 'completed')
        .where({project_id: id})
}