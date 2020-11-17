import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Homepage from '../../pages/index';

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

it('renders correctly', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Homepage />, container);

  expect(container).toMatchSnapshot();
});

describe('index page', () => {
  beforeEach(() => render(<Homepage />));

  it('displays a greeting message', () => {
    expect(screen.getByText('Fern')).toBeInTheDocument;
    expect(
      screen.getByText(
        'A free platform where you can pretty much say anything.'
      )
    ).toBeInTheDocument;
  });

  it('renders the sign up and log in buttons', () => {
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument;
    expect(screen.getByRole('button', { name: 'Log In' })).toBeInTheDocument;
  });
});
