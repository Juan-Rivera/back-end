const db = require('../data/dbConfig')

module.exports = {
    find,
    findById,
    findByFilter,
    add,
    update
}

function find(){
    return db('users')
}

function findById(id){
    return db('users').where({id}).first()
}

function findByFilter(filter) {
    return db('users').where(filter).orderBy('id')
}

async function add(user) {
    const [newUser] = await db('users').insert(user, '*');
  
    return newUser;
  }

  function update(changes, id){
    return db('users')
    .update(changes)
    .where({id})
}
