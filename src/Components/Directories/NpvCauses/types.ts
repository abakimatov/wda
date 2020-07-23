import { IDefaultMapDispatch, IDefaultMapState } from '../types'
import { TNpvCause } from '@AppStore/types/reducers/typesNpvActsReducer';

export interface IMapStateNpvCauses extends IDefaultMapState {
  npvCauses: TNpvCause[]
}
export interface IMapDispatchNpvCauses extends IDefaultMapDispatch {
  getNpvCauses: () => void 
  iudNpvCause: () => void
}
