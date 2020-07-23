import { ThunkType, STOP_LOADING_DATA, LOADING_DATA } from '../../../types';
import { instance, check_current } from '../../Instance';
import { ErrorHandler } from '../../ErrorHandler';
import { SuccessMessage } from '../../Notifications';
import { convertNull, Helper, toggleOpenAddModal } from '../Helpers';
import { Methods } from '../../Methods/methods';
import { SET_NPV_CAUSES } from '@AppStore/types/actions/actionsNpvActsReducer';
import { TNpvCause } from '@AppStore/types/reducers/typesNpvActsReducer';
//PLANS
export const getNpvCauses = (flag?: string, id?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getNpvCauses, flag, id });
        const data = res.data;
        dispatch({ type: SET_NPV_CAUSES, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const iudNpvCause = (flag?: string, body?: TNpvCause, functionResultPromise?: (result?: boolean, id?: number) => void) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudNpvCause, flag, ...body });
        const data = res.data;
        dispatch(getNpvCauses(flag, data.id));
        dispatch(SuccessMessage(data.successMsg));
        dispatch({ type: STOP_LOADING_DATA });
        //
        if(typeof functionResultPromise === 'function') functionResultPromise();
        if(functionResultPromise && flag === "I") functionResultPromise(true, data.id);
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
        if(flag === "I") dispatch(toggleOpenAddModal(false));
        if(functionResultPromise && flag === "I") functionResultPromise(false, null);
    }
}