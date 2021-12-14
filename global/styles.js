import {StyleSheet,StatusBar} from 'react-native'


export const styles = StyleSheet.create({
    container: {
        paddingTop:StatusBar.currentHeight,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      newsContainer:{
        flex:1
      },
      newsItem:{
        margin:15,
        borderWidth:1,
        borderColor: "lightgrey"
      },
    navbar:{
        borderTopWidth: 1,
        borderBottomWidth:1,
        borderColor: 'lightgrey'
      },
    switchButton:{
        zIndex:3,
        flex:1,
        flexDirection:"row",
        alignItems:"center"
      },
      formContainer:{
        flex:1,
        width: '80%',
        justifyContent:'center',
        marginTop:0,
        marginBottom:0,
        marginLeft:'auto',
        marginRight:"auto"
      },
      selectedTab:{
        color: "red",
        borderBottomColor:"red",
        borderBottomWidth: 2,
        paddingBottom: 5,
        textTransform:"uppercase",
        fontWeight: "700",
        marginBottom: 15
      },
      tabStyles:{
        color:"black",
        paddingBottom: 5,
        textTransform:"uppercase",
        fontWeight:'700',
        marginBottom: 15
      }
})