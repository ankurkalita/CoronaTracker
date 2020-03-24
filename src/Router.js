import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import SignInScreen from './screens/SignInScreen';
import ReportScreen from './screens/ReportScreen';

class RouterConfig extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="loginScenes" hideNavBar>
            <Scene key="login" component={SignInScreen} />
          </Scene>
          <Scene key="mainScenes">
            <Scene key="report" component={ReportScreen} />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterConfig;
