import ReactDOM from 'react-dom';
import Homepage from '../../pages/index';

it('renders correctly', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Homepage />, container);

  expect(container).toMatchSnapshot();
});
