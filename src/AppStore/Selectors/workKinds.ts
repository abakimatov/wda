import { TWorkKind } from '../types/reducers/typesDataReducer'
import { AppStateType } from '../store'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
//виды работ
const getWorkKinds = (state: AppStateType): TWorkKind[] =>
  state.workKinds.workKinds
export const selectWorkKinds = selector<TWorkKind[]>(getWorkKinds)
//columns & forms
const geWorkKindsColumns = (state: AppStateType): TColumn[] =>
  state.workKinds.columns
export const selectWorkKindsColumns = selector<TColumn[]>(geWorkKindsColumns)
const geWorkKindsForm = (state: AppStateType): TObjectFormState =>
  state.workKinds.form.main
export const selectWorkKindsForm = selector<TObjectFormState>(geWorkKindsForm)
