import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

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

    /*
    In order for users to select individual videos, we will pass a callback from app to VideoList,
    and from VideoList to VideoListItem; whenever a VidListItem gets clicked, the callback runs and
    selectedVideo will change.
    */
    this.state = {
      videos: [],
      selectedVideo: null
    };

    /*
    function to fetch videos from YouTube; automatically called whenever our app initializes,
    since it's in the constructor() method.

    YTSearch({key: YOU_TUBE_KEY, term: 'surfboards'}, function(data) {
      this.setState({ videos: data });
    });

    First arg is a plain object with our API key, and the search term. Second argument is a
    callback. We can refactor the callback function to use ES6 syntax, giving key & property
    obj passed to setState the same name:

    YTSearch({key: YOU_TUBE_KEY, term: 'surfboards'}, (videos) => { this.setState({videos}); });

    ... and further change it once we add the selectedVideo property:
    YTSearch({key: YOU_TUBE_KEY, term: 'surfboards'},
      (videos) => { this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });

    Since we need this search function to be dynamic and to pass it down to our SearchBar
    component, we initialize it with a hard-coded argument & define it below:
    */
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: YOU_TUBE_KEY, term: term},
      (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        {/*
        When SearchBar calls onSearchTermChange, it will do so with a search term (a string) and it
        will get sent to videoSearch, and on to YTSearch:
        */}
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo}/>
        {/*
        VideoList needs a reference to videos -- we need to pass data from App (parent component)
        to it via props, which will "arrive" to the component via an argument (object called
        "props"). This is because VideoList is a FUNCTIONAL component; if we're passing props to a
        class-based component, props are available anywhere in them via "this.props".
        */}
        <VideoList
        /*
        We're defining a function that takes a video and updates App's state (selectedVideo); when
        VideoList component calls this function with a video, App's state will be updated.
        */
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
