const db = require('../data/dbConfig')
const axios = require('axios')

module.exports = {
    find,
    findById,
    findSavedSongs,
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

async function save(song) {
    const [newSong] = await db('savedSongs').insert(song, '*');
  
    return newSong;
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