import { combineReducers } from 'redux'

const restaurants = (state=[], action) => {
    switch(action.type){
        default:
            return state
        case "SET_RESTAURANTS":
            return action.restaurants
    }
}

export default combineReducers({
    restaurants,
})