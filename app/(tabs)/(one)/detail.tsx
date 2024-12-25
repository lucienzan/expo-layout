import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const detail = () => {
    const router = useRouter();
  return (
    <View>
      <Text>detail</Text>
      <Button onPress={() => router.push('/hello')} title='post detail'/>
    </View>
  )
}

export default detail