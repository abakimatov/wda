import { AppStateType } from '../store'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
//организации
const getPerformens = (state: AppStateType): any[] =>
  state.performers.performens
export const selectPerformens = selector<any[]>(getPerformens)
//columns & forms
const getPerformensColumns = (state: AppStateType): TColumn[] =>
  state.performers.columns
export const selectPerformensColumns = selector<TColumn[]>(getPerformensColumns)
const getPerformensForm = (state: AppStateType): TObjectFormState =>
  state.performers.form.main
export const selectPerformensForm = selector<TObjectFormState>(
  getPerformensForm
)
