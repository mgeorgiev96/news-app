import * as React from 'react';
import { Modal, Portal,Surface,Provider, Button } from 'react-native-paper';
import {ScrollView} from 'react-native'
import {connect} from "react-redux"
import * as ACTIONS from '../store/actions'
import {styles} from '../global/styles'
import ModalInfo from '../components/ModalInfo'
import {Linking} from 'react-native'

const NewsModal = (props) => {
  const containerStyle = {backgroundColor: 'white',
  height:"90%",width:"90%",
  marginLeft:"5%",
  alignItems:"center",borderRadius:5,paddingHorizontal:10};
  return (
    <Provider>
      <Portal>
              <Modal visible={props.news.modal} onDismiss={props.toggleModal} contentContainerStyle={containerStyle}>
                <ScrollView style={{width:"100%"}}>
                    <ModalInfo/>
                </ScrollView>
                <Surface style={{flexDirection:"row",paddingVertical:20}}>
                  <Button mode="contained" color={"#AA1E2E"} labelStyle={{color:"white"}} style={{marginRight:10}} onPress={()=>Linking.openURL(props.news.url)}>Read More</Button>
                  <Button mode="contained" color={"#AA1E2E"} labelStyle={{color:"white"}} onPress={props.toggleModal}>Close</Button>
                </Surface>
              </Modal>
      </Portal>
    </Provider>
  );
};
const mapStateToProps = state =>{
    return {
        news: state.news
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        toggleModal: ()=> dispatch(ACTIONS.toggleModal())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewsModal);