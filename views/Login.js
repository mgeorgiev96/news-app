import React,{useEffect,useState} from 'react'
import { Surface,Text,ActivityIndicator,Button,TextInput} from 'react-native-paper'
import {TouchableWithoutFeedback,Keyboard,StatusBar} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage"
import {styles} from '../global/styles'
import * as Yup from 'yup'
import { Formik } from 'formik'
import {connect} from 'react-redux'
import * as ACTIONS from '../store/actions'


const usernameSchema = Yup.object({
    username:Yup.string().min(6).max(25)
})


const Login = (props) => {
    const [errorSubmit,setErrorSubmit] = useState(false)
    const [errorMsg,setErrorMsg] = useState("")
    const [authenticate,setAuthenticate] = useState(true)
    const [getUser,setUser] = useState(false)

    const setSession = async (username)=>{
        await AsyncStorage.setItem("session",username)
        props.updateUser(username)

    }
    useEffect(async ()=>{
        let user = await AsyncStorage.getItem("session")
        
        props.updateUser(user)
        setAuthenticate(false)
    },[])
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {authenticate ?  <Surface style={{...styles.container,justifyContent:"center"}}>
                            <ActivityIndicator  size={100} color={"#00CAB1"} />
                        </Surface> :
                        <Surface style={{flex:1,paddingTop: StatusBar.currentHeight}}>
                        <Formik
                        style={{flex:1}}
                        validationSchema={usernameSchema}
                        initialValues={{username:"",password:""}}
                        onSubmit={(values)=>{
                            setSession(values.username)
                        }}>
                                    {(formik) => (
                                    <Surface style={styles.formContainer}>
                                        <TextInput
                                        onTextInput={()=>setErrorSubmit(false)}
                                        onChangeText={formik.handleChange('username')}
                                        onBlur={formik.handleBlur('username')}
                                        value={formik.values.username}
                                        placeholder="Username..."
                                        leftIcon={{ type: 'font-awesome-5', name: 'user'}}
                                        />
                                        {formik.errors.username && formik.touched.username ? <Text style={{color:"red"}}>{formik.errors.username}</Text>:null}
                                        <Button color={"#00CAB1"} labelStyle={{color:"white"}} onPress={formik.handleSubmit} mode="contained">
                                            LOGIN
                                        </Button>
                                    </Surface>
                                    )}
                        </Formik>
                    </Surface>}
        </TouchableWithoutFeedback>
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

export default connect(mapStateToProps,mapDispatchToProps)(Login)
