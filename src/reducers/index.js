import { combineReducers } from 'redux';
import postReducer from './postReducer'

export default combineReducers ({
  ndjkv: () => 'hi blah',
  posts: postReducer
});
