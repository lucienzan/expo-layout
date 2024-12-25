import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{
          title: 'Index',
        }} />
      <Stack.Screen name="(tabs)"
        options={{
          headerShown: false,
        }} />
      <Stack.Screen name='model'
        options={{ presentation: 'modal' }} />
    </Stack>
  )
}

export default _layout