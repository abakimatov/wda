import { ThunkType } from '@AppStore/types'
import { instance, check_current } from '../Instance'
import { Methods } from '../Methods/methods'
import {
  LOADING_REPORT,
  SET_DAY_SUMMARY,
} from '@AppStore/types/actions/actionsReportsReducer'
import { ErrorHandler } from '../ErrorHandler'
import { getUserFields, getUserFrames } from '../UserData/UserData'
//@ts-ignore
import dayjs from 'dayjs'
import { convertNull } from '../Derictories/Helpers'

export const repDaySummary = (date: Date): ThunkType => async (dispatch) => {
  dispatch({ type: LOADING_REPORT })
  dispatch(getUserFields())
  dispatch(getUserFrames())
  try {
    const res = await instance(check_current()).post(``, {
      method: Methods.repDaySummary,
      date,
    })
    const data = res.data 
    console.error(`response > repDaySummary`, data)
    console.log(JSON.stringify(data.list))
    dispatch({ type: SET_DAY_SUMMARY, payload: convertNull(data.list) })
    dispatch({ type: LOADING_REPORT })
  } catch (err) {
    dispatch(ErrorHandler(err))
    dispatch({ type: LOADING_REPORT })
  }
}
