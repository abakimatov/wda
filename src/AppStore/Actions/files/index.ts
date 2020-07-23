//flags : add, res, del\
/* 
objTypeId:
1  Договор
2  Проект
3  Объект
4  Вид работ
5  Организация
6  Суточный рапорт
7  План строительства
8  Акт регистрации НПВ
 */
/* 
JSON:
flag
fileId
objTypeId - сущность, для которой сохраняется файл
files: name, base64
 */
import { ThunkType } from '@AppStore/types'
import {
  LOADING_FILE,
  STOP_LOADING_FILE,
  SET_FILES,
} from '@AppStore/types/actions/actionsFilesReducer'
import { instance, check_current } from '../Instance'
import { Methods } from '../Methods/methods'
import { SuccessMessage } from '../Notifications'
import { ErrorHandler } from '../ErrorHandler'
import { convertNull } from '../Derictories/Helpers'

type file = {
  name: string
  base64: string
}
export const iudFile = (
  flag: string,
  objectId: number,
  objTypeId: number,
  fileId: number = null,
  files: file[],
  resolveThunk: () => void
): ThunkType => async (dispatch) => {
  dispatch({ type: LOADING_FILE })
  const token = check_current()
  try {
    const res = await instance(check_current()).post(``, {
      method: Methods.iudFile,
      flag,
      objectId,
      objTypeId,
      fileId,
      files,
      token,
    })
    dispatch(SuccessMessage(res.data.successMsg))
    if (typeof resolveThunk === 'function') resolveThunk()
    dispatch(getFiles(objectId, objTypeId))
    dispatch({ type: STOP_LOADING_FILE })
  } catch (err) {
    dispatch(ErrorHandler(err))
    dispatch({ type: STOP_LOADING_FILE })
  }
}
export const getFiles = (
  objectId: number,
  objTypeId: number
): ThunkType => async (dispatch) => {
  dispatch({ type: LOADING_FILE })
  try {
    const res = await instance(check_current()).post(``, {
      method: Methods.getFiles,
      objTypeId,
      objectId,
    })
    dispatch({
      type: SET_FILES,
      payload: convertNull(res.data.list),
      title: res.data.title,
    })
    dispatch({ type: STOP_LOADING_FILE })
  } catch (err) {
    dispatch(ErrorHandler(err))
    dispatch({ type: STOP_LOADING_FILE })
  }
}
export const deleteFile = (fileId: string): ThunkType => async (dispatch) => {
  dispatch({ type: LOADING_FILE })
  try {
    const res = await instance(check_current()).post(``, {
      method: Methods.iudFile,
      flag: 'del',
      fileId,
    })
    dispatch(SuccessMessage(res.data.successMsg))
    dispatch({
      type: SET_FILES,
      payload: convertNull(res.data.list),
      title: res.data.title,
    })
    dispatch({ type: STOP_LOADING_FILE })
  } catch (err) {
    dispatch(ErrorHandler(err))
    dispatch({ type: STOP_LOADING_FILE })
  }
}
