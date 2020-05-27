const db = require('../data/dbConfig')
const axios = require('axios')

module.exports = {
    find,
    findById,
    findSavedSongs,
    add,
    save,
    update,
    remove
}

function find(){
    return db('songs')
}

function findById(id){
    return db('songs').where({id}).first()
}

function findSavedSongs(){
    return db('savedSongs')
}

function add(song){
    return db('songs').insert(song)
}

function save(song){
    return db('savedSongs')
    .insert(song)
    .then(ids => {
        const id = ids[0]
        return db('savedSongs')
        .where({id})
        .first()
        .then(song => {
            return song
        })
    })
}

function update(changes, id){
    return db('savedSongs')
    .update(changes)
    .where({id})
}

function remove(id){
    return db('savedSongs')
    .del()
    .where({id})
}