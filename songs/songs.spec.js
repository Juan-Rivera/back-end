const request = require('supertest')
const server = require('../server')
const db = require('../data/dbConfig')

beforeEach(() => {
    return db.migrate
      .rollback()
      .then(() => db.migrate.latest())
      .then(() => db.seed.run());
  });

  test('get all songs after login', async () => {
    const reg = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'name',
      username: 'someone',
      password: 'password'
      })
    const log = await request(server)
    .post('/api/auth/login')
    .send({
        name: 'name',
        username: 'someone',
        password: 'password'
        })
    const get = await request(server)
    .get('/api/songs')
    .set('Authorization', log.body.token)
    expect(get.status).toBe(200)  
    expect(get.body).toHaveLength(5)
})

test('save song to /api/songs/save/:id', async () => {
  const reg = await request(server)
  .post('/api/auth/register')
  .send({
    name: 'name',
    username: 'someone',
    password: 'password'
    })
  const log = await request(server)
  .post('/api/auth/login')
  .send({
      name: 'name',
      username: 'someone',
      password: 'password'
      })
  const save = await request(server)
  .post(`/api/songs/save/2`)
  .send(    {
    album_art: "https://i.scdn.co/image/ab67616d0000b273441fd03f69579d36801631d9",
    album_name: "asd;lkfhlkjs else",
    artist: "blah else",
    song_id: "oyvey",
    title: "The Ocean - 1990 Remaster"
})
  .set('Authorization', log.body.token)
  expect(save.status).toBe(200)
})

test('delete song from user from /api/songs/:id', async () => {
  const reg = await request(server)
  .post('/api/auth/register')
  .send({
    name: 'name',
    username: 'someone',
    password: 'password'
    })
  const log = await request(server)
  .post('/api/auth/login')
  .send({
      name: 'name',
      username: 'someone',
      password: 'password'
      })
  const save = await request(server)
  .post(`/api/songs/save/2`)
  .send({
    album_art: "https://i.scdn.co/image/ab67616d0000b273441fd03f69579d36801631d9",
    album_name: "asd;lkfhlkjs else",
    artist: "blah else",
    song_id: "oyvey",
    title: "The Ocean - 1990 Remaster"
  })
  .set('Authorization', log.body.token)
  const del = await request(server)
  .delete('/api/songs/1')
  .set('Authorization', log.body.token)
  expect(del.body.message).toBe('successfully removed')
})