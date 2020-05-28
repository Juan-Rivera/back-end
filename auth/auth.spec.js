const request = require('supertest')
const server = require('../server')
const db = require('../data/dbConfig')

beforeEach(() => {
    return db.migrate
      .rollback()
      .then(() => db.migrate.latest())
      .then(() => db.seed.run());
  });

  test('register user to /api/auth/register', async () => {
      const res = await request(server)
      .post('/api/auth/register')
      .send({
          name: 'name',
          username: 'someone',
          password: 'password'
      })
      expect(res.body).toMatchObject({
          username: 'someone'
      })
  })

  test('register user sends status code 201', async () => {
      const res = await request(server)
      .post('/api/auth/register')
      .send({
        name: 'name',
        username: 'someone',
        password: 'password'
        })
        expect(res.status).toBe(201)
  })

  test('login user works', async () => {
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
      expect(log.body).toMatchObject({
          username: 'someone'
      })
  })

  test('can only get list of users if authorized', async () => {
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
    .get('/api/auth')
    .set('Authorization', log.body.token)
    expect(get.status).toBe(200)
  })