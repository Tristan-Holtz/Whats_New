import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('should be able to change currentPage', () => {
    const wrapper = shallow(<App />);
    const newCategory = [
      {
        id: 1,
        headline: 'The Who postpones Denver Concert at the Pepsi Center',
        img:
          'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
        description:
          'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
        url:
          'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
      }
    ];

    wrapper.instance().changeCategory(newCategory);

    expect(wrapper.state('currentPage')).toEqual(newCategory);
  });

  it('renders the app', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
