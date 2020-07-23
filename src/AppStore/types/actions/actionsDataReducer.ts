import {
  TContract,
  TWorkObject,
  TDeposit,
  TProject,
  TUser,
  TBkvType,
  TNomenclature,
  TUnits,
  TNomenclatureType,
  TWorkObjectExecutor,
  TWorkObjectHole,
  TContractDetail,
  TOrganizations,
  TDrillingRig,
  TWorkClassifier,
  TWorkKind,
  TPlan,
  TScenario,
  TPlanDetail,
  TSupervisorPrescript,
  TMortarType,
  TUrlParams,
  TPlanConsoleDefaultStructure,
} from '../reducers/typesDataReducer'
import { TSortList } from '../reducers/typesDayliReportReducer'
//data handle types
export const SET_CHECKED_ITEM_FROM_TABLES = 'SET_CHECKED_ITEM_FROM_TABLES'
export type SET_CHECKED_ITEM_FROM_TABLES_ACTION = {
  type: typeof SET_CHECKED_ITEM_FROM_TABLES
  payload: any
}
export const SET_PLANS_SORT_LIST = 'SET_PLANS_SORT_LIST'
type SET_PLANS_SORT_LIST_ACTION = {
  type: typeof SET_PLANS_SORT_LIST
  payload: TSortList[]
}
export const SET_PLANS_DEFAULT_STRUCTURE = 'SET_PLANS_DEFAULT_STRUCTURE'
type SET_PLANS_DEFAULT_STRUCTURE_ACTION = {
  type: typeof SET_PLANS_DEFAULT_STRUCTURE
  payload: TPlanConsoleDefaultStructure
}
export const SET_PLANS_DETAILS = 'SET_PLANS_DETAILS'
type SET_PLANS_DETAILS_ACTION = {
  type: typeof SET_PLANS_DETAILS
  payload: Array<TPlanDetail>
}
export const SET_SCENARIOS = 'SET_SCENARIOS'
type SET_SCENARIOS_ACTION = {
  type: typeof SET_SCENARIOS
  payload: Array<TScenario>
}
export const SET_PLANS = 'SET_PLANS'
type SET_PLANS_ACTION = {
  type: typeof SET_PLANS
  payload: Array<TPlan>
}
export const SET_SUPERVISOR_PRESCRIPTS = 'SET_SUPERVISOR_PRESCRIPTS'
type SET_SUPERVISOR_PRESCRIPTS_ACTION = {
  type: typeof SET_SUPERVISOR_PRESCRIPTS
  flag?: string
  id?: number
  payload: Array<TSupervisorPrescript>
}
export const SET_WORK_OBJECTS_DATA = 'SET_WORK_OBJECTS_DATA'
type SET_WORK_OBJECTS_DATA_ACTION = {
  type: typeof SET_WORK_OBJECTS_DATA
  flag?: string
  id?: number
  payload: Array<TWorkObject>
}
export const SET_DEPOSITS_DATA = 'SET_DEPOSITS_DATA'
type SET_DEPOSITS_DATA_ACTION = {
  type: typeof SET_DEPOSITS_DATA
  flag?: string
  id?: number
  payload: Array<TDeposit>
}
export const SET_PROJECTS_DATA = 'SET_PROJECTS_DATA'
type SET_PROJECTS_DATA_ACTION = {
  type: typeof SET_PROJECTS_DATA
  flag?: string
  id?: number
  payload: Array<TProject>
}
export const SET_USERS_DATA = 'SET_USERS_DATA'
type SET_USERS_DATA_ACTION = {
  type: typeof SET_USERS_DATA
  flag?: string
  id?: number
  payload: Array<TUser>
}
export const SET_BKV_TYPES = 'SET_BKV_TYPES'
type SET_BKV_TYPES_ACTION = {
  type: typeof SET_BKV_TYPES
  payload: Array<TBkvType>
}
export const SET_NOMENCLATURE = 'SET_NOMENCLATURE'
type SET_NOMENCLATURE_ACTION = {
  type: typeof SET_NOMENCLATURE
  flag?: string
  id?: number
  payload: Array<TNomenclature>
}
export const SET_UNITS = 'SET_UNITS'
type SET_UNITS_ACTION = {
  type: typeof SET_UNITS
  flag?: string
  id?: number
  payload: Array<TUnits>
}
export const SET_NOMENCLATURE_TYPES = 'SET_NOMENCLATURE_TYPES'
type SET_NOMENCLATURE_TYPES_ACTION = {
  type: typeof SET_NOMENCLATURE_TYPES
  flag?: string
  id?: number
  payload: Array<TNomenclatureType>
}
export const SET_WORK_OBJECT_EXECUTORS = 'SET_WORK_OBJECT_EXECUTORS'
type SET_WORK_OBJECT_EXECUTORS_ACTION = {
  type: typeof SET_WORK_OBJECT_EXECUTORS
  flag?: string
  id?: number
  payload: Array<TWorkObjectExecutor>
}
export const SET_WORK_OBJECT_HOLES = 'SET_WORK_OBJECT_HOLES'
type SET_WORK_OBJECT_HOLES_ACTION = {
  type: typeof SET_WORK_OBJECT_HOLES
  flag?: string
  id?: number
  payload: Array<TWorkObjectHole>
}
export const SET_MORTAR_TYPES = 'SET_MORTAR_TYPES'
type SET_MORTAR_TYPES_ACTION = {
  type: typeof SET_MORTAR_TYPES
  flag?: string
  id?: number
  payload: Array<TMortarType>
}
export const SET_URL_PARAMS = 'SET_URL_PARAMS'
type SET_URL_PARAMS_ACTION = {
  type: typeof SET_URL_PARAMS
  payload: TUrlParams
}
//! TYPED THIS
export const SET_EX_FLAGS_ITEMS = 'SET_EX_FLAGS_ITEMS'
type SET_EX_FLAGS_ITEMS_ACTION = {
  type: typeof SET_EX_FLAGS_ITEMS
  payload: any
}
export const SET_EX_FLAGS = 'SET_EX_FLAGS'
type SET_EX_FLAGS_ACTION = {
  type: typeof SET_EX_FLAGS
  payload: Array<any>
}
export type DATA_REDUCER_ACTIONS =
  /* | SET_WORK_KINDS_FOLDERS_ACTION */
  | SET_PLANS_SORT_LIST_ACTION
  | SET_EX_FLAGS_ITEMS_ACTION
  | SET_EX_FLAGS_ACTION
  | SET_URL_PARAMS_ACTION
  /* | SET_DETAILS_CONTRACT_ACTION */
  /* | SET_DRILLING_RIGS_DATA_ACTION */
  /* | SET_WORK_CLASSIFIER_DATA_ACTION */
  | SET_DEPOSITS_DATA_ACTION
  | SET_MORTAR_TYPES_ACTION
  /* | SET_ORGANIZATIONS_ACTION */
  | SET_PLANS_ACTION
  | SET_USERS_DATA_ACTION
  | SET_WORK_OBJECT_EXECUTORS_ACTION
  | SET_PROJECTS_DATA_ACTION
  | SET_PLANS_DETAILS_ACTION
  /* | SET_CONTRACTS_DATA_ACTION */
  | SET_UNITS_ACTION
  | SET_SCENARIOS_ACTION
  | SET_NOMENCLATURE_TYPES_ACTION
  | SET_NOMENCLATURE_ACTION
  | SET_SUPERVISOR_PRESCRIPTS_ACTION
  | SET_WORK_OBJECTS_DATA_ACTION
  | SET_BKV_TYPES_ACTION
  /* | SET_WORK_KINDS_DATA_ACTION */
  | SET_PLANS_DEFAULT_STRUCTURE_ACTION
  | SET_WORK_OBJECT_HOLES_ACTION
  | SET_CHECKED_ITEM_FROM_TABLES_ACTION
  /* | SET_CONTRACT_SORT_LIST_ACTION */
