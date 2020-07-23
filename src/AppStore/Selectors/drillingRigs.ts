import { TDrillingRig } from '../types/reducers/typesDataReducer'
import { AppStateType } from '../store'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
//буровые установки
const getDrillingRigs = (state: AppStateType): TDrillingRig[] =>
  state.drillingRigs.drillingRigs
export const selectDrillingRigs = selector<TDrillingRig[]>(getDrillingRigs)
//columns & forms
const getDrillingRigsColumns = (state: AppStateType): TColumn[] =>
  state.drillingRigs.columns
export const selectDrillingRigsColumns = selector<TColumn[]>(
  getDrillingRigsColumns
)
const getDrillingRigsForm = (state: AppStateType): TObjectFormState =>
  state.drillingRigs.form.main
export const selectDrillingRigsForm = selector<TObjectFormState>(
  getDrillingRigsForm
)
