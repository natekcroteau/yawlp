import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import RestaurantCard from '../components/RestaurantCards'




export default function FavoritesScreen() {

    const favorites = useSelector(state => state.favorites)

    const displayFavorites = () => {
        return favorites.map((favorite, i) => {
            return <RestaurantCard 
                restaurant={favorite} 
                key={favorite.id}
                index={i + 1}
            />
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Favorites Screen</Text>
            <ScrollView style={styles.restaurantContainer}>
                {displayFavorites()}
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
    },
    restaurantContainer: {
        flex: 1,
        margin: 15,
    },
  });