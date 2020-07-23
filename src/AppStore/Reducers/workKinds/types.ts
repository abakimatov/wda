import { TWorkKind } from '@AppStore/types/reducers/typesDataReducer'
import { TBaseTable } from '../baseTypes'

export const SET_WORK_KINDS_DATA = 'SET_WORK_KINDS_DATA'
type SET_WORK_KINDS_DATA_ACTION = {
  type: typeof SET_WORK_KINDS_DATA
  flag?: string
  id?: number
  payload: TWorkKind[]
}
export const SET_WORK_KINDS_FOLDERS = 'SET_WORK_KINDS_FOLDERS'
type SET_WORK_KINDS_FOLDERS_ACTION = {
  type: typeof SET_WORK_KINDS_FOLDERS
  payload: any[]
}
/* REDUCER */
export type TWorkKindsReducer = {
  workKinds: TWorkKind[]
  folders: any[]
} & TBaseTable
export type WORK_KINDS_REDUCER_ACTIONS =
  | SET_WORK_KINDS_DATA_ACTION
  | SET_WORK_KINDS_FOLDERS_ACTION
