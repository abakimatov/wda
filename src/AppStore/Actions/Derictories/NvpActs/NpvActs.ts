import { ThunkType, STOP_LOADING_DATA, LOADING_DATA } from '../../../types';
import { instance, check_current } from '../../Instance';
import { ErrorHandler } from '../../ErrorHandler';
import { SuccessMessage } from '../../Notifications';
import { convertNull, Helper, toggleOpenAddModal } from '../Helpers';
import { Methods } from '../../Methods/methods';
import { SET_NPV_ACTS, SET_NPV_ACTS_FILTER_LIST } from '@AppStore/types/actions/actionsNpvActsReducer';
import { TNpvAct } from '@AppStore/types/reducers/typesNpvActsReducer';
//NPV ACTS
export const getNpvActs = (flag?: string, id?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getNpvActs, flag, id });
        const data = res.data;
        //@ts-ignore
        dispatch({ type: SET_NPV_ACTS, flag, id, payload: convertNull(data.list) });
        dispatch({ type: SET_NPV_ACTS_FILTER_LIST, payload: convertNull(data.filters) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const iudNpvAct = (flag?: string, body?: TNpvAct, functionResultPromise?: (result?: boolean, id?: number) => void) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudNpvAct, flag, ...body });
        const data = res.data;
        dispatch(getNpvActs(flag, data.id));
        dispatch(SuccessMessage(data.successMsg));
        dispatch({ type: STOP_LOADING_DATA });
        //
        if(functionResultPromise && typeof functionResultPromise === 'function') functionResultPromise(true, data.id);
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
        if(flag === "I") dispatch(toggleOpenAddModal(false));
        if(functionResultPromise && flag === "I") functionResultPromise(false, null);
    }
}
//! SORTING
export const getNpvActsSortListDataFromIdsParam = (body?:{workObjectId: number}) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getNpvActs, ...body });
        const data = res.data;
        dispatch({ type: SET_NPV_ACTS, flag: null, id: null, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA }); 
    }  
    catch(err){
        dispatch(ErrorHandler(err)); 
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const getNpvActsSortListData = (flag?: string, objId?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getNpvActs, type: flag, objId });
        const data = res.data;
        //@ts-ignore
        dispatch({ type: SET_NPV_ACTS, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}