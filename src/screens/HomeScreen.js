import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
const mapStatetoprops = (states) => {
  return {
    testState: states.test,
  };
};

const mapDispatchToprops = () => {
  return {};
};

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.testState.name, 'wwww');
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Text>Home screen{this.props.testState.name}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(mapStatetoprops, mapDispatchToprops)(HomeScreen);
