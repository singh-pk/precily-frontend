import SplitsViewTypes from './splitsViewTypes';

const INITIAL_STATE = {
  height: 250,
  width: 350,
};

const splitsViewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SplitsViewTypes.SET_HEIGHT:
      return {
        ...state,
        height: action.payload,
      };
    case SplitsViewTypes.SET_WIDTH:
      return {
        ...state,
        width: action.payload,
      };
    default:
      return state;
  }
};

export default splitsViewReducer;
