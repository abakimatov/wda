import { ThunkType, LOADING_DATA, STOP_LOADING_DATA, } from '../../../types';
import { instance, check_current } from '../../Instance';
import { ErrorHandler } from '../../ErrorHandler';
import { SuccessMessage } from '../../Notifications';
import { convertNull, Helper, toggleOpenAddModal } from '../Helpers';
import { TDayliReport } from '../../../types/reducers/typesDayliReportReducer'; 
import { SET_DAILY_REPORT, SET_DAYLI_REPORT_TYPES, SET_DAYLI_REPORT_KINDS, LOADING_DAYLI_REPORT, STOP_LOADING_DAYLI_REPORT, SET_DR_SORT_LIST } from '../../../types/actions/actionsDayliReportReducer';
import { Methods } from '../../Methods/methods';
//DR
export const getDailyReports = (flag?: string, id?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DAYLI_REPORT });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getDailyReports, flag, id });
        const data = res.data;
        dispatch({ type: SET_DAILY_REPORT, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DAYLI_REPORT });
    }
    catch(err){
        dispatch(ErrorHandler(err)); 
        dispatch({ type: STOP_LOADING_DAYLI_REPORT });
    }
}
export const iudDailyReport = (flag?: string, body?: TDayliReport, functionResultPromise?: (result?: boolean, id?: number) => void) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DAYLI_REPORT });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudDailyReport, flag, ...body });
        const data = res.data;
        dispatch(getDailyReports(null, null));
        dispatch(SuccessMessage(data.successMsg));
        dispatch({ type: STOP_LOADING_DAYLI_REPORT });
        if(functionResultPromise && typeof functionResultPromise === 'function') functionResultPromise(true, data.id);
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DAYLI_REPORT });
        /* if(flag === "I") dispatch(toggleOpenAddModal(false)); */
        if(functionResultPromise && typeof functionResultPromise === 'function' && flag === "I") functionResultPromise(false, null);
    }
}
//types
export const getDReportTypes = (flag?: string, id?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getDReportTypes, flag, id });
        const data = res.data;
        dispatch({ type: SET_DAYLI_REPORT_TYPES, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
//kinds
export const getDReportKinds = (flag?: string, id?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getDReportKinds, flag, id });
        const data = res.data;
        dispatch({ type: SET_DAYLI_REPORT_KINDS, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
//sort list
export const getDailyReportSortList = () : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getDailyReportSortList });
        const data = res.data;
        dispatch({ type: SET_DR_SORT_LIST, payload: convertNull(data.list) })
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch({ type: STOP_LOADING_DATA });
    }
}
//! SORTING
export const getDailyReportSortListData = (flag?: string, objId?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DAYLI_REPORT });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getDailyReports, type: flag, objId });
        const data = res.data;
        dispatch({ type: SET_DAILY_REPORT, flag: null, id: null, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DAYLI_REPORT }); 
    }  
    catch(err){
        dispatch(ErrorHandler(err)); 
        dispatch({ type: STOP_LOADING_DAYLI_REPORT });
    }
}
export const getDailyReportSortListDataFromIdsParam = (body?:{workKindId: number, workObjectId: number, customerId: number}) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DAYLI_REPORT });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getDailyReports, ...body });
        const data = res.data;
        dispatch({ type: SET_DAILY_REPORT, flag: null, id: null, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DAYLI_REPORT }); 
    }  
    catch(err){
        dispatch(ErrorHandler(err)); 
        dispatch({ type: STOP_LOADING_DAYLI_REPORT });
    }
}