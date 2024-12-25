import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="hidden" options={{  href: null }} />
      <Tabs.Screen name="(one)"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />,
          headerShown: false,
          title: 'Home',
        }} />
      <Tabs.Screen name="two"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="settings" size={24} color={color} />,
          title: 'Setting',
        }} />
      <Tabs.Screen name="(draw)"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="pages" size={24} color={color} />,
          title: 'Drawer',
          headerShown: false,
        }} />
    </Tabs>
  )
}

export default _layout