import { TUnits } from '../types/reducers/typesDataReducer'
import { AppStateType } from '../store'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
//пользователи
const getUnits = (state: AppStateType): TUnits[] => state.data.units_data
export const selectUnits = selector<TUnits[]>(getUnits)
//columns & forms
const geUnitsColumns = (state: AppStateType): TColumn[] => state.columns.unit
export const selectUnitsColumns = selector<TColumn[]>(geUnitsColumns)
const geUnitsForm = (state: AppStateType): TObjectFormState =>
  state.forms.unit.main
export const selectUnitsForm = selector<TObjectFormState>(geUnitsForm)
