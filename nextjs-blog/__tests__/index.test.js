/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Home from '../pages/blog/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  test('renders a heading', async () => {
    const page = render(<Home />);

    const heading = await screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
