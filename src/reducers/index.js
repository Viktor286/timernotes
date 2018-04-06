import {combineReducers} from 'redux';
import TimerNotesReducer from './timernote-template';

const combinedReducers = combineReducers({
  timerNotesTotal: TimerNotesReducer,
});

export default combinedReducers;