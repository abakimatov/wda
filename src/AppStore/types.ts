import { AppStateType } from './store'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import {
  KEY_IN_LIST,
  FieldType,
  FrameType,
  RoleType,
  StatusType,
  LicenseParamsType,
} from './commonTypes'
import { DAYLI_REPORT_REDUCER_ACTIONS } from './types/actions/actionsDayliReportReducer'
import { DATA_REDUCER_ACTIONS } from './types/actions/actionsDataReducer'
import { NPV_ACTS_REDUCER_ACTIONS } from './types/actions/actionsNpvActsReducer'
import { FILES_REDUCER_ACTIONS } from './types/actions/actionsFilesReducer'
import { REPORTS_REDUCER_ACTIONS } from './types/actions/actionsReportsReducer'
import { ORGANIZATIONS_REDUCER_ACTIONS } from './Reducers/organizations/types'
import { DRILLING_RIGS_REDUCER_ACTIONS } from './Reducers/drillingRigs/types'
import { WORK_CLASSIFIER_REDUCER_ACTIONS } from './Reducers/workClassifier/types'
import { WORK_KINDS_REDUCER_ACTIONS } from './Reducers/workKinds/types'
import { CONTRACT_REDUCER_ACTIONS } from './Reducers/contracts/types'
import { PERFORMENTS_REDUDER_ACTIONS } from './Reducers/perfoments/types'
export const TOGGLE_OPEN_MOVED_ITEMS_IN_TABLES =
  'TOGGLE_OPEN_MOVED_ITEMS_IN_TABLES'
type TOGGLE_OPEN_MOVED_ITEMS_IN_TABLES_ACTION = {
  type: typeof TOGGLE_OPEN_MOVED_ITEMS_IN_TABLES
  payload: boolean
}
//users types
export const SET_OPEN_FILES = 'SET_OPEN_FILES'
type SET_OPEN_FILES_ACTION = {
  type: typeof SET_OPEN_FILES
  payload: boolean
}
export const SET_OPEN_DEL_MODAL = 'SET_OPEN_DEL_MODAL'
type SET_OPEN_DEL_MODAL_ACTION = {
  type: typeof SET_OPEN_DEL_MODAL
  payload: boolean
}
export const SET_OPEN_ADD_MODAL = 'SET_OPEN_ADD_MODAL'
type SET_OPEN_ADD_MODAL_ACTION = {
  type: typeof SET_OPEN_ADD_MODAL
  payload: boolean
}
export const SET_OPEN_EDIT_MODAL = 'SET_OPEN_EDIT_MODAL'
type SET_OPEN_EDIT_MODAL_ACTION = {
  type: typeof SET_OPEN_EDIT_MODAL
  payload: boolean
}
export const SET_USER = 'SET_USER'
type SET_USER_ACTION = {
  type: typeof SET_USER
  payload: boolean
}
export const SET_VALIDATION_KEY = 'SET_VALIDATION_KEY'
type SET_VALIDATION_KEY_ACTION = {
  type: typeof SET_VALIDATION_KEY
  payload: boolean
  isKey?: string
}
export const SET_REG_KEY = 'SET_REG_KEY'
type SET_REG_KEY_ACTION = {
  type: typeof SET_REG_KEY
  payload: string
}
export const SET_KEYS_LIST = 'SET_KEYS_LIST'
type SET_KEYS_LIST_ACTION = {
  type: typeof SET_KEYS_LIST
  payload: Array<KEY_IN_LIST>
}
//ui types
export const ERROR = 'ERROR'
type ERROR_ACTION = {
  type: typeof ERROR
  payload: string
}
export const SUCCESS = 'SUCCESS'
type SUCCES_ACTION = {
  type: typeof SUCCESS
  payload: string
}
export const CLEAR_ERROR = 'CLEAR_ERROR'
type CLEAR_ERROR_ACTION = {
  type: typeof CLEAR_ERROR
}
export const CLEAR_SUCCESS = 'CLEAR_SUCCESS'
type CLEAR_SUCCESS = {
  type: typeof CLEAR_SUCCESS
}
export const LOADING_USER = 'LOADING_USER'
type LOADING_USER_ACTION = {
  type: typeof LOADING_USER
}
export const STOP_LOADING_USER = 'STOP_LOADING_USER'
type STOP_LOADING_USER = {
  type: typeof STOP_LOADING_USER
}
export const ERR_VALID_KEY_TEXT = 'ERR_VALID_KEY_TEXT'
type ERR_VALID_KEY_TEXT_ACTION = {
  type: typeof ERR_VALID_KEY_TEXT
  payload: string
}
export const LOADING_DATA = 'LOADING_DATA'
type LOADING_DATA_ACTION = {
  type: typeof LOADING_DATA
}
export const STOP_LOADING_DATA = 'STOP_LOADING_DATA'
type STOP_LOADING_DATA_ACTION = {
  type: typeof STOP_LOADING_DATA
}
export const SET_LOGIN_TYPE = 'SET_LOGIN_TYPE'
type SET_LOGIN_TYPE_ACTION = {
  type: typeof SET_LOGIN_TYPE
  payload: string
}
export const SET_ROLES_TYPE = 'SET_ROLES_TYPE'
type SET_ROLES_TYPE_ACTION = {
  type: typeof SET_ROLES_TYPE
  payload: Array<RoleType>
}
export const SET_TITLE_TO_NAVBAR = 'SET_TITLE_TO_NAVBAR'
type SET_TITLE_TO_NAVBAR_ACTION = {
  type: typeof SET_TITLE_TO_NAVBAR
  payload: string
}
export const SET_PROGRESS_REGISTR_ORG = 'SET_PROGRESS_REGISTR_ORG'
type SET_PROGRESS_REGISTR_ORG_ACTION = {
  type: typeof SET_PROGRESS_REGISTR_ORG
  payload: boolean
  msg?: string
}
export const ERROR_CONNECTRION_TRUE = 'ERROR_CONNECTRION_TRUE'
type ERROR_CONNECTRION_TRUE_ACTION = {
  type: typeof ERROR_CONNECTRION_TRUE
}
export const ERROR_CONNECTRION_FALSE = 'ERROR_CONNECTRION_FALSE'
type ERROR_CONNECTRION_FALSE_ACTION = {
  type: typeof ERROR_CONNECTRION_FALSE
}
export const CYCLE = 'CYCLE'
type CYCLE_ACTION = {
  type: typeof CYCLE
  payload: boolean
}
export const SET_LICENSE_PARAMS = 'SET_LICENSE_PARAMS'
type SET_LICENSE_PARAMS_ACTION = {
  type: typeof SET_LICENSE_PARAMS
  payload: LicenseParamsType
}
export const SET_CONFIRM_MESSAGE = 'SET_CONFIRM_MESSAGE'
type SET_CONFIRM_MESSAGE_ACTION = {
  type: typeof SET_CONFIRM_MESSAGE
  payload: string
}
//data types
export const SET_USER_DATA = 'SET_USER_DATA'
type SET_USER_DATA_ACTION = {
  type: typeof SET_USER_DATA
  payload: Array<FieldType>
  curOrgId: number
  showRegSection: boolean
  isSuperAdmin: boolean
}
//app status
export const SET_CONNECTION_STATUS = 'SET_CONNECTION_STATUS'
type SET_CONNECTION_STATUS_ACTION = {
  type: typeof SET_CONNECTION_STATUS
  payload: boolean
}
//statuses
export const SET_STATUSES_DAYLI_REPORT = 'SET_STATUSES_DAYLI_REPORT'
type SET_STATUSES_DAYLI_REPORT_ACTION = {
  type: typeof SET_STATUSES_DAYLI_REPORT
  payload: Array<StatusType>
}
//frames
export const SET_USER_DATA_FRAMES = 'SET_USER_DATA_FRAMES'
type SET_USER_DATA_FRAMES_ACTION = {
  type: typeof SET_USER_DATA_FRAMES
  payload: Array<FrameType>
}
export const TOGGLE_CONFIRM_OPEN_DIALOG = 'TOGGLE_CONFIRM_OPEN_DIALOG'
type TOGGLE_CONFIRM_OPEN_DIALOG_ACTION = {
  type: typeof TOGGLE_CONFIRM_OPEN_DIALOG
  payload: boolean
}

