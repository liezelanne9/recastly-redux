import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

var mapStateToProps = state => {
    console.log(state)
    return {
        videos: state.videoList
    }
}

//  handleVideoListEntryTitleClick(video) {
//     this.setState({currentVideo: video});
//   }

var mapDispatchToProps = dispatch => {
    return {
        handleVideoListEntryTitleClick: video => {
            dispatch(changeVideo(video))
        }
    }
}


var VideoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoList);

export default VideoListContainer;
