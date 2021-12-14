import React,{useEffect} from 'react'
import { Surface,Text} from 'react-native-paper'
import {ScrollView} from "react-native"
import { styles } from '../global/styles'
import {connect} from 'react-redux'
import NewsWindow from '../components/NewsWindow'
import * as ACTIONS from '../store/actions'
import uuid from 'react-native-uuid'
import NewsModal from '../components/NewsModal'
import Tabs from '../components/Tabs'
import SearchField from '../components/SearchField'

const Home = (props) => {
    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=19538b46186a461fa0f96a0127b79e7f").then(res=>res.json()).then(res=>props.updateNews(res.articles))
    },[])
    return (
        <Surface style={{...styles.newsContainer}}>
            <NewsModal/>
            <ScrollView style={{display:  props.news.modal ? "none" : "flex"}}>
            <Tabs/>
            <SearchField/>
              {props.news.news.length === 0 ? <Surface style={{alignItems:"center"}}><Text style={{color:"red",fontSize: 20}}>No Results.</Text></Surface> : props.news.news.map(item=><NewsWindow author={item.author} description={item.description} src={item.urlToImage} title={item.title} url={item.url} key={uuid.v4()}/>)}
            </ScrollView>
        </Surface>
    )
}

const mapStateToProps = state =>{
    return {
        news: state.news
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        updateNews: (news)=> dispatch(ACTIONS.updateNews(news)),
        toggleModal: ()=> dispatch(ACTIONS.toggleModal())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
