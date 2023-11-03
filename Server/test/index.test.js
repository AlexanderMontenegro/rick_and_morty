const app = require('../src/App');
const request = require('supertest');
const agent = session(app);


describe('GET /rickandmorty/character/:id', () => {
  it('should respond with status 200', async () => {
    const response = await request(app).get('/rickandmorty/character/1');
    expect(response.status).toBe(200);
  });

  it('should respond with character properties', async () => {
    const response = await request(app).get('/rickandmorty/character/1');
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('species');
   
  });

  it('should respond with status 500 for non-existent character', async () => {
    const response = await request(app).get('/rickandmorty/character/999');
    expect(response.status).toBe(500);
  });
});
