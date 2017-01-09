import React from 'react';

import VideoListItem from './video-list-item';

/*
This component never needs to modify state and is in only charge of displaying data we search for
coming back from YouTube, so it can be a functional component.

The props argument is an object with (in this case) videos that is passed to this component via
its parent component, App. We pass it to VideoList as an argument because this is a FUNCTIONAL
component; if it were a class-based component, it would have access to props anywhere via
"this.props".
*/

const VideoList = (props) => {
  /*
  for each item in props.videos, we call a function that returns JSX (video.etag is provided by
  the returned object from YouTube):
  */
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
