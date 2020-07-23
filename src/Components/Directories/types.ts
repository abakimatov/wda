import { FrameType } from '@AppStore/commonTypes'
import { TColumn } from '@AppStore/Reducers/ColumnsReducers/types'
import { TObjectFormState } from '@AppStore/Reducers/FormsReducers/types'

export interface IDefaultMapState {
  frame?: FrameType
  columns?: TColumn[]
  forms?: TObjectFormState
  loading_data?: boolean
  filterForms?: TObjectFormState
}
export interface IDefaultMapDispatch {
  setTitleToNavbar: (title: string) => void
  getUserFields: () => void
  getUserFrames: () => void
  copyDocument?: (docId: number, type: string) => void
}
