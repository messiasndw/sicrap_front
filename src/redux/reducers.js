import {combineReducers} from 'redux'

import Products from './Products/reducer'
import Categories from './Categories/reducer'
import User from './User/reducer'

const reducers = combineReducers({
    Products,
    Categories,
    User
});

export default reducers;