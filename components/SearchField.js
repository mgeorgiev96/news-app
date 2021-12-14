import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import axios from 'axios'
import {Surface} from 'react-native-paper'
import {connect} from "react-redux"
import * as ACTIONS from '../store/actions'

const SearchField = (props) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const searchStory = (criteria)=>{
    axios.get(`https://newsapi.org/v2/everything?q=${criteria}&apiKey=19538b46186a461fa0f96a0127b79e7f`).then(res=>{
      console.log(res.data.articles)
      props.updateNews(res.data.articles)
    })
  }
  return (
    <Surface>
      <Searchbar
      onIconPress={()=>searchStory(searchQuery)}
      style={{marginVertical:30,width:"90%",marginLeft:"5%"}}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </Surface>
  );
};

const mapStateToProps = state =>{
  return {
    news: state.news
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    updateNews: (news)=> dispatch(ACTIONS.updateNews(news))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchField);