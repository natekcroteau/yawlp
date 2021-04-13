import { combineReducers } from 'redux'

const restaurants = (state=[], action) => {
    switch(action.type){
        default:
            return state
        case "SET_RESTAURANTS":
            return action.restaurants
    }
}

const favorites = (state=[], action) => {
    switch(action.type){
        case "ADD_FAVORITE":
            if (!state.find(restaurant => restaurant.id === action.favorite.id)){
                return [...state, action.favorite]
            }
        default:
            return state
    }
}

export default combineReducers({
    restaurants,
    favorites
})