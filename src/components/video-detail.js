import React from 'react';

/*
Like in VideoListItem, we can destructure the props object by passing in {video} as an argument
to this functional component, thereby automatically declaring a variable with the same name that
gives us access to props.video.
*/

const VideoDetail = ({video}) => {
  // Check if we haven't yet fetched (or finished fetching) video data from YouTube, show this div:
  if(!video) {
    return <div>Loading...</div>
  }

  // Otherwise, show this:

  // everything after video. is something that is coming back to us from the YouTube obj:
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
      {/*
      ...same as above, with the videoId variable, everything after video. is part of the returned
      object from YouTube:
      */}
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
