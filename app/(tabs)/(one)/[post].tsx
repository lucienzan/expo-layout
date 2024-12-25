import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'


const PostDetail = () => {
  const {post} = useLocalSearchParams <{post: string}> ();
  return (
    <View>
      <Text>PostDetail: { post }</Text>
    </View>
  )
}

export default PostDetail