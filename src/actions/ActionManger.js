import * as constants from './constants';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
export const EmailChanged = text => {
  return {
    type: constants.EMAIL_CHANGED,
    payload: text,
  };
};

export const PasswordChanged = text => {
  return {
    type: constants.PASSWORD_CHANGED,
    payload: text,
  };
};

export const LoginUser = (email, password) => {
  return dispatch => {
    startLoadingSpinner(dispatch);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(error => {
            loginUserFailed(dispatch, error);
          });
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({type: constants.LOGIN_USER, payload: user});
  Actions.report();
};
const loginUserFailed = (dispatch, error) => {
  dispatch({type: constants.LOGIN_USER_FAIL, payload: error});
};
const startLoadingSpinner = dispatch => {
  dispatch({type: constants.LOGIN_USER_LOADING, payload: true});
};
