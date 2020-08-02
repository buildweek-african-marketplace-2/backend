const supertest = require("supertest")
const server = require("../api/server")
const db = require("../database/dBConfig")

// // // a global jest hook to run before each individual test
// beforeEach(async () => {
// 	// re-run the seeds and start with a fresh database for each test
// 	await db.seed.run()
// })

// // // a global jest hook to run after all the tests are done
// afterAll(async () => {
// 	// closes the database connection so the jest command doesn't stall
// 	await db.destroy()
// })



test("DELETE /api/items/2", async () => {
  const res = await supertest(server).delete('/api/items/2')
  .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvbiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNTk2MDU0MTAxLCJleHAiOjE1OTY0ODYxMDF9.fUACUZBMlN3AF-4cbRmN4sWdEyG_IIguyalZ1_NT2Ck')
  // expect(res.type).toBe('application/json')
  expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
  // expect(res.body.id).toBe(1)
  expect(res.statusCode).toBe(200);
})


// EDIT ITEM
test("EDIT /api/items/2", async () => {
  
  const item = await supertest(server).put("/api/items/2").send({ image: 'https://bit.ly/3jo6hU7',
      name: 'dragon2',
      description: 'very nice2',
      price: 50, location: 'Nigeria'})
      .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvbiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNTk2MDU0MTAxLCJleHAiOjE1OTY0ODYxMDF9.fUACUZBMlN3AF-4cbRmN4sWdEyG_IIguyalZ1_NT2Ck')

      expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
  // expect(res.body.id).toBe(1)
  expect(res.statusCode).toBe(200);
})





