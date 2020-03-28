import request from 'supertest';

import app from '../../src/app';
import connection from '../../src/database/connection';

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const res = await request(app)
      .post('/ongs')
      .send({
        name: 'APAE2',
        email: 'contato@contato.com',
        whatsapp: '8300000000',
        city: 'João Pessoa',
        uf: 'PB',
      });

    expect(res.body).toHaveProperty('id');
    expect(res.body.id).toHaveLength(8);
  });
});
