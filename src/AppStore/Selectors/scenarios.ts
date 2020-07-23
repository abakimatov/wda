import { TScenario } from '../types/reducers/typesDataReducer'
import { AppStateType } from '../store'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
//пользователи
const getScenarios = (state: AppStateType): TScenario[] => state.data.scenarios
export const selectScenarios = selector<TScenario[]>(getScenarios)
//columns & forms
const geScenariosColumns = (state: AppStateType): TColumn[] =>
  state.columns.scenarios
export const selectScenariosColumns = selector<TColumn[]>(geScenariosColumns)
const geScenariosForm = (state: AppStateType): TObjectFormState =>
  state.forms.scenarios.main
export const selectScenariosForm = selector<TObjectFormState>(geScenariosForm)
