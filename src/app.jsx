import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({
  render: function() {
    return (
      <p>Hello, Universe</p>
    )
  }
});

ReactDOM.render(
  <Hello/>,
  document.getElementById('app')
);
