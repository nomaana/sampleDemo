import React from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Colors from '../constants/Colors';

function HeaderView({
  title,
  onRightHeaderClick,
  rightSource,
  onLeftHeaderClick,
  leftSource,
}) {
  return (
    <SafeAreaView style={styles.headerInputView}>
      <TouchableOpacity
        style={styles.headerIconView}
        onPress={onLeftHeaderClick}>
        <Text>{leftSource}</Text>
      </TouchableOpacity>
      <View style={styles.headerTextView}>
        <Text style={styles.boldWhiteText}>{title}</Text>
      </View>
      <TouchableOpacity
        style={styles.headerIconView}
        onPress={onRightHeaderClick}>
        <Text>{rightSource}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerInputView: {
    width: '100%',
    backgroundColor: Colors.primary,
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 55,
    maxHeight: 55,
  },
  headerTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldWhiteText: {
    fontSize: 20,
    color: 'white',
  },
  headerIconView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HeaderView;
