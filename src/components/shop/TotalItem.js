import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Touchable,
} from 'react-native';
import Card from '../../UI/Card';

import Colors from '../../constants/Colors';

function TotalItem({price, totalValue, addOrder}) {
  return (
    <Card style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>$ {price}</Text>
        </Text>
        <Button
          onPress={addOrder}
          disabled={totalValue === 0 ? true : false}
          color={Colors.primary}
          title="Order Now"
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  screen: {
    // shadowColor: 'black',
    // shadowOpacity: 0.26,
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 8,
    // elevation: 5,
    // borderRadius: 10,
    // backgroundColor: 'white',
    margin: 10,
    padding: 10,
  },
  summaryText: {
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});
export default TotalItem;
