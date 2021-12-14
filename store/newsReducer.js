import * as ACTION_TYPES from './action_types'


const initialState = {
    user: null,
    news: [],
    modal: false,
    title:"",
    author:"",
    src:"",
    description:"",
    url:"",
    bookmark:[]
}

const newsReducer  = (state=initialState,action)=>{
    switch(action.type){
        case ACTION_TYPES.UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }
        case ACTION_TYPES.UPDATE_NEWS:
            return {
                ...state,
                news: action.payload
            }
        case ACTION_TYPES.TOGGLE_MODAL:
            return {
                ...state,
                modal: !state.modal

            }
        case ACTION_TYPES.SET_NEWS:
            return {
                ...state,
                author: action.payload.author,
                src: action.payload.src,
                description: action.payload.description,
                title: action.payload.title,
                url: action.payload.url
            }
        case ACTION_TYPES.SAVE_BOOKMARK:
            return {
                ...state,
                bookmark: [...state.bookmark,action.payload]
            }
        case ACTION_TYPES.GET_BOOKMARKS:
            return {
                ...state,
                bookmark: action.payload
            }
        default:
            return state
    }
}


export default newsReducer