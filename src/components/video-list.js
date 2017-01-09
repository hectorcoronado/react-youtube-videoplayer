import React from 'react';

/*
This component never needs to modify state and is in only charge of displaying data we search for
coming back from YouTube, so it can be a functional component.

The props argument is an object with (in this case) videos that is passed to this component via
its parent component, App. We pass it to VideoList as an argument because this is a FUNCTIONAL
component; if it were a class-based component, it would have access to props anywhere via
"this.props".
*/

const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
};

export default VideoList;
