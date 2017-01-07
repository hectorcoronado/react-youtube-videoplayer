import React from 'react';
import ReactDOM from 'react-dom';

// create new component to produce html
const App = () => {
  return <div>Hi!</div>;
}

// take this component's generated html and display it (in DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
