import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {styles} from '../global/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../views/Home'
import SavedScreen from '../views/Saved'
import LoginScreen from '../views/Login'
import LogoutScreen from '../views/Logout'
import {connect} from "react-redux"

const Drawer = createDrawerNavigator();

function Navigator(props) {
  const DrawerScreen = (icon,title,component)=>{
    return <Drawer.Screen name={title} component={component}
    options={{
        title,
        drawerActiveTintColor:"grey" ,
        drawerLabelStyle:{
          color:"black",
          textTransform:"uppercase",
          fontWeight:"bold",
          letterSpacing: 1.2
        },
        drawerIcon:()=>{
            return <MaterialCommunityIcons  
            size={28}
            color={"#00CAB1"}
            name={icon}/>  
        }
    }}></Drawer.Screen>
}
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home"
        screenOptions={{
            headerStyle:{...styles.navbar}
        }}>
          {props.news.user ? DrawerScreen("home","Home",HomeScreen) : DrawerScreen("login","Sign In",LoginScreen)}
          {props.news.user ? DrawerScreen("bookmark-multiple","Bookmarks",SavedScreen):null}
          {props.news.user ? DrawerScreen("exit-to-app","Sign Out",LogoutScreen):null}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const mapStateToProps = state =>{
  return {
    news: state.news
  }
}

export default connect(mapStateToProps)(Navigator)
