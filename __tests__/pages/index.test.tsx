import * as React from 'react';
import { mount } from 'enzyme';
import Homepage from '../../pages/home';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', () => {
      const wrap = mount(<Homepage />);
      expect(wrap.find('h1').text()).toBe('Fern');
    });
  });
});
