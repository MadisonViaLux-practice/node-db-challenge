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
        .select('task_description', 'task_notes', 'task_completed', 'project_id')
        .where({project_id: id})
}