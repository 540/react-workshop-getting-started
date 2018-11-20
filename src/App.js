import React, { Component } from 'react';
import GameList from './views/GameList'

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <GameList/>
        </div>
      </div>
    );
  }
}

export default App;
