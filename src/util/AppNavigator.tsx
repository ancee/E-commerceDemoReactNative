import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import SplashScreen from '../view/screens/splash/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../view/screens/home/HomeScreen';
import {DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailScreen from '../view/screens/detail/DetailScreen';
import {RootStackParamList} from './RootStackParamList';

const Tab = createBottomTabNavigator();

const SPLASH_SCREEN_NAME = 'SPLASH_SCREEN_NAME';
const DETAIL_SCREEN_NAME = 'DETAIL_SCREEN_NAME';
const HOME_SCREEN_NAME = 'HOME_SCREEN_NAME';
const HOME_TAB_SCREEN_NAME = 'HOME_TAB_SCREEN_NAME';

export {DETAIL_SCREEN_NAME, HOME_SCREEN_NAME, HOME_TAB_SCREEN_NAME};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HOME_SCREEN_NAME}
        component={HomeScreen}
        options={{title: 'Home', headerShown: false}}
      />
      <Stack.Screen
        name={DETAIL_SCREEN_NAME}
        component={DetailScreen}
        options={{title: 'Detail', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStackTab"
      screenOptions={({route}) => ({
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerShown: false,
        headerTitleStyle: {fontWeight: 'bold'},
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, color, size}) => {
          let iconName = focused ? 'home-circle' : 'home-circle-outline';
          if (route.name === 'HomeStack') {
            iconName = focused ? 'home-circle' : 'home-circle-outline';
          } else if (route.name === 'FavoriteStackTab') {
            iconName = focused
              ? 'account-settings'
              : 'account-settings-outline';
          } else if (route.name === 'SettingsStack') {
            iconName = focused
              ? 'account-settings'
              : 'account-settings-outline';
          } else if (route.name === 'MessageStackTab') {
            iconName = focused
              ? 'account-settings'
              : 'account-settings-outline';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}>
      <Tab.Screen
        name="HomeStackTab"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="FavoriteStackTab"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="MessageStackTab"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          title: 'Home',
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={SPLASH_SCREEN_NAME}
          component={SplashScreen}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen
          name={HOME_TAB_SCREEN_NAME}
          component={TabNav}
          options={{title: 'Home', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'white',
  },
};
export default AppNavigator;
