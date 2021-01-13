import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from './src/screens/SettingScreen';
import UserScreen from './src/screens/UserScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator screenOptions= {({ route }) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if(route.name === 'Home') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          }else if(route.name === 'settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }else if(route.name === 'userscreen') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color}></Ionicons>
        }
      })}
      
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      
      >
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="userscreen" component={UserScreen} options={{tabBarBadge: 1}}></Tab.Screen>
        <Tab.Screen name="settings" component={SettingsScreen} options={{ tabBarBadge: 3}} ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


