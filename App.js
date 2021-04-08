import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'
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
    width: '100%',
    backgroundColor: '#fff',
  },
});
