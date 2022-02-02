/* eslint-disable prettier/prettier */
//import 'react-native-gesture-handler';

import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import { RestaurantDetailsScreen } from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      {/* this the first one always will render first */}
      <RestaurantStack.Screen
        name='Restaurants'
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name='RestaurantDetail'
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
