import { TMortarType } from '../types/reducers/typesDataReducer'
import { AppStateType } from '../store'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
//проекты
const getMortarTypes = (state: AppStateType): TMortarType[] =>
  state.data.mortar_types
export const selectMortarTypes = selector<TMortarType[]>(getMortarTypes)
//columns & forms
const getMortarTypesColumns = (state: AppStateType): TColumn[] =>
  state.columns.mortarTypes
export const selectMortarTypesColumns = selector<TColumn[]>(
  getMortarTypesColumns
)
const getMortarTypesForm = (state: AppStateType): TObjectFormState =>
  state.forms.mortarTypes.main
export const selectMortarTypesForm = selector<TObjectFormState>(
  getMortarTypesForm
)
