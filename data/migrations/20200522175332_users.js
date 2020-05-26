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
      .string('songTitle', 255)
      .notNullable()
      .references('songTitle')
      .inTable('songs')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      
      tbl
      .string('artistName', 255)
      .notNullable()
      .references('artistName')
      .inTable('songs')
      .onDelete('CASCADE')
      .onUpdate('CASCADE') 
      })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('songs')
  .dropTableIfExists('savedSongs')
};