export const LOADING_FILE = 'LOADING_FILE'
type LOADING_FILE_ACTION = {
  type: typeof LOADING_FILE
}
export const STOP_LOADING_FILE = 'STOP_LOADING_FILE'
type _STOP_LOADING_FILE = {
  type: typeof STOP_LOADING_FILE
}
export const SET_FILES = 'SET_FILES'
type SET_FILES_ACTION = {
  type: typeof SET_FILES
  payload: TFile[]
  title: string
}
export type FILES_REDUCER_ACTIONS =
  | LOADING_FILE_ACTION
  | _STOP_LOADING_FILE
  | SET_FILES_ACTION
//TYPES
export type TFile = {
  fileData: string //BASE64
  id: string
  name: string
  objectId: number
  url: string
  userCreated: string
}
