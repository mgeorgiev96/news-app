import newsReducer from "./newsReducer";
import {combineReducers} from 'redux'


const mainReducer = combineReducers({
    news: newsReducer
})

export default mainReducer;

