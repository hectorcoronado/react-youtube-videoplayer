import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

import { youTubeKey } from '../keys'

const YOU_TUBE_KEY = youTubeKey;

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
