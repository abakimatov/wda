import {
  SET_USER_DATA,
  LOADING_USER,
  STOP_LOADING_USER,
  SET_USER_DATA_FRAMES,
  ThunkType,
} from '../../types'
import { instance, check_current } from '../Instance'
import { SuccessMessage } from '../Notifications'
import { ErrorHandler } from '../ErrorHandler'
import { convertNull } from '../Derictories/Helpers'
import { Methods } from '../Methods/methods'
//GET FIELDS
export const getUserFields = (): ThunkType => async (dispatch) => {
  dispatch({ type: LOADING_USER })
  try {
    const res = await instance(check_current()).post(``, {
      method: Methods.getUserInfo,
      flag: null,
    })
    const data = res.data
    const { curOrgId, showRegSection, isSuperAdmin, fields } = data
    dispatch({
      type: SET_USER_DATA,
      payload: convertNull(fields),
      curOrgId: curOrgId,
      showRegSection: showRegSection,
      isSuperAdmin: isSuperAdmin,
    })
    dispatch({ type: STOP_LOADING_USER })
  } catch (err) {
    dispatch(ErrorHandler(err))
    dispatch({ type: STOP_LOADING_USER })
  }
}
//GET FRAMES
export const getUserFrames = (): ThunkType => async (dispatch) => {
  dispatch({ type: LOADING_USER })
  try {
    const res = await instance(check_current()).post(``, {
      method: Methods.getUserInfo,
      flag: 'f',
    })
    const data = res.data 
    const { frames } = data
    console.log(`frames`, JSON.stringify(frames))
    dispatch({ type: SET_USER_DATA_FRAMES, payload: convertNull(frames) })
    dispatch({ type: STOP_LOADING_USER })
  } catch (err) {
    dispatch(ErrorHandler(err))
    dispatch({ type: STOP_LOADING_USER })
  }
}
//SET USER FIELDS
export const setUserInfo = (
  jsonObject: { [key: string]: string },
  handleClose: () => void
): ThunkType => async (dispatch) => {
  dispatch({ type: LOADING_USER })
  try {
    const res = await instance(check_current()).post(``, {
      method: Methods.setUserInfo,
      ...jsonObject,
    })
    const data = res.data
    dispatch(getUserFields())
    dispatch(SuccessMessage(data.successMsg))
    handleClose()
    dispatch({ type: STOP_LOADING_USER })
  } catch (err) {
    dispatch(ErrorHandler(err))
    dispatch({ type: STOP_LOADING_USER })
  }
}
