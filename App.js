import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import reducers from './reducers'
import { Provider, useDispatch } from 'react-redux'
import RestaurantsContainer from './components/RestaurantsContainer'



export default function App() {

  const store = createStore(reducers)

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RestaurantsContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
