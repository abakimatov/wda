import { ThunkType, LOADING_DATA, STOP_LOADING_DATA, } from '../../../types';
import { instance, check_current } from '../../Instance';
import { ErrorHandler } from '../../ErrorHandler';
import { SuccessMessage } from '../../Notifications';
import { convertNull, Helper, toggleOpenAddModal } from '../Helpers';
import { TMaterialConsumption } from '../../../types/reducers/typesDayliReportReducer';
import { SET_MATERIAL_CONSUMPTION } from '../../../types/actions/actionsDayliReportReducer';
import { Methods } from '../../Methods/methods';
//PLANS
export const getDRMaterialConsumption = (flag?: string, id?: number) : ThunkType => async(dispatch, getState) => {
    dispatch({ type: LOADING_DATA });
    const docId = getState().data.urlParams.id;
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getDRMaterialConsumption, docId, flag, id });
        const data = res.data;
        dispatch({ type: SET_MATERIAL_CONSUMPTION, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const iudDRMaterialConsumption = (flag?: string, body?: TMaterialConsumption, functionResultPromise?: (result?: boolean, id?: number) => void) : ThunkType => async(dispatch, getState) => {
    dispatch({ type: LOADING_DATA });
    const docId = getState().data.urlParams.id;
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudDRMaterialConsumption, docId, flag, ...body });
        const data = res.data;
        dispatch(getDRMaterialConsumption(null, null));
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