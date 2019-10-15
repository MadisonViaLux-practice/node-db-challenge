const db = require('../data/db-config')


module.exports = {
    find,
    findById,
    add,
    findTask,
    addTask,
    findRes,
    addRes
}




function find(){
    return db('projects')
}

function findById(id){
    return db('projects')
        .where({id})
}

function add(proData){
    return db('projects')
        .insert(proData)
}




function findTask(id){
    return db('projects AS p')
        .join('task AS t', {'p.id': 't.project_id'})
        .select('name', 'project_id', 'task_description', 'task_notes', 'task_completed')
        .where({project_id: id})
}

function addTask(newTask){
    return db('task')
        .insert(newTask)
}




function findRes(id){
    return db('projects AS p')
        .join('resource AS r', {'p.id': 'r.project_id'})
        .select('project_id', 'resource_name', 'resource_description')
        .where({project_id: id})
}


function addRes(newRes){
    return db('resource')
        .insert(newRes)
}

