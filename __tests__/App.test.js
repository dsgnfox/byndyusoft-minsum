/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';

afterEach(cleanup);

test('show result popup', () => {
  render(<App />);
  const form = screen.getByTestId('form');
  fireEvent.submit(form);
  setTimeout(() => {
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  }, 1000);
});
