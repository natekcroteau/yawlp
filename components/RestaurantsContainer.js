import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native'

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
        return <Text>{restaurant.name}</Text>
    })

    return (
        <View styles={styles.container}>
            {showRestaurants()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    }
})