import { ThunkType, STOP_LOADING_DATA, LOADING_DATA } from '../../../types';
import { instance, check_current } from '../../Instance';
import { ErrorHandler } from '../../ErrorHandler';
import { SuccessMessage } from '../../Notifications';
import { convertNull, Helper, toggleOpenAddModal } from '../Helpers';
import { Methods } from '../../Methods/methods';
import { SET_NPV_ACT_KINDS } from '@AppStore/types/actions/actionsNpvActsReducer';
import { TNpvActKind } from '@AppStore/types/reducers/typesNpvActsReducer';
//PLANS
export const getNpvActKinds = (flag?: string, id?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getNpvActKinds, flag, id });
        const data = res.data;
        dispatch({ type: SET_NPV_ACT_KINDS, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const iudNpvActKind = (flag?: string, body?: TNpvActKind, functionResultPromise?: (result?: boolean, id?: number) => void) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudNpvActKind, flag, ...body });
        const data = res.data;
        dispatch(getNpvActKinds(flag, data.id));
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