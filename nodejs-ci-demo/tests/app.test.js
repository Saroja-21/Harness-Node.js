const request = require('supertest');
const { app, add, multiply } = require('../src/index');

describe('API Endpoints', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Hello from Node.js CI Demo!');
  });

  test('GET /health should return healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  test('POST /api/users should create user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'John Doe' });
    expect(response.statusCode).toBe(200);
    expect(response.body.user.name).toBe('John Doe');
  });
});

describe('Utility Functions', () => {
  test('add function should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('multiply function should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(5, 0)).toBe(0);
  });
});