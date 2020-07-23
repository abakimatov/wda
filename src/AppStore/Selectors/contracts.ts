import { TContract, TContractDetail } from '../types/reducers/typesDataReducer'
import { AppStateType } from '../store'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
import { TSortList } from '@AppStore/types/reducers/typesDayliReportReducer'
//договоры
const getContracts = (state: AppStateType): TContract[] =>
  state.contracts.contracts
export const selectContracts = selector<TContract[]>(getContracts)
//детали договора
const getContractsDetails = (state: AppStateType): TContractDetail[] =>
  state.contracts.details
export const selectContractsDetails = selector<TContractDetail[]>(
  getContractsDetails
)
//columns & forms
const getContractsColumns = (state: AppStateType): TColumn[] =>
  state.contracts.columns
export const selectContractsColumns = selector<TColumn[]>(getContractsColumns)
const getContractsForm = (state: AppStateType): TObjectFormState =>
  state.contracts.form.main
export const selectContractsForm = selector<TObjectFormState>(getContractsForm)
const getContractsDetailsColumns = (state: AppStateType): TColumn[] =>
  state.contracts.columnsDetails
export const selectContractsDetailsColumns = selector<TColumn[]>(
  getContractsDetailsColumns
)
const getContractsDetailsForm = (state: AppStateType): TObjectFormState =>
  state.contracts.form.details
export const selectContractsDetailsForm = selector<TObjectFormState>(
  getContractsDetailsForm
)
//filters
const getContractsFilterForms = (state: AppStateType): TObjectFormState =>
  state.contracts.form.filter
export const selectContractsFilterForms = selector<TObjectFormState>(
  getContractsFilterForms
)
//sort list
const getContractsSortList = (state: AppStateType): TSortList[] =>
  state.contracts.sortList
export const selectContractsSortList = selector<TSortList[]>(
  getContractsSortList
)
