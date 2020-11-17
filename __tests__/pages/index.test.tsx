import { render, screen } from '@testing-library/react';
import Homepage from '../../pages';

test('homepage is rendered', () => {
  render(<Homepage />);

  const title = screen.getByText('Fern');
  expect(title).toBeInTheDocument();
});
