import { describe, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { BackendChecker } from './BackendChecker';

describe('BackendChecker', () => {
  it('checks', async () => {
    render(<BackendChecker />);

    await fireEvent.click(screen.getByText('Check backend connection'));
    await screen.findByText('error');
  });
});
