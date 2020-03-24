import React, {Component} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

class Spinner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator size={this.props.size} />
      </View>
    );
  }
}

export default Spinner;

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
