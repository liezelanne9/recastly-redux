import Redux from 'redux';

var valueReducer = (state = '', action) => {
  //TODO: define a reducer for the currentVideo field of our state.

  switch(action.type){
    case 'CHANGE_VALUE':
      return action.value;

    default:
      return state;
    }
    
};

export default valueReducer;