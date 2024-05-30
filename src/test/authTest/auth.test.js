import request from "supertest";
import mongoose from "mongoose";
import app from "../../app.js"
import User from "../../models/userModel.js";

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await User.deleteMany({});
  await mongoose.connection.close();
});

describe("Auth API", () => {
  let userData = {
    workerCode: "codexxxx",
    name: "Test User",
    email: "testuser12@example.com",
    phone: "1234567890",
    position: "Tester",
    role: 2,
    password: "password123",
  };

  test("should register a new user", async () => {
    const response = await request(app).post("/api/register").send(userData);

    expect(response.statusCode).toBe(201);
    expect(response.body.email).toBe(userData.email);
  });

  test("should login a user", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({ email: userData.email, password: userData.password });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

});
