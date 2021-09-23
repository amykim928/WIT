import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Feed from './Feed';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Feed'){
          iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
        }
        return <Icon name={iconName} size={24}/>;
      },
      tabBarActiveTintColor: "#60c0cc",
      tabBarInactiveTintColor: 'darkgray',
      tabBarStyle: 'flex'
    })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
}

export default Tabs;