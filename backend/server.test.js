import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from './server';

describe('server', () => {
  it('should return 200 on pulse check', async () => {
    const res = await request(app).get('/pulse').expect(200);
    expect(res.body).toStrictEqual({ msg: 'ok' });
  });
});
