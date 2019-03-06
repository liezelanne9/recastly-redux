import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';



function handleVideoSearch(q) {
  //TODO:  Write an asynchronous action to handle a video search!
    return () => {
        searchYouTube({YOUTUBE_API_KEY, q}, () => {
          changeVideo();
          changeVideoList();
        })
    }
      // distpatch(changeVideo({data}))
      // dispatch(changeVideoList({data}))
      // searchHandler: this.setState q: e.target.value 
      // searchYouTube(this.options, ) // fix me 
    
// ({data}) => {
//         distpatch(changeVideo({data}))
//         dispatch(changeVideoList({data}))
//       }
};

export default handleVideoSearch;

// call handleVideoSearch