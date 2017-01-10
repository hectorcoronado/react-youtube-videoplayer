import React from 'react';

/*
In the parent component, VideoList, we defined a prop (video={video}), so we can make use of it
here via props.video.

const VideoListItem = (props) => {
  const video = props.video;
  const onVideoSelect = props.onVideoSelect;
  return <li>some video's JSX...</li>
};

onVideoSelect was defined in App component, passed to VideoList, and passed here.

But we can clean up the code with ES6 as below -- this pulls the property video from
our props object, and declares a variable with the same name, exactly as the more verbose version
above.
*/

const VideoListItem = ({video, onVideoSelect}) => {
  /*
  console.log(video) would be useful to see what data is available to us in each video (e.g. title,
  snippet, thumbnail, etc...), which we use to declare imageUrl
  */
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    /*
    On click event, we finally call onVideoSelect, passing in the specific video for the specific
    list item we're dealing with, and updating App's state:
    */
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
