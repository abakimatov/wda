import { ThunkType } from '@AppStore/types'
import { instance, check_current } from '../Instance'
import { Methods } from '../Methods/methods'
import {
  LOADING_REPORT,
  SET_DEPTH_DAY_GRAPH,
} from '@AppStore/types/actions/actionsReportsReducer'
import { ErrorHandler } from '../ErrorHandler'
import { getUserFields, getUserFrames } from '../UserData/UserData'

export const repDepthDayGraph = (
  workObjectId: number,
  scenarioId: number,
  startDate: Date,
  endDate: Date
): ThunkType => async (dispatch) => {
  console.log(
    `JSON...`,
    JSON.stringify({
      workObjectId,
      scenarioId,
      startDate,
      endDate,
    })
  )
  dispatch({ type: LOADING_REPORT })
  dispatch(getUserFields())
  dispatch(getUserFrames())
  try {
    const res = await instance(check_current()).post(``, {
      method: Methods.repDepthDayGraph,
      workObjectId,
      scenarioId,
      startDate,
      endDate,
    })
    const data = res.data
    console.error(`response > repDepthDayGraph`, data)
    dispatch({ type: SET_DEPTH_DAY_GRAPH, payload: data })
    dispatch({ type: LOADING_REPORT })
  } catch (err) {
    dispatch(ErrorHandler(err))
    dispatch({ type: LOADING_REPORT })
  }
}
