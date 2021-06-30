import React, {Component} from 'react';
import {View, Text, Image, Button, StyleSheet, ScrollView} from 'react-native';
import HeaderView from '../../components/HeaderView';
import {connect} from 'react-redux';
import Colors from '../../constants/Colors';
import {checkToAddToCart} from '../../store/actions/cart/cartAction';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const mapStateToProps = (state) => {
  return {
    productsState: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkToAddToCart: (item) => dispatch(checkToAddToCart(item)),
  };
};

class ProductsDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'uk',
    };
  }
  render() {
    const {
      title,
      imageUrl,
      description,
      price,
    } = this.props.productsState.myProduct;
    return (
      <ScrollView>
        <HeaderView
          title={'Details Screen'}
          leftSource={<AntDesign name="arrowleft" color="#fff" size={30} />}
          onLeftHeaderClick={() => {
            this.props.navigation.goBack();
          }}
        />
        <Image style={styles.image} source={{uri: imageUrl}} />
        <View style={styles.action}>
          <Button
            color={Colors.primary}
            onPress={() =>
              this.props.checkToAddToCart(this.props.productsState.myProduct)
            }
            title="Add To Cart"
          />
        </View>
        <View>
          <DropDownPicker
            items={[
              {
                label: 'UK',
                value: 'uk',
              },
              {
                label: 'France',
                value: 'france',
              },
            ]}
            defaultValue={this.state.country}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) =>
              this.setState({
                country: item.value,
              })
            }
          />
        </View>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        {/* <Text style={styles.title}>{title}</Text> */}
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailView: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  action: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsDetailsScreen);
