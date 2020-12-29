import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../components/Onboarding';
import Welcome from '../pages/Welcome';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Onboarding" component={Onboarding} />
    <App.Screen name="Welcome" component={Welcome} />
  </App.Navigator>
);

export default AppRoutes;
