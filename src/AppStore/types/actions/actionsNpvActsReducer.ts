import {
  TNpvCause,
  TNpvActKind,
  TNpvAct,
  TNpvDetail,
} from '../reducers/typesNpvActsReducer'
import { TSortList } from '../reducers/typesDayliReportReducer'
type TBase = {
  flag?: string
  id?: number
}
export const SET_NPV_ACTS_FILTER_LIST = 'SET_NPV_ACTS_FILTER_LIST'
type SET_NPV_ACTS_FILTER_LIST_ACTION = {
  type: typeof SET_NPV_ACTS_FILTER_LIST
  payload: TSortList[]
} & TBase
export const SET_NPV_ACT_DETAILS = 'SET_NPV_ACT_DETAILS'
type SET_NPV_ACT_DETAILS_ACTION = {
  type: typeof SET_NPV_ACT_DETAILS
  payload: TNpvDetail[]
} & TBase
export const SET_NPV_ACT_KINDS = 'SET_NPV_ACT_KINDS'
type SET_NPV_ACT_KINDS_ACTION = {
  type: typeof SET_NPV_ACT_KINDS
  payload: TNpvActKind[]
} & TBase
export const SET_NPV_ACTS = 'SET_NPV_ACTS'
type SET_NPV_ACTS_ACTION = {
  type: typeof SET_NPV_ACTS
  payload: TNpvAct[]
} & TBase
export const SET_NPV_CAUSES = 'SET_NPV_CAUSES'
type SET_NPV_CAUSES_ACTION = {
  type: typeof SET_NPV_CAUSES
  payload: TNpvCause[]
} & TBase
export type NPV_ACTS_REDUCER_ACTIONS =
  | SET_NPV_ACT_DETAILS_ACTION
  | SET_NPV_ACT_KINDS_ACTION
  | SET_NPV_ACTS_ACTION
  | SET_NPV_CAUSES_ACTION
  | SET_NPV_ACTS_FILTER_LIST_ACTION
