import React, { Component } from 'react';
import SearchWidget from './SearchWidget';
import { Router, browserHistory, Route, Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={SearchWidget} />
      </Router>
    );
  }
}

export default App;