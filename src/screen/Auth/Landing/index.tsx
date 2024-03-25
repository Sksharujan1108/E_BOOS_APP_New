import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImagePic } from '@/utils/Image'

const Landing = () => {
  return (
    <View>
      <Image src = {ImagePic.imageLanding} />
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({})