import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';

import { YOU_TUBE_KEY } from '../keys'

// function to fetch videos from YouTube:
YTSearch({key: YOU_TUBE_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
