import React, {Component} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import HeaderView from '../../components/HeaderView';
import OrderItem from '../../components/shop/OrderItem';
import order from '../../store/reducers/orders/orderReducer';
import AntDesign from 'react-native-vector-icons/AntDesign';

const mapStateToProps = (state) => {
  return {
    orderState: state.order,
  };
};

const mapDisPatchToProps = (dispatch) => {};
class OrdersScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {orders} = this.props.orderState;
    // console.log(orders.amount.totalAmount, 'total order amount');
    console.log(orders, 'total order update');
    return (
      <SafeAreaView>
        <HeaderView
          title={'Order Screen'}
          leftSource={<AntDesign name="arrowleft" color="#fff" size={30} />}
          onLeftHeaderClick={() => this.props.navigation.goBack()}
        />
        {orders.length ? (
          <View>
            <FlatList
              data={orders}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => (
                <OrderItem
                  amount={item.totalAmount}
                  date={item.readableDate}
                  item={item.items}
                />
              )}
            />
          </View>
        ) : (
          <View>
            <Text> No Order yet</Text>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(OrdersScreen);
