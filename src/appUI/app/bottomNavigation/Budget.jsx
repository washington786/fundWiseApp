import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Scroller from '../../../components/Scroller'
import TopNavigation from '../../../components/app/TopNavigation'

const Budget = () => {
  return (
    <Scroller>
      <TopNavigation isHome={false}/>
    </Scroller>
  )
}

export default Budget

const styles = StyleSheet.create({})