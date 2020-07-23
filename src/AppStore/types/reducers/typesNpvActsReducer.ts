import { TSortList } from './typesDayliReportReducer'

export type TNpvCause = {
  id: number
  isStandard: boolean
  name: string
  orgId: number
  orgName: string
}
export type TNpvActKind = {
  id: number
  isStandard: boolean
  name: string
}
export type TNpvAct = {
  endDate: string
  id: number
  kindId: number
  npvDescription: string
  startDate: string
  workObjectId: number
  workObjectName: string
  workResult: string
}
export type TNpvDetail = {
  id: number
  drDetailId: number
  docDate: string
  orderNum: number
  workKindId: number
  workKindName: string
  drillingRigId: number
  drillingRigName: string
  workClassifierId: number
  workClassifierName: string
  operationDescription: string
  startTime: string
  endTime: string
  hours: number
  driving: number
  npvDescription: string
  npvCauseId: number
  npvCauseName: number
  npvResponsibleId: number
  npvResponsibleName: string
  serviceName: string
}
export type TNpvActsArrays = TNpvCause | TNpvActKind | TNpvAct | TNpvDetail
export type TNpvActsReducer = {
  npvActDetails: TNpvDetail[]
  npvActKinds: TNpvActKind[]
  npvActs: TNpvAct[]
  npvCauses: TNpvCause[]
  npvActsFilters: TSortList[] 
}
