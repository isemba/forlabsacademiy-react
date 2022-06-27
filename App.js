import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NotificationScreen from './src/pages/NotificationScreen';
import ChatScreen from './src/pages/ChatScreen';
import {createStackNavigator} from '@react-navigation/stack';
import MyListingScreen from './src/pages/MyListingScreen';
import DetailScreenCar from './src/pages/DetailScreenCar';
import DetailScreenElectronic from './src/pages/DetailScreenElektronic';
import FeedScreen from './src/pages/FeedScreen';
const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Home"
        component={FeedScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailCar"
        component={DetailScreenCar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailElectronic"
        component={DetailScreenElectronic}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Anasayfa',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Bildirimler"
          component={NotificationScreen}
          options={{
            tabBarLabel: 'Notification',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="bell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Sohbet"
          component={ChatScreen}
          options={{
            tabBarLabel: 'Chat',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="chat-processing" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="İlanlarım"
          component={MyListingScreen}
          options={{
            tabBarLabel: 'Advert',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="dots-grid" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingLeft: 15,
    paddingRight: 20,
    marginTop: 5,
  },
  // logo: {
  //   width: 35,
  //   height: 35,
  // },
  logo: {
    borderRadius: 100,
    fontSize: 15,
    width: 30,
    height: 30,
    paddingLeft: 8,
    paddingTop: 4,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#ff69b4',
  },
});
