import { TBaseTable } from '../baseTypes'

export const SET_PERFORMENS = 'SET_PERFORMENS'
type SET_PERFORMENS_ACTION = {
  type: typeof SET_PERFORMENS
  payload: any[]
}
export type TPerformen = { id: number }
/* REDUCER */
export type TPerformensReducer = {
  performens: any[]
} & TBaseTable

export type PERFORMENTS_REDUDER_ACTIONS = SET_PERFORMENS_ACTION
