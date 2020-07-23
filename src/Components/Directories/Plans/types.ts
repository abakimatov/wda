import { IDefaultMapDispatch, IDefaultMapState } from '../types'
import {
  TPlan,
  TWorkObject,
  TOrganizations,
  TScenario,
} from '@AppStore/types/reducers/typesDataReducer'
import { TSortList } from '@AppStore/types/reducers/typesDayliReportReducer'
type bodyPlansFilteredDataFromIdsParam = {
  workObjectId: number
  orgId: number
  scenarioId: number
}
export interface IMapStatePlans extends IDefaultMapState {
  data: TPlan[]
  workObjects: TWorkObject[]
  organizations: TOrganizations[]
  scenarios: TScenario[]
  sortList: TSortList[]
  orgId: number
}
export interface IMapDispatchPlans extends IDefaultMapDispatch {
  getPlans: () => void
  iudPlan: () => void
  getWorkObjects: () => void
  getOrganizations: () => void
  getScenarios: () => void
  getDocPlanFilterList: () => void
  getDocPlanFilterListData: (name: string, objId: number) => void
  getPlansFilteredDataFromIdsParam: (
    body: bodyPlansFilteredDataFromIdsParam
  ) => void
}
