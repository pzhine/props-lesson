import React from 'react';

function Child(props) {
  return (
    <div className="component">

      <h1>Child</h1>

      <button onClick={() => props.onSetActive('Child')}>
        Activate!
      </button>

      <h3>Active: {props.active}</h3>

    </div>
  )
}

export default Child
