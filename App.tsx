import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import {
  nrInit,
  nrLog,
  nrError,
  nrWarning,
  nrCritical,
  nrInteraction,
  nrAddUserId,
  nrRecordMetric,
} from './NewRelicRN.js';

const Stack = createStackNavigator();

const App = () => {

  nrInit('TodoAppScreen');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
