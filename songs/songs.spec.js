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