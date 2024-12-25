import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

const One = () => {
  const router = useRouter();
  return (
    <View>
      <Text>One</Text>
      <Button onPress={()=>router.push('/(tabs)/(one)/detail')} title='Detail'/>
      <Link asChild replace href={'/'}>
        <Text>Link</Text>
      </Link>
    </View>
  )
}

export default One