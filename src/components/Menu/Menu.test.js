import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('renders a new menu', () => {
    const wrapper = shallow(
      <Menu
        changeCategory={jest.fn()}
        localNews={[
          {
            id: 1,
            headline: 'Giant Chicken Skeleton',
            img:
              'https://i0.wp.com/wp-cpr.s3.amazonaws.com/uploads/2019/09/cpr-swolf_black-cube-monumental_DSC8170.jpg?resize=2064,1376',
            description: 'boogins!!!!!!!',
            url:
              'https://www.cpr.org/2019/09/27/giant-chicken-skeleton-in-denvers-central-library-stands-for-more-than-just-dinner/'
          }
        ]}
        entertainmentNews={[
          {
            id: 2,
            headline: 'Spider-Man',
            img:
              'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp',
            description: 'news news news',
            url: 'www.website.com'
          }
        ]}
        healthNews={[
          {
            id: 3,
            headline: 'Man dies',
            img:
              'https://www.newsobserver.com/entertainment/restaurants/o6w6n7/picture184859643/alternates/FREE_768/MAIN%20OPTION%202:%20OYSTERS',
            description: 'he dead',
            url:
              'https://www.bnd.com/news/nation-world/national/article235549897.html'
          }
        ]}
        scienceNews={[
          {
            id: 4,
            headline: 'Lost Moon Lander',
            img:
              'https://cdn.mos.cms.futurecdn.net/FsUeVGmY89BWeb36U8cUj5-650-80.jpg',
            description: 'space news',
            url:
              'https://www.livescience.com/india-moon-landing-site-nasa-photo.html'
          }
        ]}
        technologyNews={[
          {
            id: 5,
            headline: 'Google turns 21',
            img:
              'https://thenypost.files.wordpress.com/2019/09/google-birthday.jpg?quality=90&strip=all&w=1236&h=820&crop=1',
            description: 'you google stuff?',
            url:
              'https://nypost.com/2019/09/27/google-turns-21-a-look-back-at-the-search-engine-giants-iconic-life/'
          }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
