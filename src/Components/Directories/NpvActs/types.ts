import { IDefaultMapDispatch, IDefaultMapState } from '../types'
import { TNpvAct } from '@AppStore/types/reducers/typesNpvActsReducer'
import { TWorkObject } from '@AppStore/types/reducers/typesDataReducer'
import { TSortList } from '@AppStore/types/reducers/typesDayliReportReducer'
type bodyNpvActsSortListDataFromIdsParam = {
  workObjectId: number
}
export interface IMapStateActs extends IDefaultMapState {
  data: TNpvAct[]
  workObjects: TWorkObject[]
  sortList: TSortList[]
}
export interface IMapDispatchActs extends IDefaultMapDispatch {
  getNpvActs: () => void
  iudNpvAct: () => void
  getWorkObjects: () => void
  getNpvActsSortListDataFromIdsParam: (
    body: bodyNpvActsSortListDataFromIdsParam
  ) => void
  getNpvActsSortListData: (type: string, objId: number) => void
}
