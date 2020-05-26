exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
    tbl.increments()

    tbl
    .string('username', 128)
    .notNullable()
    .unique()

    tbl
    .string('password', 128)
    .notNullable()
  })

  .createTable('songs', tbl => {
      tbl.increments()

      tbl
      .string('songTitle', 255)
      .notNullable() 
      
      tbl
      .string('artistName', 255)
      .notNullable()          
      })

  .createTable('savedSongs', tbl => {
      tbl.increments()

      tbl
      .integer('songId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('songs')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

      tbl
      .integer('userId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('savedSongs')
  .dropTableIfExists('songs')
  .dropTableIfExists('users')
};