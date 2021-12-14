import * as React from 'react';
import { Card, Title, Paragraph,Surface} from 'react-native-paper';
import { styles } from '../global/styles';
import {TouchableOpacity} from 'react-native'
import {connect} from "react-redux"
import * as ACTIONS from '../store/actions'
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'

const NewsWindow = (props) => {
  const tModal = (title,author,src,description,url)=>{
    props.toggleModal()
    props.setNews({title,author,src,description,url})

  }
  const deleteBookmark = async (title)=>{
    let bookmarks = props.news.bookmark.filter(item=>item.title!==title)
    await AsyncStorage.setItem("bookmark",JSON.stringify(bookmarks))
    props.getBookmarks(bookmarks)
  }
  return (
    <Card style={{...styles.newsItem}}>
        <Card.Content>
          <Title>{props.title}</Title>
          {props.display ? <Surface style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:10}}>
                <Paragraph>{props.news.author} </Paragraph>
                <TouchableOpacity onPress={()=>deleteBookmark(props.title)}>
                     <MaterialIcons name="highlight-remove" size={24} color="black" />
                </TouchableOpacity>
            </Surface> : <Paragraph style={{marginVertical:10}}>{props.author}</Paragraph>}
        </Card.Content>
        <TouchableOpacity onPress={props.display ? null : ()=>tModal(props.title,props.author,props.src,props.description,props.url)}><Card.Cover source={{ uri: props.src }} /></TouchableOpacity>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    news:state.news
  }
}

const mapDispatchToProps = dispatch =>{
  return {
      toggleModal: ()=> dispatch(ACTIONS.toggleModal()),
      setNews: (news)=> dispatch(ACTIONS.setNews(news)),
      getBookmarks: (bookmarks)=> dispatch(ACTIONS.getBookmarks(bookmarks))

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewsWindow);