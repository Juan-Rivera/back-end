
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        {
          songTitle: 'Touching Heaven',
          artistName: 'Johnnyswim'
        },
        {
          songTitle: 'Exit Strategy Of A Wrecking Ball',
          artistName: 'Diablo Swing Orchestra'
        },
        {
          songTitle: 'Me & Mr Jones',
          artistName: 'Amy Winehouse'
        },
        {
          songTitle: "I'm With You",
          artistName: 'Vance Joy'
        },
        {
          songTitle: 'Galactic Mermaid',
          artistName: 'Kuraiinu'
        }
      ]);
    });
};
