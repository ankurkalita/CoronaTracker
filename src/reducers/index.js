import {combineReducers} from 'redux';
import AuthManager from './AuthReducer';
export default combineReducers({
  auth: AuthManager,
});
