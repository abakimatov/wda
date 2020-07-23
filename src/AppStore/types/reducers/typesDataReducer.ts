import { TSortList } from './typesDayliReportReducer'

export type TUrlParams = {
  id: number
  item: string
}
export type TScenario = {
  id: number
  name: string
}
export type TExFlag = {
  flag: string
  name: string
  items: Array<TExFlagItem>
}
export type TExFlagItem = {
  id: number
  name: string
}
export type TOrganizations = {
  id: number
  name: string
  mnemo: string
  kpp: string
  inn: string
  legAddress: string
  actAddress: string
  email: string
  phone: string
  respUserId: number
  respName: string
  respEmail: string
  respPhone: string
}
export type TSupervisorPrescript = {
  id: number
  docNumber: string
  docDate: string
  workObjectId: number
  workObjectName: string
  executorId: number
  executorName: string
  userName: string
  position: string
}
export type TProject = {
  id: number
  name: string
}
export type TDeposit = {
  id: number
  name: string
}
export type TWorkObjectExecutor = {
  id: number
  orgId: number
  orgName: string
  serviceKind: string
}
export type TWorkObjectHole = {
  id: number
  diameter: number
  depth: number
}
export type TPlan = {
  id?: number
  statusName?: string
  docNumber?: string
  docDate?: string
  comment?: null | string
  scenarioId?: number
  scenarioName?: string
  orgName?: string
  workObjectId?: number
  workObjectName?: string
  userName?: string
}
export type TMortarType = {
  id: number
  code: string
  name: string
}
export type TContractDetail = {
  id: number
  workObjectId: number
  workObjectName: string
  startDate: string
  endDate: string
  workKindId: number
  workKindName: string
  comment: null | string
  isConfirmed: number
}
export type TUser = {
  id: number
  login: string
  name: string
  contractorId: number
  contractorName: string
  email: string
  phone: string
  roleId: number
  roleName: string
}
export type TBkvType = {
  id: number
  name: string
  mnemo: string
}
export type TWorkObject = {
  id: number
  name: string
  projectId: number
  projectName: string
  depositId: number
  depositName: string
  orgId: number
  orgName: string
  drillingMethod: string
  designedDepth: number
}
export type TContract = {
  id: number
  statusId: number
  statusName: string
  docNumber: string
  docDate: string
  comment: string
  name: string
  executorId: number
  executorName: string
  isConfirmed: boolean
}
export type TUnits = {
  id: number
  name: string
  code: null | string
}
export type TWorkKind = {
  id: number
  name: string
  isModel: boolean
  parentId: null | number
  entryTypeId: number
  entryTypeName: string
  orgId: number
  orgName: string
}
export type TDrillingRig = {
  id: number
  name: string
  orgId: number
  orgName: string
}
export type TWorkClassifier = {
  id: number
  name: string
  typeId: number
  typeName: string
  orgId: number
  orgName: string
}
export type TNomenclature = {
  id: number
  code: string
  mnemo: string
  name: string
  typeId: number
  typeName: string
  unitId: number
  unitCode: string
  unitName: string
}
export type TNomenclatureType = {
  id: number
  name: string
  mnemo: string
}
export type TPlanDetail = {
  flag: string
  id: number
  drillingRigId: number
  drillingRigName: string
  executorId: number
  executorName: string
  exFlag: string
  workKindId: number
  workKindName: string
  startDate: string //date
  endDate: string //date
  operationMode: number
  days: number
  hours: number
  driving: number
  parentId: string
}
export type TPlanConsoleDefaultStructure = {
  orgs: {
    id: number
    name: string
    objects: TWorkObject[]
    workKinds: TWorkKind[]
  }[]
  templates: { id: number; name: string }[]
}
export type TDataReducer = {
  urlParams: TUrlParams
  /* derictories */
  /* organizations: TOrganizations[] */
  /* drilling_rigs_data: TDrillingRig[] */
  /* work_classifier_data: TWorkClassifier[] */
  /* work_kinds_data: TWorkKind[] */
  /* contracts_data: TContract[] */
  /* contractsSortList: TSortList[] */
  work_objects_data: TWorkObject[]
  deposits_data: TDeposit[]
  projects_data: TProject[]
  users_data: TUser[]
  bkv_types_data: TBkvType[]
  /* details_contract: TContractDetail[] */
  nomenclature_data: TNomenclature[]
  units_data: TUnits[]
  nomenclature_types: TNomenclatureType[]
  work_objects_executors_data: TWorkObjectExecutor[]
  work_objects_holes_data: TWorkObjectHole[]
  supervisor_prescripts: TSupervisorPrescript[]
  plans: TPlan[]
  plansSortList: TSortList[]
  planDetails: TPlanDetail[]
  scenarios: TScenario[]
  exflags: TExFlag[]
  exFlagsItems: TExFlagItem[]
  mortar_types: TMortarType[]
  planDefaultStructure: TPlanConsoleDefaultStructure
  checkedItemFromTables: any
  /* work_kinds_folders: any[] */
}
export type DerictoriesType =
  | TPlanConsoleDefaultStructure
  | TUrlParams
  | TScenario
  | TExFlagItem
  | TExFlag
  | TSupervisorPrescript
  | TPlan
  | TProject
  | TMortarType
  | TContractDetail
  | TUser
  | TBkvType
  | TNomenclatureType
  | TNomenclature
  | TDrillingRig
  | TWorkClassifier
  | TWorkKind
  | TWorkObjectHole
  | TDeposit
  | TWorkObjectExecutor
  | TUnits
  | TOrganizations
  | TPlanDetail
