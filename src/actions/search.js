import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


function handleVideoSearch(q) {
  var options = {
      key: YOUTUBE_API_KEY,
      query: q
    };
  //TODO:  Write an asynchronous action to handle a video search!
    return {
      type: 'HANDLE_VIDEO_SEARCH',
      q: searchYouTube(this.options, q) // fix me
    }

};

export default handleVideoSearch;
