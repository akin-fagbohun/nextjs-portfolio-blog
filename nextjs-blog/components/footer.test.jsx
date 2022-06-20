import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

test('Tests footer renders with link items', () => {
  render(<Footer />);

  const github = screen.getByRole('link', {
    name: /GitHub/,
  });
  const linkedin = screen.getByRole('link', {
    name: /LinkedIn/,
  });
  const northcoders = screen.getByRole('link', {
    name: /Northcoders/,
  });

  expect(github).toBeInTheDocument();
  expect(linkedin).toBeInTheDocument();
  expect(northcoders).toBeInTheDocument();
});
