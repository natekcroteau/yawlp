import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import RestaurantsContainer from '../components/RestaurantsContainer'

export default function home(props) {
    return (
        <SafeAreaView style={styles.container}>
            <RestaurantsContainer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
    },
  });