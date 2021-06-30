import React, {Component} from 'react';
import {connect} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  titleValidator,
  imageValidator,
  priceValidator,
  descriptionValidator,
} from '../../lib/util';
import HeaderView from '../../components/HeaderView';
import {
  setTitle,
  setImage,
  setPrice,
  setDescription,
  updateProduct,
  setMyProducts,
  setReset,
  createProduct,
  addProdcutAction,
} from '../../store/actions/products/productsAction';

const mapStateToProps = (state) => ({
  productState: state.product,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setReset: () => dispatch(setReset()),
    setTitle: (title) => dispatch(setTitle(title)),
    setImage: (img) => dispatch(setImage(img)),
    setPrice: (price) => dispatch(setPrice(price)),
    setDescription: (img) => dispatch(setDescription(img)),
    updateProduct: (value) => dispatch(updateProduct(value)),
    createProduct: (value) => dispatch(createProduct(value)),
    setMyProducts: (value) => dispatch(setMyProducts(value)),
    addProdcutAction: () => dispatch(addProdcutAction()),
  };
};

export class EditProductsScreen extends Component {
  onSave = () => {
    const {flag} = this.props.productState;
    if (flag) {
      this.onSaveProdcut();
    } else {
      this.onUpateProduct();
    }
  };

  onSaveProdcut = () => {
    const {title, price, imageUrl, description} = this.props.productState;
    const add_Product = {
      id: new Date().toString(),
      ownerId: 'u1',
      title: title.value,
      imageUrl:
        'https://mlanodd9z4w9.i.optimole.com/ONKcEd8-DcskVZK5/w:600/h:600/q:90/rt:fill/g:ce/https://inveda.in/wp-content/uploads/2020/01/Glow-Booster-Kit-3.png',
      price: parseInt(price.value),
      description: description.value,
    };
    // this.props.addProdcutAction();
    this.props.createProduct(add_Product);
    console.log(add_Product, 'add products details');
    alert('Product Add SuccessFully');
    this.props.navigation.goBack();
  };
  onUpateProduct = () => {
    const {
      myProduct,
      title,
      price,
      imageUrl,
      description,
    } = this.props.productState;
    const update_Product = Object.assign(myProduct, {
      title: title,
      imageUrl: imageUrl,
      price: parseInt(price),
      description: description,
    });
    this.props.updateProduct(update_Product);

    alert('Edit Successfully');
    this.props.navigation.navigate('UserProductsScreen');
  };

  componentWillUnmount() {
    this.props.setReset();
  }

  render() {
    const {flag} = this.props.productState;
    return (
      <SafeAreaView>
        <ScrollView>
          <HeaderView
            title={flag ? 'Add Product' : 'Edit Product'}
            leftSource={<AntDesign name="arrowleft" color="#fff" size={30} />}
            rightSource={<AntDesign name="save" color="#fff" size={30} />}
            onRightHeaderClick={() => this.onSave()}
            onLeftHeaderClick={() => this.props.navigation.goBack()}
          />
          <View style={styles.form}>
            {/* Title */}
            <View style={styles.formControl}>
              <Text style={styles.label}>Title</Text>
              <TextInput
                placeholder={'Title'}
                value={this.props.productState.title}
                onChangeText={(text) =>
                  this.props.setTitle(titleValidator(text))
                }
                style={styles.input}
                keyboardType={'default'}
                autoCapitalize={'sentences'}
                autoCorrect
                returnKeyType={'next'}
              />
              <Text style={{color: 'red'}}>
                {this.props.productState.title.error}
              </Text>
            </View>

            {/* Image */}
            <View style={styles.formControl}>
              <Text style={styles.label}>Image URL</Text>
              <TextInput
                placeholder={'Image Url'}
                value={this.props.productState.imageUrl}
                onChangeText={(value) =>
                  this.props.setImage(imageValidator(value))
                }
                style={styles.input}
                keyboardType={'default'}
              />
              <Text style={{color: 'red'}}>
                {this.props.productState.imageUrl.error}
              </Text>
            </View>

            {/* Price  */}
            <View style={styles.formControl}>
              <Text style={styles.label}>Price</Text>
              <TextInput
                placeholder={'Price'}
                value={this.props.productState.price.toString()}
                onChangeText={(value) =>
                  this.props.setPrice(priceValidator(value))
                }
                style={styles.input}
                keyboardType={'decimal-pad'}
              />
              <Text style={{color: 'red'}}>
                {this.props.productState.price.error}
              </Text>
            </View>

            {/* Description */}
            <View style={styles.formControl}>
              <Text style={styles.label}>Description</Text>
              <TextInput
                placeholder={'Description'}
                value={this.props.productState.description}
                onChangeText={(value) =>
                  this.props.setDescription(descriptionValidator(value))
                }
                style={styles.input}
                keyboardType={'default'}
              />
              <Text style={{color: 'red'}}>
                {this.props.productState.description.error}
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  form: {margin: 20},
  formControl: {width: '100%'},
  label: {marginVertical: 8},
  input: {
    fontSize: 16,
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProductsScreen);
