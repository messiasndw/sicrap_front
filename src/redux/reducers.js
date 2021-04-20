import {combineReducers} from 'redux'

import Products from './Products/reducer'
import Categories from './Categories/reducer'

const reducers = combineReducers({
    Products,
    Categories
});

export default reducers;