import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HouseScreen from './screens/HouseScreen';
import SenateScreen from './screens/SenateScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="House" component={HouseScreen} />
        <Stack.Screen name="Senate" component={SenateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
