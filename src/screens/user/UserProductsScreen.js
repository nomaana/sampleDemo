import React, {Component} from 'react';
import {FlatList, Text, View, SafeAreaView, Button, Alert} from 'react-native';
import HeaderView from '../../components/HeaderView';
import Entypo from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';
import {
  deleteProduct,
  getUserDetailsById,
  setFlag,
} from '../../store/actions/products/productsAction';
const mapStateToProps = (state) => ({
  productState: state.product,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setFlag: () => dispatch(setFlag()),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    getUserDetailsById: (id) => dispatch(getUserDetailsById(id)),
  };
};

export class UserProductsScreen extends Component {
  onAddProduct = () => {
    this.props.setFlag();
    this.props.navigation.navigate('EditProductsScreen');
  };

  onEditProduct = (id) => {
    this.props.getUserDetailsById(id);
    this.props.navigation.navigate('EditProductsScreen');
  };

  deleteHandler = (id) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      {text: 'No', onPress: () => console.log('OK Pressed')},
      {
        text: 'Yes',
        onPress: () => {
          this.props.deleteProduct(id);
        },
        style: 'cancel',
      },
    ]);
  };

  render() {
    const {userProducts} = this.props.productState;
    // console.log(userProducts, 'user products List');
    return (
      <SafeAreaView style={{flex: 1}}>
        <HeaderView
          title={'Your Product'}
          leftSource={<Entypo name="menu" color="#fff" size={30} />}
          rightSource={<Entypo name="add-to-list" color="#fff" size={30} />}
          onRightHeaderClick={() => this.onAddProduct()}
          onLeftHeaderClick={() => this.props.navigation.openDrawer()}
        />
        <FlatList
          pagingEnabled={true}
          data={userProducts}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <ProductItem
              image={item.imageUrl}
              title={item.title}
              price={item.price}
              onSelect={() => {}}>
              <Button
                color={Colors.primary}
                title="Edit"
                onPress={() => this.onEditProduct(item.id)}
              />
              <Button
                color={Colors.primary}
                title="Delete"
                onPress={() => this.deleteHandler(item.id)}
              />
            </ProductItem>
          )}
        />
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProductsScreen);
