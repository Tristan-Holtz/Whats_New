import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      health,
      science,
      technology,
      currentPage: local
    };
  }

  changeCategory = category => {
    this.setState({ currentPage: category });
  };

  render() {
    return (
      <main className="app">
        <Menu
          changeCategory={this.changeCategory}
          localNews={this.state.local}
          entertainmentNews={this.state.entertainment}
          healthNews={this.state.health}
          scienceNews={this.state.science}
          technologyNews={this.state.technology}
        />
        <section>
          <SearchForm />
          <NewsContainer currentPage={this.state.currentPage} />
        </section>
      </main>
    );
  }
}

export default App;
