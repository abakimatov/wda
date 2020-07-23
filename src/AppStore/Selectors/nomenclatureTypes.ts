import { TNomenclatureType } from '../types/reducers/typesDataReducer'
import { AppStateType } from '../store'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
//проекты
const getNomenclatureTypes = (state: AppStateType): TNomenclatureType[] =>
  state.data.nomenclature_types
export const selectNomenclatureTypes = selector<TNomenclatureType[]>(
  getNomenclatureTypes
)
//columns & forms
const getNomenclatureTypesColumns = (state: AppStateType): TColumn[] =>
  state.columns.nomenclatureTypes
export const selectNomenclatureTypesColumns = selector<TColumn[]>(
  getNomenclatureTypesColumns
)
const getNomenclatureTypesForm = (state: AppStateType): TObjectFormState =>
  state.forms.nomenclatureTypes.main
export const selectNomenclatureTypesForm = selector<TObjectFormState>(
  getNomenclatureTypesForm
)
