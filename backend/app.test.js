import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from './app.js';

describe('app', () => {
  it('should return 200 on pulse check', async () => {
    const res = await request(app).get('/pulse').expect(200);
    expect(res.body).toStrictEqual({ msg: 'ok' });
  });
});
