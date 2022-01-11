import React, {useReducer} from 'react';
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import {REGISTER_SUCCESS, REGISTER_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from '../../types'
import clientAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'



const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        authentificated:  null,
        user: null,
        message: null,
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const registerUser = async datos =>{
        try {
            const response = await clientAxios.post('/api/users', datos)
            console.log(response.data);
            
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            })

            //get user authentificated
            userAuthenticate()

        } catch (error) {
            // console.log(error.response.data.msg);
            const alert ={
                msg: error.response.data.msg, 
                category: 'alerta-error'
            }
      
        dispatch({
            type: REGISTER_ERROR,
            payload: alert
        })
    }
    }

    //send user authenticate
    const userAuthenticate = async () => {
        const token = localStorage.getItem('token')
        if(token){
            //todo function to send toker by headers
            tokenAuth(token)
        }
        try {
            const response = await clientAxios.get('/api/auth')
            dispatch({
                type: GET_USER,
                payload: response.data
            })

              //get user authentificated
              userAuthenticate()

          
        } catch (error) {
            dispatch({
                 type: LOGIN_ERROR,
                })
        }
    }

    //login
    const loginUser = async datos => {
        try {

            const response = await clientAxios.post('/api/auth', datos)
            
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            })

            userAuthenticate()


        } catch (error) {
            console.log(error.response.data.msg);
            const alert ={
                msg: error.response.data.msg, 
                category: 'alerta-error'
            }
      
        dispatch({
            type: LOGIN_ERROR,
            payload: alert
        })
    }
}

//logout
const logOut = () => {
    dispatch({
        type: LOG_OUT,
    })
    window.location.href = '/'
}


    return(
        <AuthContext.Provider
            value= {{
                token: state.token, 
                authentificated: state.authentificated,
                user: state.user,
                message: state.message,
                registerUser,
                userAuthenticate,
                loginUser,
                logOut
            }}
        
        >


            {props.children}
        </AuthContext.Provider>
    )

}


export default AuthState