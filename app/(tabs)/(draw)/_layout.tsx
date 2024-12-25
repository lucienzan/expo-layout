import React from 'react'
import { Drawer} from 'expo-router/drawer'

const _layout = () => {
  return (
    <Drawer>
      <Drawer.Screen name="page1" options={{ headerTitle: "News", drawerLabel: "News" }} />
      <Drawer.Screen name="page2" options={{ headerTitle: "Blogs", drawerLabel: "Blogs" }} />
    </Drawer>
  )
}

export default _layout