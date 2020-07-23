import { AppStateType } from '../store'
import { TOrganizations } from '../types/reducers/typesDataReducer'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
//организации
const getOrganizations = (state: AppStateType): TOrganizations[] =>
  state.organizations.organizations
export const selectOrganizations = selector<TOrganizations[]>(getOrganizations)
//columns & forms
const getOrganizationsColumns = (state: AppStateType): TColumn[] =>
  state.organizations.columns
export const selectOrganizationsColumns = selector<TColumn[]>(
  getOrganizationsColumns
)
const getOrganizationsForm = (state: AppStateType): TObjectFormState =>
  state.organizations.form.main
export const selectOrganizationsForm = selector<TObjectFormState>(
  getOrganizationsForm
)
