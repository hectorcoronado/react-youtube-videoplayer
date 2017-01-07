import React from 'react';
import ReactDOM from 'react-dom';

import { youTubeKey } from 'keys'

const YOU_TUBE_KEY = youTubeKey;

const App = () => {
  return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));
