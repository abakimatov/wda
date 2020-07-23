import {
    ERROR,
    SUCCESS,
    CLEAR_ERROR,
    CLEAR_SUCCESS,
    DispatchType,
} from '../types';
export const ErrorMessage = (mess: string) => (dispatch: DispatchType) => {
    if(mess){
        let messLength = Math.round(mess.length/11)*1000;
        console.log(messLength)
        setTimeout(() => {
            dispatch({ type: ERROR, payload : mess})
        })
        setTimeout(() => {
            dispatch({ type: CLEAR_ERROR})
        }, messLength)
    }
}

export const SuccessMessage = (mess: string) => (dispatch:  DispatchType)  => {
    if(mess){
        let messLength = Math.round(mess.length/11)*1000;
        console.log(messLength)
        setTimeout(() => {
            dispatch({ type: SUCCESS, payload : mess})
        })
        setTimeout(() => {
            dispatch({ type: CLEAR_SUCCESS})
        }, messLength)
    }
}