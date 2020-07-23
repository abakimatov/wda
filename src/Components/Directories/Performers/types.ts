import { IDefaultMapState, IDefaultMapDispatch } from '../types'

export interface IMapStateToPropsUnits extends IDefaultMapState {
  data: any[]
}
export interface IMapDispatchToPropsUnits extends IDefaultMapDispatch {
  getWorkPerformers: () => void
  iudWorkPerformer: () => void 
}
