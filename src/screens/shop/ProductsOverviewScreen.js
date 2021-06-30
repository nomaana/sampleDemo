import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';
import HeaderView from '../../components/HeaderView';
import ProductItem from '../../components/shop/ProductItem';
import {getDetailsById} from '../../store/actions/products/productsAction';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../constants/Colors';
import MobileAppLoader from '../../components/MobileAppLoader';

import {
  getProducts,
  setLoader,
} from '../../store/actions/products/productsAction';

import {
  setAddToCart,
  checkToAddToCart,
} from '../../store/actions/cart/cartAction';

const mapStateToProps = (state) => {
  return {
    productsState: state.product,
    cartState: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailsById: (id) => dispatch(getDetailsById(id)),
    setAddToCart: (item) => dispatch(setAddToCart(item)),
    checkToAddToCart: (item) => dispatch(checkToAddToCart(item)),
    getProducts: () => dispatch(getProducts()),
    setLoader: () => dispatch(setLoader()),
  };
};

export class ProductsOverViewScreen extends Component {
  constructor(props) {
    super(props);
    this.props.getProducts();
  }

  selectItemHandler = (id) => {
    this.props.getDetailsById(id);
    this.props.navigation.navigate('ProductsDetails');
  };

  // test = () => {
  //   Alert.alert('welome');

  // };
  render() {
    const {availableProducts, error} = this.props.productsState;
    return (
      <SafeAreaView style={styles.container}>
        <MobileAppLoader isVisible={this.props.productsState.isLoading} />
        <HeaderView
          title={'All Products'}
          rightSource={<AntDesign name="shoppingcart" color="#fff" size={30} />}
          leftSource={<Entypo name="menu" color="#fff" size={30} />}
          onLeftHeaderClick={() => this.props.navigation.openDrawer()}
          onRightHeaderClick={() =>
            this.props.navigation.navigate('CardScreen')
          }
        />

        {error ? (
          availableProducts ? (
            <FlatList
              data={availableProducts}
              renderItem={({item}) => (
                <ProductItem
                  image={item.imageUrl}
                  title={item.title}
                  price={item.price}
                  onSelect={() => this.selectItemHandler(item.id)}>
                  <Button
                    color={Colors.primary}
                    title="View Details"
                    onPress={() => this.selectItemHandler(item.id)}
                  />
                  <Button
                    color={Colors.primary}
                    title="To Cart"
                    onPress={() => this.props.checkToAddToCart(item)}
                  />
                </ProductItem>
              )}
            />
          ) : (
            <View>
              <Text>No products found. Maybe Start adding one!!</Text>
            </View>
          )
        ) : (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>An error occurred !!</Text>
            <Button
              color={Colors.primary}
              title="Try again"
              onPress={() => this.props.getProducts()}
            />
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsOverViewScreen);
