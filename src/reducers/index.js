import { combineReducers } from 'redux';
import postReducer from './postReducer'
import UserReducer from './UserReducer';

export default combineReducers ({
  ndjkv: () => 'hi blah',
  posts: postReducer,
  users: UserReducer,
});
