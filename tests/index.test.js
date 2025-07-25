const request = require("supertest");
const app = require("../src/index");

test("GET /", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hello from backend!");
});
