import * as ACTION_TYPES from './action_types'


export const updateUser = user =>{
    return {
        type:ACTION_TYPES.UPDATE_USER,
        payload: user
    }
}

export const updateNews = news =>{
    return {
        type: ACTION_TYPES.UPDATE_NEWS,
        payload: news
    }
}

export const toggleModal = ()=>{
    return {
        type:ACTION_TYPES.TOGGLE_MODAL
    }
}

export const setNews = (news)=>{
    return {
        type: ACTION_TYPES.SET_NEWS,
        payload: news
    }
}

export const saveBookmark = (bookmark)=>{
    return {
        type: ACTION_TYPES.SAVE_BOOKMARK,
        payload: bookmark
    }
}

export const getBookmarks = (bookmarks)=>{
    return {
        type: ACTION_TYPES.GET_BOOKMARKS,
        payload: bookmarks
    }
}