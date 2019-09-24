import React, { Component } from 'react';
import Navigation from './components/Navbar';
import SearchResult from './components/SearchResult'
import SearchFilters from './components/SearchFilters'
import { DELIVERIES } from './shared/deliveries';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveries: DELIVERIES
    };
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <SearchFilters />
        

        <div className="row">
          <SearchResult deliveries={this.state.deliveries} />
        </div >
      </div >
    );
  }
}

export default App;
