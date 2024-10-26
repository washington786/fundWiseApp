import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

export default function MainNavigationContainer({children}) {
  return (
    <NavigationContainer>
        {children}
    </NavigationContainer>
  )
}