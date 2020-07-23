import { TWorkClassifier } from '@AppStore/types/reducers/typesDataReducer'
import { TBaseTable } from '../baseTypes'

export const SET_WORK_CLASSIFIER_DATA = 'SET_WORK_CLASSIFIER_DATA'
type SET_WORK_CLASSIFIER_DATA_ACTION = {
  type: typeof SET_WORK_CLASSIFIER_DATA
  flag?: string
  id?: number
  payload: TWorkClassifier[]
}
export type TWorkClassifierReducer = {
  workClassifier: TWorkClassifier[]
} & TBaseTable
export type WORK_CLASSIFIER_REDUCER_ACTIONS = SET_WORK_CLASSIFIER_DATA_ACTION
