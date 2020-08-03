const request = require('supertest')
const supertest = require("supertest")
const server = require('../api/server')
const db = require('../database/dbConfig')



afterAll(async () => {
  await db.destroy()
})

describe('main server API', () => {

  let token = '' //token we use throughout testing (we receive it from the POST /auth/login endpoint)
  let entryId = '' //set the entry ID used for the tests

  describe('main route (GET /)', () => {
    it('should respond properly', async () => {
     const res= await request(server).get('/')
     .set({ "Authorization": `Bearer ${token}` })
      expect(res.statusCode).toBe(404);
      //expect(response.type).toEqual('application/json')
      //expect(response.body).toEqual({ message: 'Please navigate to proper route.' })
    })
  })

  test("DELETE /api/items/2", async () => {
    const res = await supertest(server).delete('/api/items/2')
    .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvbiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNTk2MDU0MTAxLCJleHAiOjE1OTY0ODYxMDF9.fUACUZBMlN3AF-4cbRmN4sWdEyG_IIguyalZ1_NT2Ck')
    // expect(res.type).toBe('application/json')
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    // expect(res.body.id).toBe(1)
    expect(res.statusCode).toBe(200);
  })

describe('GET /api (authentication works)', () => {
  it('returns a valid response', async () => {
    const res = await request(server).get('/api').set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvbiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNTk2MDU0MTAxLCJleHAiOjE1OTY0ODYxMDF9.fUACUZBMlN3AF-4cbRmN4sWdEyG_IIguyalZ1_NT2Ck')
    //expect(res.type).toBe('application/json')
    //expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    // expect(res.body.id).toBe(1)
    expect(res.statusCode).toBe(404);
  })
})
})
