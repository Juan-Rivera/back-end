const request = require('supertest')
const server = require('../server')
const db = require('../data/dbConfig')

beforeEach(() => {
    return db.migrate
      .rollback()
      .then(() => db.migrate.latest())
      .then(() => db.seed.run());
  });
it.todo('test songs')
//   test('get all songs after login', async () => {
//     const reg = await request(server)
//     .post('/api/auth/register')
//     .send({
//       username: 'someone',
//       password: 'password'
//       })
//     const log = await request(server)
//     .post('/api/auth/login')
//     .send({
//         username: 'someone',
//         password: 'password'
//         })
//     const get = await request(server)
//     .get('/api/songs')
//     .set('Authorization', log.body.token)
//     expect(get.status).toBe(200)  
//     // console.log(get)
//     expect(get.body).toHaveLength(5)
// })