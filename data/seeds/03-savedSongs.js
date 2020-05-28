
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('savedSongs').del()
    .then(function () {
      // Inserts seed entries
      return knex('savedSongs').insert([
        {
          album_art: 'album picture url',
          album_name: 'album name',
          artist: 'artist',
          title: 'title',
          userId: 1
        }
      ]);
    });
};
