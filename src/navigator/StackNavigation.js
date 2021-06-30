import React from 'react';
import {Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
import HomeScreen from '../screens/HomeScreen';
import DrowerContent from '../navigator/DrowerContent';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductsDetailsScreen from '../screens/shop/ProductsDetailsScreen';
import CardScreen from '../screens/shop/CardScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductsScreen from '../screens/user/EditProductsScreen';
const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={'ProductOverView'} headerMode="none">
      <Stack.Screen
        name={'ProductOverView'}
        component={ProductsOverviewScreen}
      />
      <Stack.Screen
        name={'ProductsDetails'}
        component={ProductsDetailsScreen}
      />
      <Stack.Screen name={'OrdersScreen'} component={OrdersScreen} />
      <Stack.Screen name={'CardScreen'} component={CardScreen} />
      <Stack.Screen
        name={'UserProductsScreen'}
        component={UserProductsScreen}
      />
      <Stack.Screen
        name={'EditProductsScreen'}
        component={EditProductsScreen}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: Dimensions.get('screen').width / 1.4,
      }}
      drawerContent={(props) => <DrowerContent {...props} />}
      initialRouteName="Home">
      <Drawer.Screen name="app" component={AppStack} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
