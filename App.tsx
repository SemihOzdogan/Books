import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import Splash from './src/screens/Splash';
import store from './src/store/store';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerBackVisible: false, headerTitleAlign: "center", headerTitle: "BOOKS" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

