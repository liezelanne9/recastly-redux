import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';



function handleSearchChange(q) {
  console.log(q)
  
  //TODO:  Write an asynchronous action to handle a video search!
    return (dispatch) => {
      var storage;
        searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, (items) => {
        
          storage = (items)
          dispatch(changeVideo(storage[0]));
          dispatch(changeVideoList(storage));
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

export default handleSearchChange