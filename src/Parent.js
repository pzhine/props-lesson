import React from 'react';
import Child from './Child'
import Sibling from './Sibling'

class Parent extends React.Component {
  state = {
    active: ''
  }
  onSetActive(nextActive) {
    this.setState({ active: nextActive })
  }
  render() {
    return (
      <div className="component">

        <h1>Parent</h1>

        <button onClick={() => this.onSetActive('Parent')}>
          Activate!
        </button>

        <h3>Active: {this.state.active}</h3>

        <Child active={this.state.active} onSetActive={this.onSetActive.bind(this)}/>
        <Sibling active={this.state.active} />

      </div>
    )
  }
}

export default Parent
