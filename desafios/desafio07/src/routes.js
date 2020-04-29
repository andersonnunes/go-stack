import React from 'react';
import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

import Header from './components/Header';

import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      // initialRouteName: 'Cart',
      defaultNavigationOptions: (navigation) => ({
        header: () => <Header {...navigation} />,

        cardStyle: {
          backgroundColor: colors.dark,
        },
      }),
      headerMode: 'float',
    },
  ),
);

export default Routes;
