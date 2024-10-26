import { SET_USER_LOGIN, GET_USER, USER_LOGOUT } from "../ActionTypes";



const initialValue = {
    logindetails: {}
}


export const UserReducers = (state = initialValue, action) => {
    console.log(action);

    switch (action.type) {
        case SET_USER_LOGIN:
            localStorage.setItem("roomlist", JSON.stringify(action.payload));
            return {
                ...state, logindetails: action.payload
            }

        case GET_USER:
            let userData = JSON.parse(localStorage.getItem("roomlist"))
            return {
                ...state, logindetails: userData ? userData : {}
            }
        case USER_LOGOUT:
            localStorage.removeItem("roomlist")
            return {
              ...state, logindetails: {}
            }  
            default :return state;
             
    }
}