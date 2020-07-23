import { TProject } from '../types/reducers/typesDataReducer'
import { AppStateType } from '../store'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
//проекты
const getProjects = (state: AppStateType): TProject[] =>
  state.data.projects_data
export const selectProjects = selector<TProject[]>(getProjects)
//columns & forms
const getProjectsColumns = (state: AppStateType): TColumn[] =>
  state.columns.project
export const selectProjectsColumns = selector<TColumn[]>(getProjectsColumns)
const getProjectsForm = (state: AppStateType): TObjectFormState =>
  state.forms.project.main
export const selectProjectsForm = selector<TObjectFormState>(getProjectsForm)
