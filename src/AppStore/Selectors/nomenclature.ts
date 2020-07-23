import { TNomenclature } from '../types/reducers/typesDataReducer'
import { AppStateType } from '../store'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
//проекты
const getNomenclature = (state: AppStateType): TNomenclature[] =>
  state.data.nomenclature_data
export const selectNomenclature = selector<TNomenclature[]>(getNomenclature)
//columns & forms
const getNomenclatureColumns = (state: AppStateType): TColumn[] =>
  state.columns.nomenclature
export const selectNomenclatureColumns = selector<TColumn[]>(
  getNomenclatureColumns
)
const getNomenclatureForm = (state: AppStateType): TObjectFormState =>
  state.forms.nomenclature.main
export const selectNomenclatureForm = selector<TObjectFormState>(
  getNomenclatureForm
)
