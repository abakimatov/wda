import { createSelector } from 'reselect'
import { AppStateType } from '@AppStore/store'
//get no-mutable data
export function selector<T>(fn: (state: AppStateType) => T) {
  return createSelector(fn, (data) => data)
}
