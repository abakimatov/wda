import { ThunkType, STOP_LOADING_DATA, LOADING_DATA } from '../../types';
import { convertNull, toggleOpenAddModal } from "./Helpers";
import { ErrorHandler } from '../ErrorHandler';
import { instance, check_current } from '../Instance';
import { SuccessMessage } from '../Notifications';
import { TWorkClassifier } from '../../types/reducers/typesDataReducer';
import { Methods } from '../Methods/methods';
import { SET_WORK_CLASSIFIER_DATA } from '@AppStore/Reducers/workClassifier/types';
//WORK KINDS
export const getWorkClassifier = (flag?: string, id?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getWorkClassifier, flag, id });
        const data = res.data;
        dispatch({ type: SET_WORK_CLASSIFIER_DATA, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA }); 
    }
}
export const iudWorkClassifier = (flag?: string, body?: TWorkClassifier, functionResultPromise?: (result?: boolean, id?: number) => void) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudWorkClassifier, flag, ...body });
        const data = res.data;
        dispatch(getWorkClassifier(null, null));
        dispatch(SuccessMessage(data.successMsg));
        dispatch({ type: STOP_LOADING_DATA });
        //
        if(typeof functionResultPromise === 'function') functionResultPromise();
        if(functionResultPromise && typeof functionResultPromise === 'function' && flag === "I") functionResultPromise(true, data.id);
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
        /* if(flag === "I") dispatch(toggleOpenAddModal(false)); */
        if(functionResultPromise && typeof functionResultPromise === 'function' && flag === "I") functionResultPromise(false, null);
    }
}