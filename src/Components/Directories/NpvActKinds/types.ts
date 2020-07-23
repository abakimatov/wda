import { IDefaultMapDispatch, IDefaultMapState } from '../types'
import { TNpvActKind } from '@AppStore/types/reducers/typesNpvActsReducer'

export interface IMapStateNpvActKinds extends IDefaultMapState {
  npvActKinds: TNpvActKind[]
}
export interface IMapDispatchNpvActKinds extends IDefaultMapDispatch {
  getNpvActKinds: () => void
  iudNpvActKind: () => void
}
