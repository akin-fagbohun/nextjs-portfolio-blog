import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Test footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('should test footer renders', () => {
    const github = screen.getByText('GitHub');
    expect(github).toBeInTheDocument();
  });
});
