import { MockedProvider } from '@apollo/client/testing';
import ReactDOM from 'react-dom';
import Homepage from '../../pages/index';

it('renders correctly', () => {
  const container = document.createElement('div');
  ReactDOM.render(
    <MockedProvider>
      <Homepage />
    </MockedProvider>,
    container
  );

  expect(container).toMatchSnapshot();
});
