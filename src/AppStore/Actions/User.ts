import {
    SET_USER,
    LOADING_USER,
    STOP_LOADING_USER,
    SET_REG_KEY,
    SET_VALIDATION_KEY,
    SET_KEYS_LIST,
    ERR_VALID_KEY_TEXT,
    DispatchType,
    ThunkType,
} from '../types';
import { registrationUserInputType } from '../commonTypes';
import { instance, check_default, check_current } from './Instance';
import * as axios from 'axios';

//notification
import { ErrorMessage, SuccessMessage } from './Notifications';
//дефолтный токен для запросов на регистрацию нового юзера
export const getAccessRegistration = (jsonObject: { username: string, password: string }, flag: string ) : ThunkType => async (dispatch) => {
    jsonObject = {
        ...jsonObject,
        username: jsonObject.username === 'wdauser' ? 'wdauser' : `w_${jsonObject.username}`
    }
    dispatch({type:LOADING_USER});
        try {
            //@ts-ignore
            const response = await axios.post(`https://wda.bitoobit.ru/Account/LoginTokenRefreshNoCodingPost`, jsonObject);
            const data = response.data;
            if(flag === 'DEFAULT_USER'){
                localStorage.setItem('default_access', data.access_token ? data.access_token : '');
                dispatch({type:STOP_LOADING_USER});
            } else {
                localStorage.setItem('current_access', data.access_token ? data.access_token : '');
                dispatch({type: SET_USER, payload: true});
                dispatch({type:STOP_LOADING_USER});
            }
            dispatch({type:STOP_LOADING_USER});
        }
        catch (err) {
            if(err.response !== undefined){
                dispatch(ErrorMessage(err.response.data.strErrorMessage));
            }
            dispatch({type:STOP_LOADING_USER});
        }
}
//выход из приложения
export const logOut = (dispatch: DispatchType) => {
    localStorage.removeItem('current_access');
    window.location.href = '/login';
}
//генерация ключа для регистрации
export const genRegKey = (jsonObject: { roleId: string, orgId: string }) : ThunkType => async (dispatch) => {
    const body = {
        ...jsonObject,
        method: 'genRegKey'
    }
    dispatch({type: LOADING_USER})
    try {
        const response = await instance(check_current()).post(``, body);
        const data = response.data;
        if(data.key){
            dispatch(SuccessMessage('Операция выполнена успешно'));
            dispatch({type:SET_REG_KEY, payload:data.key})
        }
        dispatch({type:STOP_LOADING_USER});
    }
    catch (err) {
        console.error(err);
        if(err.response){
            dispatch(ErrorMessage(err.response.data.strErrorMessage));
        }
        dispatch({type:STOP_LOADING_USER});
    }
}
//проверка ключа регистрации
export const checkRegKey = (jsonObject: { key: string }) : ThunkType => async (dispatch) => {
    dispatch({type:LOADING_USER})
    const body = {
        ...jsonObject,
        method: 'checkRegKey'
    }
    try {
        const response = await instance(check_default()).post(``, body);
        const data = response.data;
        console.log(`result of checkRegKey:`, data);
        if(data.isValid === true){
            dispatch(SuccessMessage('Доступ разрешён'));
            dispatch({type:SET_VALIDATION_KEY, payload:true, isKey:body.key})
        } else {
            dispatch(ErrorMessage('Ошибка доступа'));
            dispatch({type:SET_VALIDATION_KEY, payload:false, }) 
        }
        dispatch({type:STOP_LOADING_USER});
    }
    catch (err) {
        console.error(err);
        if(err.response){
            dispatch(ErrorMessage(err.response.data.strErrorMessage));
            dispatch({type: ERR_VALID_KEY_TEXT, payload: 'Ссылка недействительна.'})
        } else {
            dispatch({type: ERR_VALID_KEY_TEXT, payload: 'Ошибка доступа' })
        }
        dispatch({type:STOP_LOADING_USER});
    }
}
//регистрация юзера
export const registrationUser = (jsonObject:registrationUserInputType) : ThunkType => async (dispatch) => {
    const body = {
        ...jsonObject,
        method: "registerUser",
    }
    dispatch({type:LOADING_USER})
    try {
        const response = await instance(check_default()).post(``, body);
        const data = response.data;
        console.log(response)
        if(data.successMsg) dispatch(SuccessMessage(data.successMsg));
        //logining after registration
        window.location.href = '/';
        //
        dispatch({type:STOP_LOADING_USER});
    }
    catch (err) {
        console.error(err);
        if(err.response){
            dispatch(ErrorMessage(err.response.data.strErrorMessage));
        }
        dispatch({type:STOP_LOADING_USER});
    }
}
//получение сгенерированных ключей регистрации
export const getMyRegKeys = () : ThunkType => async (dispatch) => {
    const jsonObject = {
        method: 'getMyRegKeys',
    }
    dispatch({type:LOADING_USER})
    try {
        const response = await instance(check_current()).post(``, jsonObject);
        const data = response.data;
        if(data.list) dispatch({ type: SET_KEYS_LIST, payload : data.list });
        if(data.errorMsg){dispatch(ErrorMessage(data.errorMsg))}
        dispatch({type:STOP_LOADING_USER});
    }
    catch (err) {
        console.error(err)
        dispatch({type:STOP_LOADING_USER});
    }
}
//приглашение по почте
export const sendInvitation = (email: string) : ThunkType => async (dispatch) => {
    dispatch({type:LOADING_USER});
    try {
        const res = await instance(check_current()).post(``, { method: "sendInvitation", email });
        const data = res.data;
        dispatch(SuccessMessage(data.successMsg));
        dispatch({type:STOP_LOADING_USER});
    }
    catch (err){
        if(err.response !== undefined){
            dispatch(ErrorMessage(err.response.data.strErrorMessage));
        }
        dispatch({type:STOP_LOADING_USER});
    }
}