import { combineReducers } from 'redux';
import items from './items_reducer'

const reducers = combineReducers({
    items
})

export default reducers;