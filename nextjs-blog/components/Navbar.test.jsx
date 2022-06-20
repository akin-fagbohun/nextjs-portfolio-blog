import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';
import { RouterContext } from 'next/dist/shared/lib/router-context';

test('Tests navbar renders with link items', () => {
  const router = {
    pathname: '/blog',
  };
  render(
    <RouterContext.Provider value={router}>
      <Navbar />
    </RouterContext.Provider>
  );

  const home = screen.getByRole('link', {
    name: /home/i,
  });
  const about = screen.getByRole('link', {
    name: /about/i,
  });
  const blog = screen.getByRole('link', {
    name: /blog/i,
  });
  const contact = screen.getByRole('link', {
    name: /contact/i,
  });

  expect(home).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(blog).toBeInTheDocument();
  expect(contact).toBeInTheDocument();
});
