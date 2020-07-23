import { AppStateType } from '../store'
import {
  TWorkObject,
  TWorkObjectExecutor,
  TWorkObjectHole,
} from '../types/reducers/typesDataReducer'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
//объекты работ
const getWorkObjects = (state: AppStateType): TWorkObject[] =>
  state.data.work_objects_data
export const selectWorkObjects = selector<TWorkObject[]>(getWorkObjects)
//подрядчик объекта работ
const getWorkObjectExecutor = (state: AppStateType): TWorkObjectExecutor[] =>
  state.data.work_objects_executors_data
export const selectWorkObjectExecutor = selector<TWorkObjectExecutor[]>(
  getWorkObjectExecutor
)
//проектная конструкция скважины
const getWorkObjectHoles = (state: AppStateType): TWorkObjectHole[] =>
  state.data.work_objects_holes_data
export const selectWorkObjectHoles = selector<TWorkObjectHole[]>(
  getWorkObjectHoles
)
//columns & forms
const getWorkObjectsColumns = (state: AppStateType): TColumn[] =>
  state.columns.workObject
export const selectWorkObjectColumns = selector<TColumn[]>(
  getWorkObjectsColumns
)
const getWorkObjectsForm = (state: AppStateType): TObjectFormState =>
  state.forms.workObject.main
export const selectWorkObjectForm = selector<TObjectFormState>(
  getWorkObjectsForm
)
//
const getWorkObjectExecutorsColumns = (state: AppStateType): TColumn[] =>
  state.columns.workObjectExecutor
export const selectWorkObjectExecutorsColumns = selector<TColumn[]>(
  getWorkObjectExecutorsColumns
)
const getWorkObjectExecutorsForm = (state: AppStateType): TObjectFormState =>
  state.forms.workObject.executor
export const selectWorkObjectExecutorsForm = selector<TObjectFormState>(
  getWorkObjectExecutorsForm
)
//
const getWorkObjectHolesColumns = (state: AppStateType): TColumn[] =>
  state.columns.workObjectHole
export const selectWorkObjectHolesColumns = selector<TColumn[]>(
  getWorkObjectHolesColumns
)
const getWorkObjectHolesForm = (state: AppStateType): TObjectFormState =>
  state.forms.workObject.hole
export const selectWorkObjectHolesForm = selector<TObjectFormState>(
  getWorkObjectHolesForm
)
//
