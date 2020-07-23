import {
  TContract,
  TContractDetail,
} from '@AppStore/types/reducers/typesDataReducer'
import { TSortList } from '@AppStore/types/reducers/typesDayliReportReducer'
import { TBaseTable } from '../baseTypes'
import { TColumn } from '../ColumnsReducers/types'
/* ACTION TYPES */
export const SET_CONTRACTS_DATA = 'SET_CONTRACTS_DATA'
type SET_CONTRACTS_DATA_ACTION = {
  type: typeof SET_CONTRACTS_DATA
  flag?: string
  id?: number
  payload: TContract[]
}
export const SET_CONTRACT_SORT_LIST = 'SET_CONTRACT_SORT_LIST'
type SET_CONTRACT_SORT_LIST_ACTION = {
  type: typeof SET_CONTRACT_SORT_LIST
  payload: TSortList[]
}

export const SET_DETAILS_CONTRACT = 'SET_DETAILS_CONTRACT'
type SET_DETAILS_CONTRACT_ACTION = {
  type: typeof SET_DETAILS_CONTRACT
  flag?: string
  id?: number
  payload: TContractDetail[]
}
/* REDUCER TYPE */
export type TContractsReducer = {
  contracts: TContract[]
  details: TContractDetail[]
  columnsDetails: TColumn[]
} & TBaseTable
export type CONTRACT_REDUCER_ACTIONS =
  | SET_CONTRACTS_DATA_ACTION
  | SET_CONTRACT_SORT_LIST_ACTION
  | SET_DETAILS_CONTRACT_ACTION
