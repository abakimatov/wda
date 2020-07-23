import { TOrganizations } from '@AppStore/types/reducers/typesDataReducer'
import { TBaseTable } from '../baseTypes'

export const SET_ORGANIZATIONS = 'SET_ORGANIZATIONS'
export type SET_ORGANIZATIONS_ACTION = {
  type: typeof SET_ORGANIZATIONS
  flag?: string
  id?: null | number
  payload: Array<TOrganizations>
}
export type TOrganizationReducer = {
  organizations: TOrganizations[]
} & TBaseTable
export type ORGANIZATIONS_REDUCER_ACTIONS = SET_ORGANIZATIONS_ACTION
