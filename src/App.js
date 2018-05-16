import React from "react";
import {Root} from "native-base";
import {StackNavigator} from 'react-navigation';

import HomeScreen from "./screens/Home";

const AppNavigator = StackNavigator(
  {
    Home: {screen: HomeScreen},
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'none'
  }
);

export default () => (
  <Root>
    <AppNavigator/>
  </Root>
);
