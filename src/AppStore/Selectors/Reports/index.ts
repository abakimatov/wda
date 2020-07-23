import { AppStateType } from '@AppStore/store'
import { selector } from '../instance'
import { TDepthDayGraph } from '@AppStore/types/reducers/typesReportsReducer'
import { TObjectFormState } from '@AppStore/Reducers/FormsReducers/types'

const getRepDepthDayGraph = (state: AppStateType): TDepthDayGraph =>
  state.reports.DepthDayGraph
export const selectRepDepthDayGraph = selector<TDepthDayGraph>(
  getRepDepthDayGraph
)
const getRepDepthDayGraphForms = (state: AppStateType): TObjectFormState =>
  state.forms.depthDayGraph.main
export const selectRepDepthDayGraphForms = selector<TObjectFormState>(
  getRepDepthDayGraphForms
)
