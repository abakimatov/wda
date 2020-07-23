import { convertNull, toggleOpenAddModal, toggleOpenMovedItemsInTables } from "./Helpers";
import { ErrorHandler } from '../ErrorHandler';
import { instance, check_current } from '../Instance';
import { SuccessMessage } from '../Notifications';
import { TWorkKind } from '../../types/reducers/typesDataReducer';
import { ThunkType, LOADING_DATA, STOP_LOADING_DATA } from "../../types";
import { Methods } from "../Methods/methods";
import { SET_WORK_KINDS_DATA, SET_WORK_KINDS_FOLDERS } from "@AppStore/Reducers/workKinds/types";
//WORK KINDS
export const getWorkKinds = (flag?: string, id?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getWorkKinds, flag, id });
        const data = res.data;
        dispatch({ type: SET_WORK_KINDS_DATA, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const iudWorkKind = (flag?: string, body?: TWorkKind, functionResultPromise?: (result?: boolean, id?: number) => void) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudWorkKind, flag, ...body });
        const data = res.data;
        dispatch(getWorkKinds(null, null));
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
//FOLDERS
export const getWorkKindFolders = () :ThunkType =>  async (dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getWorkKindFolders });
        const data = res.data;
        dispatch({ type: SET_WORK_KINDS_FOLDERS, payload: convertNull(data.list)} )
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){ 
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const movedWorkKind = (id: number, folderId: number) : ThunkType => async (dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudWorkKind, id, folderId, flag: 'mov' });
        const data = res.data;
        dispatch(SuccessMessage(data.successMsg));
        dispatch(toggleOpenMovedItemsInTables(false))
        dispatch(getWorkKinds())
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){ 
        dispatch(ErrorHandler(err));
        dispatch(toggleOpenMovedItemsInTables(true))
        dispatch({ type: STOP_LOADING_DATA });
    }
}