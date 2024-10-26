import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Scroller from '../../../components/Scroller'
import TopNavigation from '../../../components/app/TopNavigation'

const Bursary = () => {
  return (
    <Scroller>
      <TopNavigation isHome={false}/>
    </Scroller>
  )
}

export default Bursary

const styles = StyleSheet.create({})