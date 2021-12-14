import * as React from 'react';
import {Text, Card, Title, Paragraph,Surface } from 'react-native-paper';
import {connect} from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native'
import * as ACTIONS from '../store/actions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'


const ModalInfo = (props) => {
    const saveBookmark = async (title,author,src,description)=>{
        let bookmark = {title,author,src,description,id:uuid.v4()}
        if(props.news.bookmark.filter(item=> item.title === title).length === 0){
            await AsyncStorage.setItem("bookmark",JSON.stringify([...props.news.bookmark,bookmark]))
            props.saveBookmark(bookmark)
        }
    }

    return(
        <Card style={{width:"100%",padding:10}}>
            <Card.Content>
            <Title style={{marginVertical:10}}>{props.news.title}</Title>
            <Surface style={{flexDirection:"row"}}>
                <Paragraph>{props.news.author} </Paragraph>
                <TouchableOpacity onPress={()=>saveBookmark(props.news.title,props.news.author,props.news.src,props.news.description)}>
                     <MaterialCommunityIcons name={props.news.bookmark.filter(item=> item.title === props.news.title).length === 0 ? "bookmark-outline" : "bookmark"} size={24} color="black" />
                </TouchableOpacity>
            </Surface>
            </Card.Content>
            <Card.Cover style={{marginVertical:20}} source={{ uri: props.news.src }} />
            <Text>{props.news.description}</Text>
        </Card>
    )
}

const mapStateToProps = state =>{
    return {
        news: state.news
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        saveBookmark: (bookmark)=> dispatch(ACTIONS.saveBookmark(bookmark))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalInfo);