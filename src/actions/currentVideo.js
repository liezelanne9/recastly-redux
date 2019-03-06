

function changeVideo(video){
  //TODO:  Return some action object to change the currently playing video.

 return {
      type: 'CHANGE_VIDEO',
      video: video // this is where we put the examplevideodata
 };

};

export default changeVideo;
