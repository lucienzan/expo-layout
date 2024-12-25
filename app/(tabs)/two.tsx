import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Two = () => {
  const router = useRouter();
  return (
    <View>
      <Text>two</Text>
      <Button onPress={() => router.push('/(tabs)/hidden')} title='hidden' />
      <Button onPress={()=> router.push('/(user)/user') } title='user' />
    </View>
  )
}

export default Two