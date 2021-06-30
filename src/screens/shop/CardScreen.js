import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderView from '../../components/HeaderView';
import CartItem from '../../components/shop/CartItem';
import TotalItem from '../../components/shop/TotalItem';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  removeItemFromCart,
  getCartTotal,
  checkToAddToCart,
  decrementToCart,
} from '../../store/actions/cart/cartAction';

import {addOrder} from '../../store/actions/orders/orderAction';

import {SafeAreaView, View, Text, FlatList} from 'react-native';
const mapStateToProps = (state) => ({
  cartState: state.cart,
  orderState: state.order,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
    getCartTotal: () => dispatch(getCartTotal()),
    checkToAddToCart: (item) => dispatch(checkToAddToCart(item)),
    decrementToCart: (item) => dispatch(decrementToCart(item)),
    // ORDER
    addOrder: (item, totalAmount) => dispatch(addOrder(item, totalAmount)),
  };
};

export class CardScreen extends Component {
  constructor(props) {
    super(props);
    this.props.getCartTotal();
  }
  onClickAddOrder = (item, totalAmount) => {
    console.log('function is called');
    // const value = Object.assign({},...item);
    // console.log(test, 'object assing');
    this.props.addOrder(item, totalAmount.toFixed(2));
    alert('Order Place SuccessFully ');
  };
  render() {
    const {orders} = this.props.orderState;
    // console.log(orders, 'total order card');
    const {totalAmount, item} = this.props.cartState;
    return (
      <SafeAreaView style={{flex: 1}}>
        <HeaderView
          title={'Cart Screen'}
          leftSource={<AntDesign name="arrowleft" color="#fff" size={30} />}
          onLeftHeaderClick={() => this.props.navigation.goBack()}
        />
        <TotalItem
          addOrder={() => this.onClickAddOrder(item, totalAmount)}
          totalValue={Math.round(totalAmount.toFixed(2) * 100) / 100}
          price={Math.round(totalAmount.toFixed(2) * 100) / 100}
        />

        {this.props.cartState.item.length ? (
          <FlatList
            data={this.props.cartState.item}
            renderItem={({item}) => (
              <CartItem
                increment={() => this.props.checkToAddToCart(item)}
                decrement={() => this.props.decrementToCart(item)}
                quantity={item.quantity}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.fixPrice}
                removeFromCart={() => this.props.removeItemFromCart(item)}
                show
              />
            )}
          />
        ) : (
          <View>
            <Text>NO ITEM IN THE LIST</Text>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardScreen);
