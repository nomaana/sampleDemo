import React, {useState} from 'react';
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
import CartItem from './CartItem';

const OrderItem = ({amount, date, item}) => {
  console.log(item, 'test');
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Card style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${amount}</Text>
        <Text style={styles.totalDate}>{date}</Text>
      </View>
      <Button
        color={Colors.primary}
        title={showDetails ? 'Hide Details' : 'Show Details'}
        onPress={() => {
          setShowDetails((prevState) => !prevState);
        }}
      />

      {showDetails && (
        <View>
          {item.map((cartItem) => (
            <CartItem
              quantity={cartItem.quantity}
              title={cartItem.title}
              imageUrl={cartItem.imageUrl}
              price={cartItem.price}
            />
          ))}
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    // shadowColor: 'black',
    // shadowOpacity: 0.26,
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 8,
    // elevation: 5,
    // borderRadius: 10,
    // backgroundColor: 'white',
    margin: 20,
    padding: 10,
    // alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 1,
  },
  totalAmount: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    color: 'gray',
  },
});
export default OrderItem;
