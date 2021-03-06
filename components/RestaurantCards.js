import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'


export default function RestaurantCards({restaurant, index}) {

    const dispatch = useDispatch()
    

    const handleFavorite = () => {
        dispatch({ type: 'ADD_FAVORITE', favorite: restaurant})
    }


    return (
        <View style={styles.container}>
            <Image style={styles.cardImage} source={{uri: restaurant.image_url}} />
            <View style={styles.infContainer}>
                <View style={styles.rowView}>
                    <Text style={styles.name} >{index}. {restaurant.name}</Text>
                    <Text style={styles.price}>{restaurant.price}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.detailsColumn}>
                        <Text style={styles.rating}>Rating: {restaurant.rating}/5</Text>
                        <Text style={styles.address}>{restaurant.location.address1}</Text>
                        <View style={[styles.rowView, {justifyContent: 'flex-start'}]}>
                            {restaurant.categories.map((category, index) => {
                                return <Text key={index}>{category.title}, </Text>
                            })}
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleFavorite}>
                        <Ionicons name="heart" size={24} color="red" style={styles.detailsColumn} />
                    </TouchableOpacity>
                    
                </View>
                <TouchableOpacity style={styles.visitWebsiteButton}>
                    <Text style={styles.buttonText} onPress={ () => {Linking.openURL(restaurant.url)} }> Visit Website </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: 'hsl(0, 0%, 80%)',
        paddingVertical: 30,
    },
    cardImage: {
        width: '100%',
        height: 150,
        borderRadius: 5,
    },
    infContainer: {
        marginVertical: 15,
    },
    detailsContainer: {
        flexDirection: 'row'
    },
    detailsColumn: {
        
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 18,
        fontWeight:'600',

    },
    price: {
        color: 'green'
    },
    rating: {
        marginVertical: 5
    },
    address: {
        color: 'hsl(0, 0%, 50%)',
    },
    visitWebsiteButton: {
        backgroundColor: '#009fff',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        fontWeight: '700'
    }
})