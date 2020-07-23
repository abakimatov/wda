import { ThunkType, STOP_LOADING_DATA, LOADING_DATA } from '../../../types';
import { instance, check_current } from '../../Instance';
import { ErrorHandler } from '../../ErrorHandler';
import { SuccessMessage } from '../../Notifications';
import { convertNull, Helper, toggleOpenAddModal } from '../Helpers';
import { Methods } from '../../Methods/methods';
import { SET_NPV_ACT_DETAILS } from '@AppStore/types/actions/actionsNpvActsReducer';
//PLANS
export const getNpvActDetails = (flag?: string, id?: number) : ThunkType => async (dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getNpvActDetails, flag: flag, docId: id });
        const data = res.data;
        dispatch({ type: SET_NPV_ACT_DETAILS, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA }); 
    }
}
export const iudNpvActDetail = (flag?: string, body?: any, handleClose?: () => void) : ThunkType => async(dispatch, getState) => {
    const docId = getState().npvActs.npvActs[0].id;
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudNpvActDetail, flag, docId, ...body });
        const data = res.data.successMsg;
        dispatch(getNpvActDetails(null, docId));
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