import React, {useState} from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
 
import {styles} from '../global/styles'
import { Surface } from 'react-native-paper';

 
const Example = ()=> {
  const [selected,setSelected] = useState(0)
  return (
    <View style={{...styles.container,borderBottomWidth:1,borderBottomColor:"lightgrey"}}>
      <Surface style={{backgroundColor:'white',flexDirection:"row",width:"100%",justifyContent:"space-around"}}>
          <Text name="first" onPress={()=>setSelected(0)} style={selected === 0 ? {...styles.selectedTab} : {...styles.tabStyles}}>All</Text>
          <Text onPress={()=>setSelected(1)} style={selected === 1 ? {...styles.selectedTab} : {...styles.tabStyles}} name="second">Hot</Text>
          <Text onPress={()=>setSelected(2)} name="third" style={selected === 2 ? {...styles.selectedTab} : {...styles.tabStyles}}>Popular</Text>
          <Text onPress={()=>setSelected(3)} name="fourth" style={selected === 3 ? {...styles.selectedTab} : {...styles.tabStyles}}>Trending</Text>
          <Text onPress={()=>setSelected(4)} name="fifth" style={selected === 4 ? {...styles.selectedTab} : {...styles.tabStyles}}>Sport</Text>
      </Surface>
    </View>
  );
}
 
 
AppRegistry.registerComponent('Example', () => Example);

export default Example;