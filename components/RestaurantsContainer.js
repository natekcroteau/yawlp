import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, ScrollView, StyleSheet } from 'react-native'
import RestaurantCard from './RestaurantCards'


const apiKey = 'PzsrrE3TpGEyCwAJJnktw1NxdcRr3ho2acYbNt0H-b-8z4R9zbkbL7otHcWRSxlApO_3G5KtYyqk5umLse-Bza1rBWB43RGQ415PrWPtS0BHUHWQkv7NIE1jlORkYHYx'
const apiURL = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=Boulder'

export default function RestaurantsContainer() {

    const dispatch = useDispatch()
    const restaurants = useSelector(state => state.restaurants)

    useEffect(() => {
        fetch(apiURL, {
          headers: {"Authorization": `Bearer ${apiKey}`}
        })
          .then(response => response.json())
          .then(({businesses}) => dispatch({type: "SET_RESTAURANTS", restaurants: businesses}))
          
      }, [])

    const showRestaurants = () => restaurants.map(restaurant => {
        return <RestaurantCard key={restaurant.id} restaurant={restaurant} > {restaurant.name} </RestaurantCard>
    })

    return (
        <ScrollView styles={styles.container} >
            {showRestaurants()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
})