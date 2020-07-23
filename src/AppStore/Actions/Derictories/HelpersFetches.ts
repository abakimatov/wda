import { ThunkType, STOP_LOADING_DATA, LOADING_DATA } from '../../types';
import { instance, check_current } from "../Instance";
import { ErrorHandler } from "../ErrorHandler";
import { SET_BKV_TYPES } from '../../types/actions/actionsDataReducer';
import { Methods } from '../Methods/methods';

export const getBkvtypes = (): ThunkType => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  try {
    const res = await instance(check_current()).post(``, {
      method: Methods.getBkvTypes,
    });
    const data = res.data;
    dispatch({ type: SET_BKV_TYPES, payload: data.list });
    dispatch({ type: STOP_LOADING_DATA });
  } catch (err) {
    dispatch(ErrorHandler(err));
    dispatch({ type: STOP_LOADING_DATA });
  }
};
