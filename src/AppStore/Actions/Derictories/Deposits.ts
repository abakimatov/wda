import { ThunkType, STOP_LOADING_DATA, LOADING_DATA } from '../../types';
import { instance, check_current } from '../Instance';
import { ErrorHandler } from '../ErrorHandler';
import { SuccessMessage } from '../Notifications';
import { convertNull, Helper, toggleOpenAddModal } from './Helpers';
import { SET_DEPOSITS_DATA } from '../../types/actions/actionsDataReducer';
import { TDeposit } from '../../types/reducers/typesDataReducer';
import { Methods } from '../Methods/methods';
//PLANS
export const getDeposits = (flag?: string, id?: number) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.getDeposits, flag, id });
        const data = res.data;
        dispatch({ type: SET_DEPOSITS_DATA, flag, id, payload: convertNull(data.list) });
        dispatch({ type: STOP_LOADING_DATA });
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
    }
}
export const iudDeposit = (flag?: string, body?: TDeposit, functionResultPromise?: (result?: boolean, id?: number) => void) : ThunkType => async(dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
        const res = await instance(check_current()).post(``, { method: Methods.iudDeposit, flag, ...body });
        const data = res.data;
        dispatch(getDeposits(flag, data.id));
        dispatch(SuccessMessage(data.successMsg));
        dispatch({ type: STOP_LOADING_DATA });
        //
        if(typeof functionResultPromise === 'function') functionResultPromise();
        if(functionResultPromise && flag === "I") functionResultPromise(true, data.id);
    }
    catch(err){
        dispatch(ErrorHandler(err));
        dispatch({ type: STOP_LOADING_DATA });
        /* if(flag === "I") dispatch(toggleOpenAddModal(false)); */
        if(functionResultPromise && flag === "I") functionResultPromise(false, null);
    }
}