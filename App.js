import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HouseScreen from './screens/HouseScreen';
import SenateScreen from './screens/SenateScreen';
import RepDetailsScreen from './screens/RepDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="House" component={HouseScreen} />
        <Stack.Screen name="Senate" component={SenateScreen} />
        <Stack.Screen name="RepDetails" component={RepDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
