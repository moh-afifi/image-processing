import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

it('gets the api endpoint', async () => {
  const response = await request.get('/api/images?image=icelandwaterfall&width=700&height=300');
  expect(response.status).toBe(200);
});
