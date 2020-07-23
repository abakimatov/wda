//repCalendarTimeBalance
import { ThunkType } from '@AppStore/types'
import { instance, check_current } from '../Instance'
import { Methods } from '../Methods/methods'
import {
  LOADING_REPORT,
  SET_CONSTRUCTOR_TIME_SHEDULE,
} from '@AppStore/types/actions/actionsReportsReducer'
import { ErrorHandler } from '../ErrorHandler'
import { getUserFields, getUserFrames } from '../UserData/UserData'

export const repConstructionTimeSchedule = (
  startDate: Date,
  endDate: Date,
  isPlan: boolean
): ThunkType => async (dispatch) => {
  dispatch({ type: LOADING_REPORT })
  dispatch(getUserFields())
  dispatch(getUserFrames())
  try {
    const res = await instance(check_current()).post(``, {
      method: Methods.repConstructionTimeSchedule,
      startDate,
      endDate,
      isPlan,
    })
    const data = res.data
    console.error(`response > repConstructionTimeSchedule`, data)
    dispatch({ type: SET_CONSTRUCTOR_TIME_SHEDULE, payload: data })
    dispatch({ type: LOADING_REPORT })
  } catch (err) {
    dispatch(ErrorHandler(err))
    dispatch({ type: LOADING_REPORT })
  }
}
