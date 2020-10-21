const { innerJoin } = require('../data/config')
const db = require('../data/config')

function find(){
    return db('schemes')
    .select('*')
}

function findById(id){
    return db('schemes')
    .where('schemes.id', id)
    .select('schemes.*')
}

function findSteps(id){
    return db('steps')
    .innerJoin('schemes', 'steps.scheme_id', 'schemes.id')
    .where('schemes.id', id)
    .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
}



module.exports = {
    find,
    findById,
    findSteps,
}