const request = require('supertest')
const server = require('../api/server')
const db = require('../database/dbConfig')

describe('POST /api/items/:id', () => {
  afterAll(async () => {
    await db('items').truncate()
    // await db('users').truncate()
  })
  beforeEach(async () => {
    await db('items').truncate()
    // await db('users').truncate()
    await request(server)
      .post('/api/auth/register')
      .send({ username: 'user1', password: 'pass' })
  })

  it('should return 201 http status code', async () => {
    const login = await request(server)
      .post('/api/auth/login')
      .send({ username: 'user1', password: 'pass' })
    const posts = await request(server)
      .post('/api/items/1')
      .set('Authorization', login.body.token)
      .send({
        post: { title: 'title1', content: 'content1' },
        recs: [
          { subreddit: 'IAmA', score: 1 },
          { subreddit: 'dadjokes', score: 2 },
          { subreddit: 'AskReddit', score: 3 },
          { subreddit: 'ShowerThoughts', score: 4 },
          { subreddit: 'relationship_advice', score: 5 }
        ]
      })
    expect(posts.status).toBe(201)
  })

  // it('should return a list of saved recs if user is signed in', async () => {
  //   const login = await request(server)
  //     .post('/api/auth/login')
  //     .send({ email: 'user1', password: 'pass' })
  //   const posts = await request(server)
  //     .post('/api/posts/1')
  //     .set('Authorization', login.body.token)
  //     .send({
  //       post: { title: 'title1', content: 'content1' },
  //       recs: [
  //         { subreddit: 'IAmA', score: 1 },
  //         { subreddit: 'dadjokes', score: 2 },
  //         { subreddit: 'AskReddit', score: 3 },
  //         { subreddit: 'ShowerThoughts', score: 4 },
  //         { subreddit: 'relationship_advice', score: 5 }
  //       ]
  //     })
  //   expect(posts.body).toHaveLength(5)
  // })
})