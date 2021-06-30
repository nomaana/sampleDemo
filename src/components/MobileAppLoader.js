import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextStyle,
} from 'react-native';
import Colors from '../constants/Colors';

const MobileAppLoader = ({isVisible, style}) => {
  return isVisible ? (
    <View style={{...styles.container, ...style}}>
      <View>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  viewStyle: {
    position: 'absolute',
    height: '10%',
    width: '20%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: Colors.primary,
    borderWidth: 2,
  },
});

export default MobileAppLoader;
