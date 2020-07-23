import { ThunkType, LOADING_DATA, STOP_LOADING_DATA, } from '../../../types';
import { instance, check_current } from '../../Instance';
import { ErrorHandler } from '../../ErrorHandler';
import { SuccessMessage } from '../../Notifications';
import { convertNull, Helper, toggleOpenAddModal } from '../Helpers';
import { TTechEquipment } from '../../../types/reducers/typesDayliReportReducer';
import { SET_TECH_QUIPMENT } from '../../../types/actions/actionsDayliReportReducer';
import { Methods } from '../../Methods/methods';
//PLANS
export const getDRTechEquipment = (flag?: string, id?: number) : ThunkType => async(dispatch, getState) => {
    dispatch({ type: LOADING_DATA });
    const docId = getState().data.urlParams.id;
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getDRTechEquipment, docId, flag, id });
        const data = res.data;
        dispatch({ type: SET_TECH_QUIPMENT, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const iudDRTechEquipment = (flag?: string, body?: TTechEquipment, functionResultPromise?: (result?: boolean, id?: number) => void) : ThunkType => async(dispatch, getState) => {
    dispatch({ type: LOADING_DATA });
    const docId = getState().data.urlParams.id;
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudDRTechEquipment, docId, flag, ...body });
        const data = res.data;
        dispatch(getDRTechEquipment(null, null));
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