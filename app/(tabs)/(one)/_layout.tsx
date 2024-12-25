import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="[post]"
        options={{
          title: 'Post Detail',
          headerTitleAlign: 'left',
        }} />
    </Stack>
  )
}

export default _layout