import { ThunkType, STOP_LOADING_DATA, LOADING_DATA } from '../../types';
import { instance, check_current } from '../Instance';
import { ErrorHandler } from '../ErrorHandler';
import { SuccessMessage } from '../Notifications';
import { convertNull, toggleOpenAddModal } from './Helpers';
import { SET_PLANS, SET_PLANS_DETAILS, SET_EX_FLAGS, SET_EX_FLAGS_ITEMS, SET_PLANS_SORT_LIST } from '../../types/actions/actionsDataReducer';
import { TPlan, TPlanDetail } from '../../types/reducers/typesDataReducer';
import { Methods } from '../Methods/methods';
//PLANS
export const getPlans = (flag?: string, id?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getPlans, flag, id });
        const data = res.data;
        dispatch({ type: SET_PLANS, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const iudPlan = (flag?: string, body?: TPlan, functionResultPromise?: (result: boolean, id: number) => void) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudPlan, flag, ...body });
        const data = res.data;
        dispatch(getPlans(null, null));
        dispatch(SuccessMessage(data.successMsg));
        dispatch({ type: STOP_LOADING_DATA });
        //
        if(functionResultPromise && typeof functionResultPromise === 'function') functionResultPromise(true, data.id);
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
        /* if(flag === "I") dispatch(toggleOpenAddModal(false)); */
        if(functionResultPromise && flag === "I") functionResultPromise(false, null);
    }
}
//PLANS DETAILS
export const getPlanDetails = (flag?: string, id?: number) : ThunkType => async (dispatch) => {
    dispatch({ type: LOADING_DATA });
    const docId = id;
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getPlanDetails, docId, flag, id: null });
        const data = res.data;
        dispatch({ type: SET_PLANS_DETAILS, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA }); 
    }
}
export const iudPlanDetail = (flag?: string, body?: TPlanDetail, handleClose?: () => void) : ThunkType => async(dispatch, getState) => {
    const docId = getState().data.urlParams.id
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudPlanDetail, flag, docId, ...body });
        const data = res.data.successMsg;
        dispatch(getPlanDetails(null, docId));
        dispatch(SuccessMessage(data));
        dispatch({ type: STOP_LOADING_DATA });
        //
        if(handleClose) handleClose();
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
//! FILTER LIST
export const getDocPlanFilterList = () : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getDocPlanFilterList });
        const data = res.data;
        dispatch({ type: SET_PLANS_SORT_LIST, payload: convertNull(data.list) }) 
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const getDocPlanFilterListData = (flag?: string, objId?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    console.error(`flag`, flag, `objId`, objId)
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getPlans, type: flag, objId });
        const data = res.data; 
        dispatch({ type: SET_PLANS, flag: null, id: null, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA }); 
    }  
    catch(err){
        dispatch(ErrorHandler(err)); 
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const getPlansFilteredDataFromIdsParam = (body?:{ workObjectId: number; orgId: number;  scenarioId: number;}) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getPlans, ...body });
        const data = res.data;
        dispatch({ type: SET_PLANS, flag: null, id: null, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA }); 
    }  
    catch(err){
        dispatch(ErrorHandler(err)); 
        dispatch({ type: STOP_LOADING_DATA });
    }
}
//! EXFLAGS
export const getExFlags = () : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getPerformerLists });
        const data = res.data;
        dispatch({ type: SET_EX_FLAGS, payload: convertNull(data) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const getExFlagsItems = (flag: string) : ThunkType => async (dispatch, getState) => {
    const exflags = getState().data.exflags.filter(item => item.flag === flag); 
    if(exflags[0]) dispatch({ type: SET_EX_FLAGS_ITEMS, payload: exflags[0] });
}