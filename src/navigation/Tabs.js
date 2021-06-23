import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';

import {BiHome} from 'react-icons/bi';

import ScreenFour from '../screens/ScreenFour';
import ScreenOne from '../screens/ScreenOne';
import ScreenThree from '../screens/ScreenThree';
import ScreenTwo from '../screens/ScreenTwo';
import Education from '../screens/Education';

import {View, Image, Text} from 'react-native';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 80,
          shadowOpacity: 0,
          paddingLeft: 20,
          paddingRight: 20,
        },
      }}>
      <Tab.Screen
        name="ScreenOne"
        component={ScreenOne}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#e1e1e1' : 'transparent',
                borderRadius: 5,
              }}>
              <Image
                source={require('../images/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#262626' : '#262626',
                  margin: 10,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ScreenTwo"
        component={ScreenTwo}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#e1e1e1' : 'transparent',
                borderRadius: 5,
              }}>
              <Image
                source={require('../images/hexagon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#262626' : '#262626',
                  margin: 10,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Education"
        component={Education}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#e1e1e1' : 'transparent',
                borderRadius: 5,
              }}>
              <Image
                source={require('../images/box.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#262626' : '#262626',
                  margin: 10,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ScreenThree"
        component={ScreenThree}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#e1e1e1' : 'transparent',
                borderRadius: 5,
              }}>
              <Image
                source={require('../images/heart.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#262626' : '#262626',
                  margin: 10,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ScreenFour"
        component={ScreenFour}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#e1e1e1' : 'transparent',
                borderRadius: 5,
              }}>
              <Image
                source={require('../images/settings.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#262626' : '#262626',
                  margin: 10,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
