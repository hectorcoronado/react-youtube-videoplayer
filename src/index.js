import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';

import { YOU_TUBE_KEY } from '../keys'

/* functional App component, which got refactored to a class component below

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
*/

class App extends Component {
  // constructor() gets called automatically any time a new instance of any JS class gets created
  constructor(props) {
    // calling super() calls a method defined in parent class (Component)
    super(props);

    this.state = { videos: [] };

    /*
    function to fetch videos from YouTube; automatically called whenever our app initializes,
    since it's in the constructor() method.

    YTSearch({key: YOU_TUBE_KEY, term: 'surfboards'}, function(data) {
      this.setState({ videos: data });
    });

    We can refactor the above function to use ES6 syntax, giving key & property obj passed to
    setState the same name:
    */
    YTSearch(
      {key: YOU_TUBE_KEY, term: 'surfboards'}, // arg w/key & search term
      (videos) => { this.setState({ videos }); } // arg w/callback function
    );

  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
