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

async function add(scheme){
    const [id] = await db('schemes')
    .insert(scheme)

    return findById(id)
}

async function update(changes, id){
    await db('schemes')
        .where({ id })
        .update(changes)

    return findById(id)
}

function remove(id){
    return db('schemes')
    .where({ id })
    .del()
}



module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}