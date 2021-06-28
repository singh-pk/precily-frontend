import { combineReducers } from 'redux';

import splitsViewReducer from './splitsView/splitsViewReducer';
import containerDataReducer from './containerData/containerDataReducer';

export default combineReducers({
  splitsView: splitsViewReducer,
  containerData: containerDataReducer,
});
