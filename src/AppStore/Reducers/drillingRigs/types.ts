import { TDrillingRig } from '@AppStore/types/reducers/typesDataReducer'
import { TObjectFormState } from '../FormsReducers/types'
import { TColumn } from '../ColumnsReducers/types'
import { TBaseTable } from '../baseTypes'

export const SET_DRILLING_RIGS_DATA = 'SET_DRILLING_RIGS_DATA'
type SET_DRILLING_RIGS_DATA_ACTION = {
  type: typeof SET_DRILLING_RIGS_DATA
  flag?: string
  id?: number
  payload: TDrillingRig[]
}
export type TDrillingRigsReducer = {
  drillingRigs: TDrillingRig[]
} & TBaseTable
export type DRILLING_RIGS_REDUCER_ACTIONS = SET_DRILLING_RIGS_DATA_ACTION
