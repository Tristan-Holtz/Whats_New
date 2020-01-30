import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('renders a nav', () => {
    const wrapper = shallow(<SearchForm />);

    expect(wrapper).toMatchSnapshot();
  });
});
