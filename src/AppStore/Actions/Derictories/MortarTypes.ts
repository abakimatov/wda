import { ThunkType, STOP_LOADING_DATA, LOADING_DATA } from '../../types';
import { instance, check_current } from '../Instance';
import { ErrorHandler } from '../ErrorHandler';
import { SuccessMessage } from '../Notifications';
import { convertNull, toggleOpenAddModal } from './Helpers';
import { SET_MORTAR_TYPES } from '../../types/actions/actionsDataReducer';
import { TMortarType } from '../../types/reducers/typesDataReducer';
import { Methods } from '../Methods/methods';
//PLANS
export const getMortarTypes = (flag?: string, id?: number) : ThunkType => async(dispatch) => { 
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getMortarTypes, flag, id });
        const data = res.data;
        dispatch({ type: SET_MORTAR_TYPES, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const iudMortarType = (flag?: string, body?: TMortarType, functionResultPromise?: (result?: boolean, id?: number) => void) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudMortarType, flag, ...body });
        const data = res.data;
        dispatch(getMortarTypes(null, null));
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