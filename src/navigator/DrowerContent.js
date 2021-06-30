import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import IconHome from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
// import ImagePicker from 'react-native-image-picker';

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
  ToggleButton,
  TouchableOpacity,
} from 'react-native-paper';

const image = {
  uri:
    'https://i.pinimg.com/originals/2f/af/2d/2faf2df31caae9b1530e9b45af522c6d.jpg',
};

// const selectPhotoTapped = () => {
//   const options = {
//     quality: 1.0,
//     maxWidth: 500,
//     maxHeight: 500,
//     storageOptions: {
//       skipBackup: true,
//     },
//   };
//   ImagePicker.showImagePicker(options, (response) => {
//     if (response.didCancel) {
//     } else if (response.error) {
//     } else if (response.customButton) {
//     } else {
//       Snackbar.show({
//         text: 'Profile Selected Successfully',
//         duration: 2000,
//       });
//       // You can also display the image using data:
//       let source = {uri: 'data:image/jpeg;base64,' + response.data};
//       console.log(source.uri, 'image uri');
//       // this.props.setProfileImage(source.uri);
//     }
//   });
// };

function DrowerContent(props) {
  return (
    <View style={styles.conteiner}>
      <ImageBackground
        style={styles.imageview}
        resizeMethod={'resize'}
        source={image}>
        <View style={styles.child}>
          <DrawerContentScrollView {...props}>
            <View>
              <View style={styles.viewContainer}>
                <View style={styles.avatorContain}>
                  {/* <TouchableOpacity onPress={() => selectPhotoTapped()}> */}
                  <Avatar.Image
                    source={require('../asserts/shop.jpg')}
                    size={60}
                  />
                  {/* </TouchableOpacity> */}
                </View>
                <View style={styles.textcontainer}>
                  <Title style={styles.text}>Noman Akhtar</Title>
                  <Caption style={styles.caption}>Edit Profile</Caption>
                </View>
              </View>

              <View style={styles.lineview}></View>
              <Drawer.Section style={{marginTop: 10}}>
                <DrawerItem
                  icon={({color, size}) => (
                    <IconHome name="home-outline" color="#fff" size={size} />
                  )}
                  label="All Products"
                  labelStyle={styles.text}
                  onPress={() => props.navigation.navigate('ProductOverView')}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Entypo name="share-alternative" color="#fff" size={size} />
                  )}
                  label="Order"
                  labelStyle={styles.text}
                  onPress={() => props.navigation.navigate('OrdersScreen')}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Entypo name="menu" color="#fff" size={size} />
                  )}
                  label="Admin"
                  labelStyle={styles.text}
                  onPress={() =>
                    props.navigation.navigate('UserProductsScreen')
                  }
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <AntDesign name="hearto" color="#fff" size={size} />
                  )}
                  label="Save"
                  labelStyle={styles.text}
                  onPress={() => props.navigation.navigate('ProductOverView')}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <AntDesign name="shoppingcart" color="#fff" size={size} />
                  )}
                  label="Cart"
                  labelStyle={styles.text}
                  onPress={() => props.navigation.navigate('CardScreen')}
                />

                <View style={{flex: 1, marginTop: 330}}>
                  <View style={styles.lineview}></View>
                  <DrawerItem
                    icon={({color, size}) => (
                      <MaterialIcons name="logout" color="#fff" size={size} />
                    )}
                    label="Logout"
                    labelStyle={styles.text}
                    onPress={() => props.navigation.navigate('ProductOverView')}
                  />
                </View>
                <View style={styles.lineview}></View>

                <View style={styles.lineview}></View>
              </Drawer.Section>
            </View>
          </DrawerContentScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  imageview: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  avatorContain: {
    justifyContent: 'center',
  },
  lineview: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  textcontainer: {
    alignItems: 'center',
    marginRight: '30%',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
    color: 'white',
  },
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 15,
    marginBottom: 20,
  },
});
export default DrowerContent;
