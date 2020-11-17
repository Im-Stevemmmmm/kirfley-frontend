import { render, screen } from '@testing-library/react';
import Homepage from '../../pages';

test('greeting is displayed', () => {
  render(<Homepage />);

  expect(screen.getByText('Fern')).toBeInTheDocument;
  expect(
    screen.getByText('A free platform where you can pretty much say anything.')
  ).toBeInTheDocument;
});

test('sign up and log in buttons are rendered', () => {
  render(<Homepage />);

  expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument;
  expect(screen.getByRole('button', { name: 'Log In' })).toBeInTheDocument;
});
