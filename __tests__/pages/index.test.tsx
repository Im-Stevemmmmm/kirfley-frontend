import Something from '../../pages/something';
import { render } from '@testing-library/react';
import Homepage from '../../pages';

test('hello world!', () => {
  const wrapper = render(<Homepage />);
});
