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
import Colors from '../../constants/Colors';
import Card from '../../UI/Card';

function CartItem({
  id,
  title,
  imageUrl,
  price,
  removeFromCart,
  quantity,
  increment,
  decrement,
  show,
}) {
  return (
    <Card style={styles.mainContain}>
      <View style={styles.conteiner}>
        <View style={styles.imageConteiner}>
          <View>
            <Image style={styles.image} source={{uri: imageUrl}} />
          </View>
          <View style={{marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              {show && (
                <Button
                  title=" - "
                  onPress={decrement}
                  color={Colors.primary}
                />
              )}
              <Text style={show ? styles.quantity : styles.quantity2}>
                {quantity}
              </Text>
              {show && (
                <Button
                  title=" + "
                  onPress={increment}
                  color={Colors.primary}
                />
              )}
            </View>
          </View>
        </View>
        <View style={show ? styles.details : styles.details2}>
          <Text style={styles.price}>$ {price.toFixed(2)}</Text>
          <Text style={styles.title}>{title}</Text>
          {show && (
            <Button
              title="Remove From Cart"
              onPress={removeFromCart}
              color={Colors.primary}
            />
          )}
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  mainContain: {
    // shadowColor: 'black',
    // shadowOpacity: 0.26,
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 8,
    // elevation: 5,
    // borderRadius: 10,
    // backgroundColor: 'white',
    overflow: 'hidden',
    margin: 10,
    // marginHorizontal: 20,
  },
  conteiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  details: {
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  details2: {
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    alignSelf: 'center',
    padding: 11,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  quantity2: {
    // alignSelf: 'center',
    padding: 8,
    // alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  imageConteiner: {
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
export default CartItem;
