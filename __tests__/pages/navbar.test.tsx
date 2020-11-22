import { act, render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Navbar from '../../components/navbar';

it('renders correctly', () => {
  const container = document.createElement('div');

  act(() => {
    ReactDOM.render(<Navbar />, container);
  });

  expect(container).toMatchSnapshot();
});

describe('navbar', () => {
  beforeEach(() => render(<Navbar />));

  it('renders the sign up and log in buttons', () => {
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument;
    expect(screen.getByRole('button', { name: 'Log In' })).toBeInTheDocument;
  });
});
