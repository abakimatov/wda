import { ThunkType, STOP_LOADING_DATA, LOADING_DATA } from '../../../types'
import {
  SET_DAYLI_REPORT_TYPES,
  SET_DAYLI_REPORT_KINDS,
  SET_DAYLI_REPORT_WORK_STAGES,
} from '../../../types/actions/actionsDayliReportReducer'
import { instance, check_current } from '../../Instance'
import { Methods } from '../../Methods/methods'
import { convertNull } from '../Helpers'
import { getDailyReports } from './DaylyReport'
import { getNpvActs } from '../NvpActs/NpvActs'
import { getPlans } from '../Plans'

export const getDReportTypes = (): ThunkType => async (dispatch) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await instance(check_current()).post(``, {
      method: Methods.getDReportTypes,
    })
    const payload = convertNull(res.data.list)
    dispatch({ type: SET_DAYLI_REPORT_TYPES, payload })
    dispatch({ type: STOP_LOADING_DATA })
  } catch (err) {
    dispatch({ type: STOP_LOADING_DATA })
  }
}
export const getDReportKinds = (): ThunkType => async (dispatch) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await instance(check_current()).post(``, {
      method: Methods.getDReportKinds,
    })
    const payload = convertNull(res.data.list)
    dispatch({ type: SET_DAYLI_REPORT_KINDS, payload })
    dispatch({ type: STOP_LOADING_DATA })
  } catch (err) {
    dispatch({ type: STOP_LOADING_DATA })
  }
}
export const getWorkStages = (): ThunkType => async (dispatch) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await instance(check_current()).post(``, {
      method: Methods.getWorkStages,
    })
    const payload = convertNull(res.data.list)
    dispatch({ type: SET_DAYLI_REPORT_WORK_STAGES, payload })
    dispatch({ type: STOP_LOADING_DATA })
  } catch (err) {
    dispatch({ type: STOP_LOADING_DATA })
  }
}
//! COPY DOC
export const copyDocument = (docId: number, type: string): ThunkType => async (
  dispatch
) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await instance(check_current()).post(``, {
      method: Methods.copyDocument,
      docId,
    })
    if (type === 'dayliReport') dispatch(getDailyReports(null, null))
    if (type === 'npvAct') dispatch(getNpvActs(null, null))
    if (type === 'plan') dispatch(getPlans(null, null))
    dispatch({ type: STOP_LOADING_DATA })
  } catch (err) {
    dispatch({ type: STOP_LOADING_DATA })
  }
}
