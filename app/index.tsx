import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

const app = () => {
  const router = useRouter();
  return (
    <View>
      <Text>This is for layout testing</Text>
      <Button onPress={() => router.push('/model')} title="Model" />
      <Button onPress={() => router.push('/register')} title="Go to register" />
      <Link href={'/(tabs)/(one)/one'} replace asChild>
        <Text>Login</Text>
      </Link>
    </View>
  )
}

export default app