// const supertest = require("supertest")
// const server = require("../api/server")
// const db = require("../database/dBConfig")
// const authRouter = require('../auth/auth-router.js');
// const jokesRouter = require('../legos/legos-router.js');

// // // a global jest hook to run before each individual test
// // beforeEach(async () => {
// // 	// re-run the seeds and start with a fresh database for each test
// // 	await db.seed.run()
// // })

// // // a global jest hook to run after all the tests are done
// // afterAll(async () => {
// // 	// closes the database connection so the jest command doesn't stall
// // 	await db.destroy()
// // })



// test("Jokes header type", async () => {
//   const res = await supertest(server).get('/api/jokes')
//   .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJpbGJvMiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNTk1MTkxNTQ3LCJleHAiOjE1OTUyNzc5NDd9.30LWO8IDUFWTPvekBJ842QpNEnsVxGrXv5NItPpJcTQ')
//   // expect(res.type).toBe('application/json')
//   expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
//   expect(res.body).toBeDefined()
// })




