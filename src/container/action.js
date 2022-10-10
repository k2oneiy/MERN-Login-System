import * as actionType from './types';
import * as AuthServices from '../components/services/auth.service';

export const registerAction = (payload) => (dispatch) =>{

    
    return AuthServices.register(payload)
        .then(response=>{
            dispatch({
                type: actionType.REGISTER_SUCCESS,
                payload: response.data
            })
            return Promise.resolve(response.data);
        })
        .catch(error => {
            dispatch({
                type: actionType.REGISTER_FAIL,
                payload: {err: error.message || "Registeration Failed"}
            })
            return Promise.reject(error);
        })
}

export const loginAction = (userCreditional) => (dispatch) =>{
    return AuthServices.login(userCreditional)
    .then(data =>{
        dispatch({
            type: actionType.LOGIN_SUCCESS,
            payload: data
        })
        return Promise.resolve(data);
    })
    .catch(error=>{
        dispatch({
            type: actionType.REGISTER_FAIL,
            payload : { err : error.message || "Login Failed" }
        })
        return Promise.reject(error);
    })
}    



export const logoutAction = (dispatch) =>{
    const msg = AuthServices.logout()
    dispatch({
        type: actionType.LOGOUT,
        payload: {msg}
    })

    return Promise.resolve(msg);

}



