import { TDeposit } from '../types/reducers/typesDataReducer'
import { AppStateType } from '../store'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
//месторождения
const getDeposits = (state: AppStateType): TDeposit[] =>
  state.data.deposits_data
export const selectDeposits = selector<TDeposit[]>(getDeposits)
//columns & forms
const getDepositsColumns = (state: AppStateType): TColumn[] =>
  state.columns.deposit
export const selectDepositsColumns = selector<TColumn[]>(getDepositsColumns)
const getDepositsForm = (state: AppStateType): TObjectFormState =>
  state.forms.deposit.main
export const selectDepositsForm = selector<TObjectFormState>(getDepositsForm)
