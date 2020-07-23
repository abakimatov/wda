import {
  SET_LOGIN_TYPE,
  SET_ROLES_TYPE,
  SET_TITLE_TO_NAVBAR,
  ERROR_CONNECTRION_FALSE,
  LOADING_DATA,
  STOP_LOADING_DATA,
  CYCLE,
  SET_LICENSE_PARAMS,
  SET_STATUSES_DAYLI_REPORT,
  TOGGLE_CONFIRM_OPEN_DIALOG,
  TOGGLE_OPEN_MOVED_ITEMS_IN_TABLES,
  //
  ThunkType,
  DispatchType,
} from '../types'
import { instance, check_default, check_current } from './Instance'
import { ErrorMessage } from './Notifications'
import { ActionCreator } from 'redux'

export const setLoginType = (): ThunkType => async (dispatch) => {
  try {
    const res = await instance(check_default()).post(``, {
      method: 'getParam',
      name: 'is_mask',
    })
    const data = res.data
    console.log(`result of setLoginType:`, data)
    dispatch({ type: SET_LOGIN_TYPE, payload: data.value })
  } catch (err) {
    if (err.response !== undefined) {
      dispatch(ErrorMessage(err.response.data.strErrorMessage))
    }
  }
}

export const getRoles = (): ThunkType => async (dispatch) => {
  try {
    const res = await instance(check_default()).post(``, { method: 'getRoles' })
    const data = res.data
    console.log(`result of getRoles:`, data)
    dispatch({ type: SET_ROLES_TYPE, payload: data.list })
  } catch (err) {
    if (err.response !== undefined) {
      dispatch(ErrorMessage(err.response.data.strErrorMessage))
    }
  }
}
export const setTitleToNavbar = (title: string) => (dispatch: DispatchType) => {
  dispatch({ type: SET_TITLE_TO_NAVBAR, payload: title })
  document.title = title
}
export const cancleCycleErrorConnected = () => (dispatch: DispatchType) => {
  dispatch({ type: CYCLE, payload: false })
  dispatch({ type: ERROR_CONNECTRION_FALSE })
  dispatch({ type: STOP_LOADING_DATA })
}

export const getLicenseParams = (): ThunkType => async (dispatch) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await instance(check_current()).post(``, {
      method: 'getLicenseParams',
    })
    const data = res.data
    console.log(`result of getLicenseParams`, data)
    dispatch({ type: SET_LICENSE_PARAMS, payload: data })
  } catch (err) {
    dispatch({ type: SET_LICENSE_PARAMS, payload: {} })
    dispatch({ type: STOP_LOADING_DATA })
  }
}
export const getStatuses = () => async (dispatch: DispatchType) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await instance(check_current()).post(``, {
      method: 'getStatuses',
      flag: 'dr',
    })
    const data = res.data.list ? res.data.list : []
    dispatch({ type: SET_STATUSES_DAYLI_REPORT, payload: data })
    dispatch({ type: STOP_LOADING_DATA })
  } catch (err) {
    dispatch({ type: SET_STATUSES_DAYLI_REPORT, payload: [] })
    dispatch({ type: STOP_LOADING_DATA })
  }
}
export const documentBlocking = (flag: string, id: number): ThunkType => async (
  dispatch
) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await instance(check_current()).post(``, {
      method: 'documentBlocking',
      flag,
      id,
    })
    console.error(`documentBlocking`, res.data)
    dispatch({ type: STOP_LOADING_DATA })
    return res.data
  } catch (err) {
    dispatch({ type: STOP_LOADING_DATA })
  }
}
export const toggleConfirmOpenDialog = (open: boolean) => (
  dispatch: DispatchType
) => {
  dispatch({
    type: TOGGLE_CONFIRM_OPEN_DIALOG,
    payload: open,
  })
}
