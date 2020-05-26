
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('savedSongs').del()
    .then(function () {
      // Inserts seed entries
      return knex('savedSongs').insert([
        {
          songId: 1
        }
      ]);
    });
};
