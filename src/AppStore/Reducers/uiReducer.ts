import {
  LOADING_USER,
  STOP_LOADING_USER,
  SUCCESS,
  ERROR,
  CLEAR_SUCCESS,
  CLEAR_ERROR,
  ERR_VALID_KEY_TEXT,
  LOADING_DATA,
  STOP_LOADING_DATA,
  SET_LOGIN_TYPE,
  ERROR_CONNECTRION_TRUE,
  ERROR_CONNECTRION_FALSE,
  SET_TITLE_TO_NAVBAR,
  SET_PROGRESS_REGISTR_ORG,
  SET_ROLES_TYPE,
  CYCLE,
  SET_LICENSE_PARAMS,
  SET_STATUSES_DAYLI_REPORT,
  SET_CONFIRM_MESSAGE,
  SET_CONNECTION_STATUS,
  TOGGLE_CONFIRM_OPEN_DIALOG,
  //
  AppActionTypes,
  SET_OPEN_ADD_MODAL,
  SET_OPEN_EDIT_MODAL,
  SET_OPEN_DEL_MODAL,
  SET_OPEN_FILES,
  TOGGLE_OPEN_MOVED_ITEMS_IN_TABLES,
} from '../types'
import { RoleType, StatusType } from '../commonTypes'

const initialState = {
  loading_user: false as boolean,
  loading_data: false as boolean,
  success: false as boolean,
  error: false as boolean,
  success_mess: '' as string,
  error_mess: '' as string,
  err_valid_text_key: 'Проверка доступа...' as string,
  isMask: '0' as string,
  roles: [] as Array<RoleType>,
  title: '' as string,
  showRegistrationForm: false as boolean,
  message: '' as string,
  error_network: false as boolean,
  cycle: true as boolean,
  license_params: {},
  statuses: [] as Array<StatusType>,
  confirmMessage: '' as string,
  isConnected: true as boolean,
  openConfirmDialog: false as boolean,
  //ModalControllers
  openAdd: false as boolean,
  openEdit: false as boolean,
  openDel: false as boolean,
  openFiles: false as boolean,
  //WorkKinds
  openMovedWorkKinds: false as boolean,
}
type InitialState = typeof initialState

export default function (
  state = initialState,
  action: AppActionTypes
): InitialState {
  switch (action.type) {
    case TOGGLE_OPEN_MOVED_ITEMS_IN_TABLES:
      return {
        ...state,
        openMovedWorkKinds: action.payload,
      }
    case SET_OPEN_DEL_MODAL:
      return {
        ...state,
        openDel: action.payload,
      }
    case SET_OPEN_FILES:
      return {
        ...state,
        openFiles: action.payload,
      }
    case SET_OPEN_ADD_MODAL:
      return {
        ...state,
        openAdd: action.payload,
      }
    case SET_OPEN_EDIT_MODAL:
      return {
        ...state,
        openEdit: action.payload,
      }
    case LOADING_DATA:
      return {
        ...state,
        loading_data: true,
      }
    case STOP_LOADING_DATA:
      return {
        ...state,
        loading_data: false,
      }
    case LOADING_USER:
      return {
        ...state,
        loading_user: true,
      }
    case STOP_LOADING_USER:
      return {
        ...state,
        loading_user: false,
      }
    case SET_CONNECTION_STATUS:
      return {
        ...state,
        isConnected: action.payload,
      }
    case SUCCESS:
      return {
        ...state,
        success: true,
        success_mess: action.payload,
      }
    case ERROR:
      return {
        ...state,
        error: true,
        error_mess: action.payload,
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: false,
        error_mess: '',
      }
    case CLEAR_SUCCESS:
      return {
        ...state,
        success: false,
        success_mess: '',
      }
    case ERR_VALID_KEY_TEXT:
      return {
        ...state,
        err_valid_text_key: action.payload,
      }
    case SET_LOGIN_TYPE:
      return {
        ...state,
        isMask: action.payload,
      }
    case SET_ROLES_TYPE:
      return {
        ...state,
        roles: action.payload,
      }
    case SET_TITLE_TO_NAVBAR:
      return {
        ...state,
        title: action.payload,
      }
    case SET_PROGRESS_REGISTR_ORG:
      return {
        ...state,
        showRegistrationForm: action.payload,
        message: action.msg,
      }
    case ERROR_CONNECTRION_TRUE:
      return {
        ...state,
        error_network: true,
      }
    case ERROR_CONNECTRION_FALSE:
      return {
        ...state,
        error_network: false,
      }
    case CYCLE:
      return {
        ...state,
        cycle: action.payload,
      }
    case SET_LICENSE_PARAMS:
      return {
        ...state,
        license_params: action.payload,
      }
    case SET_STATUSES_DAYLI_REPORT:
      return {
        ...state,
        statuses: action.payload,
      }
    case SET_CONFIRM_MESSAGE:
      return {
        ...state,
        confirmMessage: action.payload,
      }
    case TOGGLE_CONFIRM_OPEN_DIALOG:
      return {
        ...state,
        openConfirmDialog: action.payload,
      }
    default:
      return state
  }
}
