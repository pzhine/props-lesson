import React from 'react';

function Sibling(props) {
  return (
    <div className="component">

      <h1>Sibling</h1>

      <h3>Active: {props.active}</h3>

    </div>
  )
}

export default Sibling