export type AppActionTypes =
  | SET_OPEN_FILES_ACTION
  | CYCLE_ACTION
  | TOGGLE_CONFIRM_OPEN_DIALOG_ACTION
  | SET_OPEN_ADD_MODAL_ACTION
  | SET_OPEN_EDIT_MODAL_ACTION
  | ERROR_CONNECTRION_TRUE_ACTION
  | SET_ROLES_TYPE_ACTION
  | SET_TITLE_TO_NAVBAR_ACTION
  | SET_PROGRESS_REGISTR_ORG_ACTION
  | SET_LOGIN_TYPE_ACTION
  | SET_CONNECTION_STATUS_ACTION
  | LOADING_DATA_ACTION
  | STOP_LOADING_DATA_ACTION
  | SET_USER_DATA_FRAMES_ACTION
  | SET_USER_DATA_ACTION
  | SET_KEYS_LIST_ACTION
  | ERR_VALID_KEY_TEXT_ACTION
  | STOP_LOADING_USER
  | SET_VALIDATION_KEY_ACTION
  | SET_REG_KEY_ACTION
  | LOADING_USER_ACTION
  | SET_USER_ACTION
  | ERROR_ACTION
  | CLEAR_ERROR_ACTION
  | SET_LICENSE_PARAMS_ACTION
  | SUCCES_ACTION
  | SET_CONFIRM_MESSAGE_ACTION
  | SET_STATUSES_DAYLI_REPORT_ACTION
  | ERROR_CONNECTRION_FALSE_ACTION
  | SET_OPEN_DEL_MODAL_ACTION
  | CLEAR_SUCCESS
  | NPV_ACTS_REDUCER_ACTIONS
  | DAYLI_REPORT_REDUCER_ACTIONS
  | DATA_REDUCER_ACTIONS
  | FILES_REDUCER_ACTIONS
  | TOGGLE_OPEN_MOVED_ITEMS_IN_TABLES_ACTION
  | REPORTS_REDUCER_ACTIONS
  | PERFORMENTS_REDUDER_ACTIONS
  | ORGANIZATIONS_REDUCER_ACTIONS
  | DRILLING_RIGS_REDUCER_ACTIONS
  | WORK_CLASSIFIER_REDUCER_ACTIONS
  | WORK_KINDS_REDUCER_ACTIONS
  | CONTRACT_REDUCER_ACTIONS
export type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  AppActionTypes
>
export type GetStateType = () => AppActionTypes
export type DispatchType = Dispatch<AppActionTypes>
