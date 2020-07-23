import { LOADING_USER, STOP_LOADING_USER, SET_PROGRESS_REGISTR_ORG, ThunkType } from '../types';
import { ErrorMessage, SuccessMessage} from './Notifications';
import { instance, check_default } from './Instance';

export const RegistrationOrg = (jsonObject: { [key: string] : string }) : ThunkType => async dispatch => {
    dispatch({type: LOADING_USER});
    try {
        const res = await instance(check_default()).post(``, {...jsonObject, method:"registerOrg" });
        const data = res.data;
        dispatch(SuccessMessage(data.successMsg));
        dispatch({type: SET_PROGRESS_REGISTR_ORG, payload: true, msg: data.successMsg});
        dispatch({type:STOP_LOADING_USER});
    }
    catch (err) {
        if(err.response !== undefined){
            dispatch(ErrorMessage(err.response.data.strErrorMessage));
        }
        dispatch({type:STOP_LOADING_USER});
        dispatch({type: SET_PROGRESS_REGISTR_ORG, payload: false});
    }
}