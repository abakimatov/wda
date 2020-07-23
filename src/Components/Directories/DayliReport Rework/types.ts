import { IDefaultMapDispatch, IDefaultMapState } from '../types'
import {
  TDayliReport,
  TDayliReportType,
  TDayliReportKind,
  TSortList,
  TWorkStage,
} from '@AppStore/types/reducers/typesDayliReportReducer'
import {
  TWorkObject,
  TOrganizations,
} from '@AppStore/types/reducers/typesDataReducer'
//dayli reports container
type bodySortListDataFromIdsParam = {
  workObjectId: number
  customerId: number
  workKindId: number
}
export interface IMapStateDR extends IDefaultMapState {
  data: TDayliReport[]
  workObjects: TWorkObject[]
  organizations: TOrganizations[]
  sortList: TSortList[]
  workStages: TWorkStage[]
}
export interface IMapDispatchDR extends IDefaultMapDispatch {
  getWorkObjects: () => void
  getOrganizations: () => void
  getDailyReports: (flag?: string, id?: number) => void
  iudDailyReport: () => void
  getDailyReportSortList: () => void
  getDailyReportSortListData: (flag: string, objId: number) => void
  getDailyReportSortListDataFromIdsParam: (
    body: bodySortListDataFromIdsParam
  ) => void
  getWorkStages: () => void
}
//dayli report
export interface IMapStateDRSingle extends IDefaultMapState {
  data: TDayliReport[]
  drId: number
  isLoading: boolean
  workObjects: TWorkObject[]
  dayliReportTypes: TDayliReportType[]
  dayliReportKinds: TDayliReportKind[]
  organizations: TOrganizations[]
}
export interface IMapDispatchDRSingle extends IDefaultMapDispatch {
  setTitleToNavbar: (title: string) => void
  getUserFields: () => void
  getUserFrames: () => void
  getDailyReports: (flag: null | string, id: number) => void
  //
  iudDailyReport: (x: any, z: any, c: any) => void
  //sub data
  getWorkObjects: () => void
  getOrganizations: () => void
  getDReportTypes: () => void
  getDReportKinds: () => void
  forwardHistory: (path: string, id: number) => void
  redirectToDataList: () => void
}
