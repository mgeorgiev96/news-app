import React,{useEffect} from 'react'
import { Surface, Text } from 'react-native-paper'
import { styles } from '../global/styles'
import {connect} from 'react-redux'
import Tabs from '../components/Tabs'
import {ScrollView} from 'react-native'
import NewsWindow from '../components/NewsWindow'
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as ACTIONS from '../store/actions'


const Saved = (props) => {
    useEffect(async ()=>{
        let bookmarks = await AsyncStorage.getItem("bookmark")
        props.getBookmarks(JSON.parse(bookmarks))
    },[])
    return (
        <Surface style={{...styles.newsContainer}}>
            <ScrollView>
                <Tabs/>
                {props.news.bookmark.map(item=><NewsWindow display={true} author={item.author} description={item.description} src={item.src} title={item.title} url={item.url} key={item.id}/>)}
            </ScrollView>
        </Surface>
    )
}

const mapStateToProps = state =>{
    return {
        ...state,
        news: state.news
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        getBookmarks: (bookmarks)=> dispatch(ACTIONS.getBookmarks(bookmarks))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Saved)