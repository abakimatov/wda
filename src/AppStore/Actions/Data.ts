import {
  LOADING_DATA,
  STOP_LOADING_DATA,
  ERROR_CONNECTRION_FALSE,
  ERROR_CONNECTRION_TRUE,
  SET_CONFIRM_MESSAGE,
  //
  ThunkType,
  DispatchType,
} from '../types'
import { instance, check_current } from './Instance'
import { ErrorMessage, SuccessMessage } from './Notifications'
import {
  SET_CHECKED_ITEM_FROM_TABLES_ACTION,
  SET_CHECKED_ITEM_FROM_TABLES,
} from '@AppStore/types/actions/actionsDataReducer'
import { ActionCreator } from 'redux'

//confirm document
export const setDocumentStatus = (
  docId: number,
  toCheck: boolean,
  flag: string,
  onClose: () => void
): ThunkType => async (dispatch) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await instance(check_current()).post(``, {
      method: 'setDocumentStatus',
      docId,
      toCheck,
      flag,
    })
    const data = res.data
    onClose()
    dispatch({ type: SET_CONFIRM_MESSAGE, payload: data.successMsg })
    //dispatch(getDerictories("getContracts"));
    //dispatch(getDerictories("getDailyReports"));
    //dispatch(GetDocDetails("contract", docId));
    dispatch({ type: STOP_LOADING_DATA })
  } catch (err) {
    if (err.response !== undefined) {
      onClose()
      dispatch(ErrorMessage(err.response.data.strErrorMessage))
    }
    dispatch({ type: STOP_LOADING_DATA })
  }
}
//справочники = детали
export const iudDerictoriesDetails = (
  type: string,
  jsonObject: any,
  updateDetails?: () => void
): ThunkType => async (dispatch, getState) => {
  const isConnected = getState().UI.isConnected
  const isCycle = getState().UI.cycle
  dispatch({ type: LOADING_DATA })
  try {
    const res = await instance(check_current()).post(``, {
      method: type,
      ...jsonObject,
    })
    const data = res.data
    if (data.successMsg) dispatch(SuccessMessage(data.successMsg))
    if (updateDetails) updateDetails()
    dispatch({ type: ERROR_CONNECTRION_FALSE })
    dispatch({ type: STOP_LOADING_DATA })
    console.error('Result of iudDerictoriesDetails', data)
    switch (type) {
      default:
        if (!type)
          return console.log('type of iudDerictoriesDetails', undefined)
    }
  } catch (err) {
    if (
      err.config &&
      err.config.url &&
      !isConnected &&
      isCycle &&
      !err.response
    ) {
      let data = JSON.parse(err.config.data)
      console.error(data)
      setTimeout(() => {
        if (!isConnected && isCycle) {
          dispatch(
            iudDerictoriesDetails(data.method, { ...data }, updateDetails)
          )
        }
      }, 6000)
      dispatch({ type: ERROR_CONNECTRION_TRUE })
      dispatch({ type: LOADING_DATA })
      return Promise.reject(
        'Обрыв соединения с сетью. Данные будут отправлены при восстановлении соединения, не закрывайте приложение'
      )
    } else if (err.response !== undefined) {
      dispatch(ErrorMessage(err.response.data.strErrorMessage))
      dispatch({ type: STOP_LOADING_DATA })
      dispatch({ type: ERROR_CONNECTRION_FALSE })
      return Promise.reject(err.response.data.strErrorMessage)
    }
    //if(handleSuccessEdits) handleSuccessEdits();
    dispatch({ type: STOP_LOADING_DATA })
  }
}
//data handle table
export const setCheckedItemFromTables = (item: any) => (
  dispatch: DispatchType
) => {
  const action = setCheckedItemFromTablesAction(item)
  dispatch(action)
}
const setCheckedItemFromTablesAction: ActionCreator<SET_CHECKED_ITEM_FROM_TABLES_ACTION> = (
  item: any
) => ({
  type: SET_CHECKED_ITEM_FROM_TABLES,
  payload: item,
})
