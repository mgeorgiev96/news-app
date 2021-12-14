import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import {connect} from 'react-redux'
import * as ACTIONS from '../store/actions'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Logout = (props) => {
    useEffect(async ()=>{
        await AsyncStorage.removeItem("session")
        props.updateUser(null)
    },[])
    return (
        <View>
            
        </View>
    )
}

const mapStateToProps = state =>{
    return {
        news: state.news
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        updateUser: (user)=> dispatch(ACTIONS.updateUser(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Logout)
