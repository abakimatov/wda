import { TWorkClassifier } from '../types/reducers/typesDataReducer'
import { AppStateType } from '../store'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
//пользователи
const getWorkClassifier = (state: AppStateType): TWorkClassifier[] =>
  state.workClassifier.workClassifier
export const selectWorkClassifier = selector<TWorkClassifier[]>(
  getWorkClassifier
)
//columns & forms
const geWorkClassifierColumns = (state: AppStateType): TColumn[] =>
  state.workClassifier.columns
export const selectWorkClassifierColumns = selector<TColumn[]>(
  geWorkClassifierColumns
)
const geWorkClassifierForm = (state: AppStateType): TObjectFormState =>
  state.workClassifier.form.main
export const selectWorkClassifierForm = selector<TObjectFormState>(
  geWorkClassifierForm
)
