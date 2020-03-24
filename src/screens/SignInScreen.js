/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as actions from '../actions/ActionManger';
import GradientButton from '../elements/GradientButton';
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth,
} from '../styles/CommonStyles';
import {appSingleNavigation} from '../styles/navigatorStyle';
import {connect} from 'react-redux';
import Spinner from '../elements/Spinner';

class SignInScreen extends Component {
  static navigatorStyle = appSingleNavigation;

  onEmailChanged(text) {
    this.props.EmailChanged(text);
  }
  onPasswordChanged(text) {
    this.props.PasswordChanged(text);
  }
  startSignInProcess() {
    let email = this.props.email;
    let password = this.props.password;

    this.props.LoginUser(email, password);
  }

  constructor(props) {
    super(props);
  }
  renderSpinner() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <GradientButton
          onPressButton={this.startSignInProcess.bind(this)}
          setting={shadowOpt}
          btnText="GO TO DASHBOARD"
        />
      );
    }
  }
  render() {
    console.log(this.props);
    return (
      <View style={CommonStyles.normalSinglePage}>
        <View style={styles.titleBox}>
          <Text style={[CommonStyles.extraLargeText, CommonStyles.blackColor]}>
            SIGN IN
          </Text>
        </View>
        <View style={styles.formBox}>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/myaid/avatar.png')}
              style={{
                position: 'absolute',
                bottom: 12,
                left: 20,
                width: 19,
                height: 22,
              }}
            />
            <TextInput
              placeholder="Email"
              style={CommonStyles.textInput}
              underlineColorAndroid="transparent"
              onChangeText={this.onEmailChanged.bind(this)}
              value={this.props.email}
            />
          </View>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/myaid/padlock.png')}
              style={{
                position: 'absolute',
                bottom: 12,
                left: 20,
                width: 17,
                height: 22,
              }}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={CommonStyles.textInput}
              underlineColorAndroid="transparent"
              onChangeText={this.onPasswordChanged.bind(this)}
              value={this.props.password}
            />
          </View>
          <View style={styles.subFormBox}>
            <TouchableOpacity
              onPress={() => this._handleClickFortgotPass()}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'rgb(150,150,150)',
                }}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[CommonStyles.buttonBox, {marginBottom: spaceHeight * 0.17}]}>
          {this.renderSpinner()}
          <Text
            style={{
              color: 'red',
            }}>
            {this.props.error}
          </Text>
        </View>
      </View>
    );
  }

  _goToSignUpScreen() {}

  _handleClickFortgotPass() {}
}
const mapStateToProps = state => {
  return state.auth;
};
export default connect(
  mapStateToProps,
  actions,
)(SignInScreen);

const ELEMENT_HEIGHT = 377;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
  titleBox: {
    height: 52,
    marginTop: spaceHeight * 0.32,
    marginBottom: spaceHeight * 0.18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formBox: {
    height: 190,
    alignItems: 'center',
    marginBottom: spaceHeight * 0.05,
  },
  subFormBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceWidth - 85,
    height: 45,
    marginBottom: 25,
  },
  noteBox: {
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});
