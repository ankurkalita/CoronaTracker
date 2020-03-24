/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import GradientButton from '../elements/GradientButton';
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth,
} from '../styles/CommonStyles';

export default class ForgotPasswordScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    orientation: 'portrait',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalSinglePage}>
        <View style={styles.titleBox}>
          <Text
            style={[
              CommonStyles.headerText,
              CommonStyles.blackColor,
              CommonStyles.semiBold,
            ]}>
            FORGOT PASSWORD
          </Text>
          <Text
            style={[
              CommonStyles.normalText,
              CommonStyles.greyColor,
              CommonStyles.regularBold,
              {width: deviceWidth - 90, marginTop: 15, textAlign: 'center'},
            ]}>
            We just need your registered Email to send you password reset
            intruction
          </Text>
        </View>
        <View style={styles.formBox}>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/myaid/envelope.png')}
              style={{
                position: 'absolute',
                bottom: 12,
                left: 20,
                width: 22,
                height: 17,
              }}
            />
            <TextInput
              placeholder="Email"
              style={CommonStyles.textInput}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <View style={CommonStyles.buttonBox}>
          <GradientButton
            onPressButton={this._handleResetPassword.bind(this)}
            setting={shadowOpt}
            btnText="RESET PASSWORD"
          />
        </View>
        <View style={styles.noteBox}>
          <Text
            style={[
              CommonStyles.regularBold,
              CommonStyles.normalText,
              CommonStyles.lightgreyColor,
            ]}>
            Don't have an account?
          </Text>
          <TouchableWithoutFeedback onPress={() => this._handleClickSignUp()}>
            <View style={{marginLeft: 5}}>
              <Text
                style={[
                  CommonStyles.regularBold,
                  CommonStyles.normalText,
                  CommonStyles.softBlueColor,
                ]}>
                SIGN UP
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }

  _handleResetPassword() {}

  _handleClickSignUp() {}
}

const styles = StyleSheet.create({
  titleBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 48,
  },
  formBox: {
    alignItems: 'center',
  },
  noteBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 15,
  },
});
