const request = require('supertest');
const axios = require('axios');

const { createFakeClient } = require('../factory');
const app = require('../../app');

describe('Clients', () => {
  describe('GET /clients', () => {
    test('get success', done => {
      const fakeClient = createFakeClient({ id: 'randomID' });
      axios.setMockClient(fakeClient);
      return request(app)
        .get('/clients/randomID')
        .send()
        .then(res => {
          expect(res.error).toBe(false);
          expect(res.status).toBe(200);
          Object.keys(fakeClient).forEach(key => expect(res.body).toHaveProperty(key));
          done();
        });
    });
  });
});
