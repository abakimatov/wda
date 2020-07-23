import {
  ThunkType,
  SET_OPEN_ADD_MODAL,
  SET_OPEN_EDIT_MODAL,
  SET_OPEN_FILES,
  SET_OPEN_DEL_MODAL,
  TOGGLE_OPEN_MOVED_ITEMS_IN_TABLES,
  DispatchType,
} from '../../types'
import { SET_URL_PARAMS } from '../../types/actions/actionsDataReducer'
import { getFiles } from '../files'

export class Helper {
  constructor(public str: string, public data: any, public show?: boolean) {
    this.str = str
    this.data = data
    this.show = true
  }
  getLog = () => {
    if (this.show) {
      return console.log(`RESULT OF METHOD ${this.str} === >`, this.data)
    } else return
  }
}
export const convertNull = (arr: []): [] => {
  if (Array.isArray(arr)) return arr
  else return []
}
/* export const converFlag = (flag: string, id: number): string => {
  if (flag === "U" && !id) {
    return "I";
  }
  if (flag === "U" && !isNaN(Number(id))) {
    return "U";
  }
  if (flag === "D" && !isNaN(Number(id))) {
    return "D";
  }
}; */
export const setUrlParams = (params: any) => (dispatch: DispatchType) => {
  dispatch({ type: SET_URL_PARAMS, payload: params })
}
export const toggleOpenAddModal = (open: boolean) => (
  dispatch: DispatchType
) => {
  dispatch({ type: SET_OPEN_ADD_MODAL, payload: open })
}
export const toggleOpenEditModal = (open: boolean) => (
  dispatch: DispatchType
) => {
  dispatch({ type: SET_OPEN_EDIT_MODAL, payload: open })
}
export const toggleOpenDeleteModal = (open: boolean) => (
  dispatch: DispatchType
) => {
  dispatch({ type: SET_OPEN_DEL_MODAL, payload: open })
}
export const toggleOpenFiles = (
  open: boolean,
  objectId?: number,
  objTypeId?: number
): ThunkType => async (dispatch) => {
  if (open === true) {
    dispatch(getFiles(objectId, objTypeId))
  }
  dispatch({ type: SET_OPEN_FILES, payload: open })
}
export const toggleOpenMovedItemsInTables = (open: boolean) => (
  dispatch: DispatchType
) => dispatch({ type: TOGGLE_OPEN_MOVED_ITEMS_IN_TABLES, payload: open })
