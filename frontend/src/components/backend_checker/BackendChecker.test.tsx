import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { BackendChecker } from './BackendChecker';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

describe('BackendChecker', () => {
  const server = setupServer(
    http.get(`${import.meta.env.VITE_BACKEND_URL}/pulse`, () => {
      return HttpResponse.json({ msg: 'ok' });
    }),
  );

  beforeAll(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });
  afterAll(() => server.close());

  it('is ok when the backend responds', async () => {
    render(<BackendChecker />);

    await fireEvent.click(screen.getByText('Check backend connection'));
    await screen.findByText('ok');
  });

  it('shows an error when the backend fails', async () => {
    server.use(
      http.get(`${import.meta.env.VITE_BACKEND_URL}/pulse`, () => {
        return HttpResponse.error();
      }),
    );

    render(<BackendChecker />);

    await fireEvent.click(screen.getByText('Check backend connection'));
    await screen.findByText('error');
  });

  it(`cleans up the dom in between tests`, async () => {
    expect(async () => {
      await screen.findByText('Check backend connection');
    }).rejects.toThrowError();
  });
});
