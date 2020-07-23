import {
  REPORTS_REDUCER_ACTIONS,
  LOADING_REPORT,
  STOP_LOADING_REPORT,
  SET_DEPTH_DAY_GRAPH,
  SET_CALENDAR_TIME_BALANCE,
  SET_CALENDAR_TIME_BALANCE_DIAG,
  SET_CONSTRUCTOR_TIME_SHEDULE,
  SET_CONSTRUCTOR_TIME_SHEDULE_SHORT,
  SET_DAY_SUMMARY,
} from '@AppStore/types/actions/actionsReportsReducer'
import { TReportReducer } from '@AppStore/types/reducers/typesReportsReducer'

type InitialState = TReportReducer

const initialState: TReportReducer = {
  DepthDayGraph: { drivingList: [], pDepth: null },
  calendarTimeBalance: [],
  calendarTimeBalanceDiag: [],
  constructorTimeShedule: [],
  constructorTimeSheduleShort: [],
  daySummary: [],
  loading: false,
}

export const reportsReducer = (
  state = initialState, 
  action: REPORTS_REDUCER_ACTIONS
): InitialState => {
  switch (action.type) {
    case LOADING_REPORT:
      return {
        ...state,
        loading: true,
      }
    case STOP_LOADING_REPORT:
      return {
        ...state,
        loading: true,
      }
    case SET_DAY_SUMMARY:
      return {
        ...state,
        daySummary: action.payload,
      }
    case SET_CALENDAR_TIME_BALANCE_DIAG:
      return {
        ...state,
        calendarTimeBalanceDiag: action.payload,
      }
    case SET_CALENDAR_TIME_BALANCE:
      return {
        ...state,
        calendarTimeBalance: action.payload,
      }
    case SET_DEPTH_DAY_GRAPH:
      return {
        ...state,
        DepthDayGraph: action.payload,
      }
    case SET_CONSTRUCTOR_TIME_SHEDULE:
      return {
        ...state,
        constructorTimeShedule: action.payload,
      }
    case SET_CONSTRUCTOR_TIME_SHEDULE_SHORT:
      return {
        ...state,
        constructorTimeSheduleShort: action.payload,
      }
    default:
      return state
  }
}
