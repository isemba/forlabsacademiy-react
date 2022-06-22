/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View, Text
} from 'react-native';


 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';


import FeedScreen from './src/pages/FeedScreen';
import NotificationScreen from './src/pages/NotificationScreen';

const Tab = createBottomTabNavigator();

 

function Notification() {
  return (<View><NotificationScreen /></View>);
}

function Sell() {
  return (<View><Text>sdsd</Text></View>);
}

function Chat() {
  return (<View><Text>sdsd</Text></View>);
}

function MyListing() {
  return (<View><Text>sdsd</Text></View>);
}

const App = () => {
  

  return ( 
      <NavigationContainer>

      <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}

      />

<Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}

      />
       
       <Tab.Screen
        name="Sell"
        component={Sell}
        options={{
          tabBarLabel: 'Sell',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}

      />

<Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}

      />


<Tab.Screen
        name="MyListing"
        component={MyListing}
        options={{
          tabBarLabel: 'MyListing',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}

      />

    </Tab.Navigator>

      </NavigationContainer>
       
  );
};

 

export default App;
