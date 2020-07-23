import { TWorkObject, TScenario } from '@AppStore/types/reducers/typesDataReducer'
import { TDepthDayGraph } from '@AppStore/types/reducers/typesReportsReducer'
import { TObjectFormState } from '@AppStore/Reducers/FormsReducers/types'

export type TrepDepthDayGraphState = {
  workObjectId: number
  scenarioId: number
  startDate: Date
  endDate: Date
}
export type TrepDepthDayGraphProps = TrepDepthDayGraphMapState &
  TrepDepthDayGraphMapDispatch
export type TrepDepthDayGraphMapState = {
  DepthDayGraph: TDepthDayGraph
  workObjects: TWorkObject[]
  scenarios: TScenario[]
  forms: TObjectFormState
}
type TrepDepthDayGraphMapDispatch = {
  repDepthDayGraph: (
    workObjectId: number,
    scenarioId: number,
    startDate: Date,
    endDate: Date
  ) => Promise<void>
  getWorkObjects: () => Promise<void>
  getScenarios: () => Promise<void>
  setTitleToNavbar: (title: string) => void
  getUserFrames: () => void
  getUserFields: () => void
}
