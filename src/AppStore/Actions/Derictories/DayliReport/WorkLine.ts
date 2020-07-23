import { ThunkType, STOP_LOADING_DATA, LOADING_DATA } from '../../../types';
import { instance, check_current } from '../../Instance';
import { ErrorHandler } from '../../ErrorHandler';
import { SuccessMessage } from '../../Notifications';
import { convertNull, Helper, toggleOpenAddModal } from '../Helpers';
import { SET_WORK_LINE } from '../../../types/actions/actionsDayliReportReducer';
import { TWorkLine } from '../../../types/reducers/typesDayliReportReducer';
import { Methods } from '../../Methods/methods'; 
//PLANS
export const getDRWorkLine = (flag?: string, id?: number) : ThunkType => async(dispatch, getState) => {
    dispatch({ type: LOADING_DATA });
    const docId = getState().data.urlParams.id;
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getDRWorkLine, docId, flag, id });
        const data = res.data;
        dispatch({ type: SET_WORK_LINE, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA }); 
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const iudDRWorkLine = (flag?: string, body?: TWorkLine, functionResultPromise?: (result?: boolean, id?: number) => void) : ThunkType => async(dispatch, getState) => {
    dispatch({ type: LOADING_DATA });
    const docId = getState().data.urlParams.id;
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudDRWorkLine, docId, flag, ...body });
        const data = res.data;
        dispatch(getDRWorkLine(null, null));
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