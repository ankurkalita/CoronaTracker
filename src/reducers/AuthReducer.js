import * as constants from '../actions/constants';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};
export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case constants.EMAIL_CHANGED:
      return {...state, email: action.payload};
    case constants.PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case constants.LOGIN_USER:
      return {...state, user: action.payload, error: '', loading: false};
    case constants.LOGIN_USER_FAIL:
      return {...state, error: 'Failed to login', loading: false};
    case constants.LOGIN_USER_LOADING:
      return {...state, loading: action.payload, error: ''};
    default:
      return state;
  }
};
