import { IDefaultMapDispatch, IDefaultMapState } from '../../../types'
import { TNpvDetail, TNpvCause } from '@AppStore/types/reducers/typesNpvActsReducer'
import {
  TWorkKind,
  TDrillingRig,
  TWorkClassifier,
  TOrganizations,
} from '@AppStore/types/reducers/typesDataReducer'

export interface IMapStateNpvActDetails extends IDefaultMapState {
  data: TNpvDetail[]
  parentIdUrlParam: number
  workKinds: TWorkKind[]
  drillingRigs: TDrillingRig[]
  workClassifiers: TWorkClassifier[]
  npvCauses: TNpvCause[]
  organizations: TOrganizations[]
}
export interface IMapDispatchNpvDetails extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: () => void
  iudNpvActDetail: (
    flag: string,
    body: TNpvDetail,
    handleClose: () => void
  ) => void
  getWorkKinds: () => void
  getDrillingRigs: () => void
  getWorkClassifier: () => void
  getNpvCauses: () => void
  getOrganizations: () => void
}
