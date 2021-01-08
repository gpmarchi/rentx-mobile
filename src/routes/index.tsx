import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../components/Onboarding';
import Welcome from '../pages/Welcome';
import CreateAccount from '../pages/CreateAccount';
import CreatePassword from '../pages/CreatePassword';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#ffffff' },
    }}
  >
    <App.Screen name="Onboarding" component={Onboarding} />
    <App.Screen name="Welcome" component={Welcome} />
    <App.Screen
      options={{ headerShown: true, headerBackTitleVisible: false, title: '' }}
      name="CreateAccount"
      component={CreateAccount}
    />
    <App.Screen
      options={{ headerShown: true, headerBackTitleVisible: false, title: '' }}
      name="CreatePassword"
      component={CreatePassword}
    />
  </App.Navigator>
);

export default AppRoutes;
