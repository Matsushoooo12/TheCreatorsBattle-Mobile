import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'
import { Image } from 'native-base'
import { Button } from 'react-native'
import DashboardScreen from '../screens/DashboardScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { Foundation } from '@expo/vector-icons'
import ProjectScreen from '../screens/ProjectScreen'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Dashboard'
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name='graph-bar' size={size} color={color} />
          ),
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title='Info'
              color='#000'
            />
          ),
          headerLeft: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title='Info'
              color='#000'
            />
          ),
        }}
      />
      <Tab.Screen
        name='Project'
        component={ProjectScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name='clipboard-notes' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <Image
              source={{ uri: 'https://wallpaperaccess.com/full/317501.jpg' }}
              borderRadius={100}
              size={size}
              alt='image'
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
