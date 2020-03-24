import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/reducers';
import * as firebase from './src/settings';
import {initializeApp} from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    initializeApp(firebase.firebaseConfig);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
