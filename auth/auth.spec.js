const supertest = require("supertest")
const server = require("../api/server")
const db = require("../database/dBConfig")
// const authRouter = require('./auth-router.js');
// const jokesRouter = require('../legos/legos-router.js');

test("POST  register", async () => {
  const user = await supertest(server).post("/api/auth/register").send({
    username: "my name123",
    password: "abc123",
  });

  expect(user.statusCode).toBe(500);
  // expect(user.body.id).toBeDefined();
  // expect(user.body.username).toBe("name123");
  // expect(user.body.password).toBeDefined;
});


test("POST  login", async () => {
  const user = await supertest(server).post("/api/auth/login").send({
    username: "my name123",
    password: "abc123",
  });
  
  expect(user.statusCode).toBe(200);
  // expect(user.body.id).toBeDefined();
  // expect(user.body.username).toBe("name123");
  // expect(user.body.password).toBeDefined;
});