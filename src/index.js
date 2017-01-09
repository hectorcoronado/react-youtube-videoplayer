import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

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
        {/*
        VideoList needs a reference to videos -- we need to pass data from App (parent component)
        to it via props, which will "arrive" to the component via an argument (object called
        "props"). This is because VideoList is a FUNCTIONAL component; if we're passing props to a
        class-based component, props are available anywhere in them via "this.props". 
        */}
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
