import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Scroller from '../../../components/Scroller'
import TopNavigation from '../../../components/app/TopNavigation'

const Freelance = () => {
  return (
    <Scroller>
      <TopNavigation isHome={false}/>
    </Scroller>
  )
}

export default Freelance

const styles = StyleSheet.create({})