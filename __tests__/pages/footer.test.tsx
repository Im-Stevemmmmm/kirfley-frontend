import ReactDOM from 'react-dom';
import Footer from '../../components/footer';

it('renders correctly', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Footer />, container);

  expect(container).toMatchSnapshot();
});
