import React from 'react';
import './App.css';

import Parent from './Parent'

class App extends React.Component {
  render() {
    return (
      <div className="component">
        <Parent />
      </div>
    );
  }
}

export default App;
