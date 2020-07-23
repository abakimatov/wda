import { ThunkType, STOP_LOADING_DATA, LOADING_DATA } from '../../types';
import { convertNull } from "./Helpers";
import { ErrorHandler } from '../ErrorHandler';
import { instance, check_current } from '../Instance';
import { SuccessMessage } from '../Notifications';
import { TOrganizations } from '../../types/reducers/typesDataReducer';
import { Methods } from '../Methods/methods';
import { SET_ORGANIZATIONS } from '@AppStore/Reducers/organizations/types';
//ORGANIZATIONS
export const getOrganizations = (flag?: string, id?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getOrganizations, flag, id });
        const data = res.data;
        dispatch({ type: SET_ORGANIZATIONS, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const iudOrganization = (flag?: string, body?: TOrganizations, handleClose?: () => void) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudOrganization, flag, ...body });
        const data = res.data.successMsg;
        dispatch(getOrganizations(flag, body.id));
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