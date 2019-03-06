

function changeVideo(video){
  //TODO:  Return some action object to change the currently playing video.

 return {
      type: 'changeVideo',
      currentVideo: video
 };

};

export default changeVideo;
