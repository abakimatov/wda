import {
    SET_WORK_OBJECTS_DATA, SET_WORK_OBJECT_EXECUTORS, SET_WORK_OBJECT_HOLES,
} from '../../types/actions/actionsDataReducer';
import { TWorkObject, TWorkObjectExecutor, TWorkObjectHole } from '../../types/reducers/typesDataReducer';
import { ThunkType, STOP_LOADING_DATA, LOADING_DATA } from '../../types';
import { convertNull, toggleOpenAddModal } from "./Helpers";
import { ErrorHandler } from '../ErrorHandler';
import { instance, check_current } from '../Instance';
import { SuccessMessage } from '../Notifications';
import { Methods } from '../Methods/methods';
//WORKOBJECTS
//
export const getWorkObjects = (flag?: string, id?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getWorkObjects, flag, id });
        const data = res.data;
        dispatch({ type: SET_WORK_OBJECTS_DATA, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const iudWorkObject = (flag?: string, body?: TWorkObject, functionResultPromise?: (result: boolean, id: number) => void) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudWorkObject, flag, ...body });
        const data = res.data;
        dispatch(getWorkObjects(null, data.id));
        dispatch(SuccessMessage(data.successMsg));
        dispatch({ type: STOP_LOADING_DATA });
        //
        if(functionResultPromise && flag === "I") functionResultPromise(true, data.id);
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
        /* if(flag === "I") dispatch(toggleOpenAddModal(false)); */
        if(functionResultPromise && flag === "I") functionResultPromise(false, null);
    }
}
//ПОДРЯДЧИК
export const getWorkObjectExecutors = (flag?: string, id?: number) : ThunkType => async (dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: "getWorkObjectExecutors", flag: flag, workObjectId: id });
        const data = res.data;
        dispatch({ type: SET_WORK_OBJECT_EXECUTORS, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA }); 
    }
}
export const iudWorkObjectExecutor = (flag?: string, body?: TWorkObjectExecutor, handleClose?: () => void) : ThunkType => async(dispatch, getState) => {
    const docId = getState().data.work_objects_data[0].id;
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: "iudWorkObjectExecutor", flag, workObjectId: docId, ...body });
        const data = res.data.successMsg;
        dispatch(getWorkObjectExecutors(null, docId));
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
//ПРОЕКТНАЯ КОНСТРУКЦИЯ СКВАЖИНЫ
export const getWorkObjectHoles = (flag?: string, id?: number) : ThunkType => async (dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: "getWorkObjectHoles", flag: flag, workObjectId: id });
        const data = res.data;
        dispatch({ type: SET_WORK_OBJECT_HOLES, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA }); 
    }
}
export const iudWorkObjectHole = (flag?: string, body?: TWorkObjectHole, handleClose?: () => void) : ThunkType => async(dispatch, getState) => {
    const docId = getState().data.work_objects_data[0].id;
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: "iudWorkObjectHole", flag, workObjectId: docId, ...body });
        const data = res.data.successMsg;
        dispatch(getWorkObjectHoles(null, docId));
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