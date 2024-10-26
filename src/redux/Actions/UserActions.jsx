import { SET_USER_LOGIN,GET_USER,USER_LOGOUT } from "../ActionTypes";



export const setUserLogin=(data)=>{
    return{
        type:SET_USER_LOGIN,
        payload:data
    }
}

export const getUserData=()=>{
    return{
        type:GET_USER
    }
}

export const userLogout=()=>{
    return{
        type:USER_LOGOUT
        
    }
}