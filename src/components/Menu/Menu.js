import React from 'react';
import './Menu.css';

const Menu = ({
  localNews,
  technologyNews,
  entertainmentNews,
  scienceNews,
  healthNews,
  changeCategory
}) => {
  return (
    <aside className="menu">
      <h2>Whats New</h2>
      <button onClick={() => changeCategory(localNews)}>Local News</button>
      <button onClick={() => changeCategory(technologyNews)}>Technology</button>
      <button onClick={() => changeCategory(entertainmentNews)}>
        Entertainment
      </button>
      <button onClick={() => changeCategory(scienceNews)}>Science</button>
      <button onClick={() => changeCategory(healthNews)}>Health</button>
    </aside>
  );
};

export default Menu;
