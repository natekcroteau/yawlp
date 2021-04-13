import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, ScrollView, StyleSheet, TextInput, Button, View } from 'react-native'
import RestaurantCard from './RestaurantCards'


const apiKey = 'PzsrrE3TpGEyCwAJJnktw1NxdcRr3ho2acYbNt0H-b-8z4R9zbkbL7otHcWRSxlApO_3G5KtYyqk5umLse-Bza1rBWB43RGQ415PrWPtS0BHUHWQkv7NIE1jlORkYHYx'
const apiURL = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=Boulder'

export default function RestaurantsContainer() {

    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites)
    const restaurants = useSelector(state => state.restaurants)
   
    

    useEffect(() => {
        fetch(apiURL, {
          headers: {"Authorization": `Bearer ${apiKey}`}
        })
          .then(response => response.json())
          .then(({businesses}) => dispatch({type: "SET_RESTAURANTS", restaurants: businesses}))
          
      }, [])

    const showRestaurants = () => restaurants.map((restaurant, i) => {
        return <RestaurantCard 
            key={restaurant.id} 
            restaurant={restaurant} 
            index={i + 1} />
    })



    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchText = (text) => { 
        setSearchTerm(text)
    }

    const handleSearch = () => {
        const updatedURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${searchTerm}`
        
        fetch(updatedURL, {
                headers: {"Authorization": `Bearer ${apiKey}`
            }
        })
            .then(response => response.json())
            .then(({businesses}) => dispatch({type: "SET_RESTAURANTS", restaurants: businesses}))
    }

    return (
        <>
            <View style={styles.searchView}>
                <TextInput 
                    placeholder="Enter Location" 
                    style={styles.searchField} 
                    onChangeText={handleSearchText} 
                    value={searchTerm} 
                />
                <Button 
                    style={styles.searchButton} 
                    onPress={handleSearch} 
                    title='Search'
                />
            </View>
            <ScrollView style={styles.container} >
                {showRestaurants()}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    searchView: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    searchField: {
        height: 40,
        borderColor: 'hsl(0, 0%, 80%)',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'hsl(0, 0%, 98%)',
        margin: 15,
        flex: 2,
        paddingHorizontal: 5,
    },
    searchButton: {
        flex: 1,
    }
})