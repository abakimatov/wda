//repCalendarTimeBalance
import { ThunkType } from '@AppStore/types'
import { instance, check_current } from '../Instance'
import { Methods } from '../Methods/methods'
import {
  LOADING_REPORT,
  SET_CALENDAR_TIME_BALANCE,
} from '@AppStore/types/actions/actionsReportsReducer'
import { ErrorHandler } from '../ErrorHandler'
import { convertNull } from '../Derictories/Helpers'
import { getUserFrames, getUserFields } from '../UserData/UserData'

export const repCalendarTimeBalance = (
  startDate: Date,
  endDate: Date
): ThunkType => async (dispatch) => {
  dispatch({ type: LOADING_REPORT })
  dispatch(getUserFields())
  dispatch(getUserFrames())
  try {
    const res = await instance(check_current()).post(``, {
      method: Methods.repCalendarTimeBalance,
      startDate,
      endDate,
      isPlan: true,
    })
    const data = res.data
    console.error(`response > repCalendarTimeBalance`, data)
    dispatch({ type: SET_CALENDAR_TIME_BALANCE, payload: convertNull(data.list) })
    dispatch({ type: LOADING_REPORT })
  } catch (err) {
    dispatch(ErrorHandler(err))
    dispatch({ type: LOADING_REPORT })
  }
}
