import { AppStateType } from '../store'
import {
  TPlan,
  TPlanDetail,
  TExFlagItem,
  TExFlag,
  TBkvType,
} from '../types/reducers/typesDataReducer'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
//MODALS OPEN
const getOpenAdd = (state: AppStateType): boolean => state.UI.openAdd
export const selectOpenAdd = selector<boolean>(getOpenAdd)
const getOpenEdit = (state: AppStateType): boolean => state.UI.openEdit
export const selectOpenEdit = selector<boolean>(getOpenEdit)
const getOpenDel = (state: AppStateType): boolean => state.UI.openDel
export const selectOpenDel = selector<boolean>(getOpenDel)
//Типы БКВ
const getBkvTypes = (state: AppStateType): TBkvType[] =>
  state.data.bkv_types_data
export const selectBkvTypes = selector<TBkvType[]>(getBkvTypes)
//флаг для деталей плана
const getExFlagsItems = (state: AppStateType): TExFlagItem[] =>
  state.data.exFlagsItems
export const selectExFlagsItems = selector<TExFlagItem[]>(getExFlagsItems)
//получить айди из юрл
const getUrlParamsId = (state: AppStateType): number =>
  Number(state.data.urlParams.id)
export const selectUrlParamsId = selector<number>(getUrlParamsId)
//соединение с сетью
const getNetWorkConnection = (state: AppStateType): boolean =>
  state.UI.isConnected
export const selectNetWorkConnection = selector<boolean>(getNetWorkConnection)
//@ts-ignore
const getExFlags = (state: AppStateType): TExFlag[] => state.data.exflags
export const selectExFlags = selector<TExFlag[]>(getExFlags)
//LOADING_DATA
const getLoadingData = (state: AppStateType): boolean => state.UI.loading_data
export const selectLoadingData = selector<boolean>(getLoadingData)
//СЦЕНАНИЙ
const getScenarioColumns = (state: AppStateType): TColumn[] =>
  state.columns.scenarios
export const selectScenario = selector<TColumn[]>(getScenarioColumns)
const getScenarioForm = (state: AppStateType): TObjectFormState =>
  state.forms.scenarios.main
export const selectScenarioForm = selector<TObjectFormState>(getScenarioForm)
