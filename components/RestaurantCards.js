import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


export default function RestaurantCards({restaurant}) {
    return (
        <View style={styles.container}>
            <Image style={styles.cardImage} source={{uri: restaurant.image_url}} />
            <Text>{restaurant.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: 'hsl(0, 0%, 50%)',
        paddingVertical: 30,
    },
    cardImage: {
        width: '100%',
        height: 150,
        margin: 15,
    }
})