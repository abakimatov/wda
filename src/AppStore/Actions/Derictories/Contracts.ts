import { ThunkType, STOP_LOADING_DATA, LOADING_DATA } from '../../types';
import { convertNull, toggleOpenAddModal } from "./Helpers";
import { ErrorHandler } from '../ErrorHandler';
import { instance, check_current } from '../Instance';
import { SuccessMessage } from '../Notifications';
import { TContract, TContractDetail } from '../../types/reducers/typesDataReducer';
import { Methods } from '../Methods/methods';
import { SET_CONTRACTS_DATA, SET_CONTRACT_SORT_LIST, SET_DETAILS_CONTRACT } from '@AppStore/Reducers/contracts/types';
//ДОГОВОРЫ
export const getContracts = (flag?: string, id?: number) : ThunkType => async(dispatch) => { 
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getContracts, flag, id });
        const data = res.data;
        dispatch({ type: SET_CONTRACTS_DATA, flag, id, payload: convertNull(data.list) });
        dispatch({ type: SET_CONTRACT_SORT_LIST, payload: convertNull(data.filters) })   
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const iudContract = (flag?: string, body?: TContract, functionResultPromise?: (result?: boolean, id?: number) => void) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudContract, flag, ...body });
        const data = res.data;
        dispatch(getContracts(null, null));
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
//ДЕТАЛИ ДОГОВОРА
export const getContractDetails = (flag?: string, id?: number) : ThunkType => async (dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: "getContractDetails", flag: flag, docId: id });
        const data = res.data;
        dispatch({ type: SET_DETAILS_CONTRACT, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA }); 
    }
}
export const iudContractDetail = (flag?: string, body?: TContractDetail, handleClose?: () => void) : ThunkType => async(dispatch, getState) => {
    const docId = getState().contracts.contracts[0].id;
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: "iudContractDetail", flag, docId, ...body });
        const data = res.data.successMsg;
        dispatch(getContractDetails(null, docId));
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
//FILTER
export const getContractsSortListDataFromIdsParam = (body?: { projectId: number, customerId: number, depositId: number }) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getContracts, ...body });
        const data = res.data;
        dispatch({ type: SET_CONTRACTS_DATA, flag: null, id: null, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA }); 
    }  
    catch(err){
        dispatch(ErrorHandler(err)); 
        dispatch({ type: STOP_LOADING_DATA });
    }
}
//! => sorted data
export const getContractsSortListData = (flag?: string, objId?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getContracts, type: flag, objId });
        const data = res.data;
        dispatch({ type: SET_CONTRACTS_DATA, flag: null, id: null, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });  
    }  
    catch(err){
        dispatch(ErrorHandler(err)); 
        dispatch({ type: STOP_LOADING_DATA });
    }
}