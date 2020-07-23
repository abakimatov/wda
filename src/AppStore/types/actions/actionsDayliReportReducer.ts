import {
  TDayliReport,
  TTechOper,
  TDayliReportType,
  TKnbk,
  TChisel,
  TDrillMortar,
  TDrillMortarVolume,
  TDrillMortarLoss,
  TCasingNkt,
  TCleanSystemWork,
  TBreakdownInstrument,
  TMaterialConsumption,
  TDrillMortarPrep,
  TDieselConsumption,
  TChiselDrillHead,
  TTechGear,
  TDrillInstrumentKnbkElements,
  TTechEquipment,
  TWorkLine,
  TDieselWork,
  TStaff,
  TSpecialMachineryWork,
  TDayliReportKind,
  TDrillPumpWork,
  TSortList,
  TWorkStage,
} from '../reducers/typesDayliReportReducer'
export const SET_DAYLI_REPORT_WORK_STAGES = 'SET_DAYLI_REPORT_WORK_STAGES'
type SET_DAYLI_REPORT_WORK_STAGES_ACTION = {
  type: typeof SET_DAYLI_REPORT_WORK_STAGES
  payload: TWorkStage[]
}
export const SET_DR_SORT_LIST = 'SET_DR_SORT_LIST'
type SET_DR_SORT_LIST_ACTION = {
  type: typeof SET_DR_SORT_LIST
  payload: TSortList[]
}
export const SET_DAILY_REPORT = 'SET_DAILY_REPORT'
type SET_DAILY_REPORT_ACTION = {
  type: typeof SET_DAILY_REPORT
  flag?: string | null
  id?: number | null
  payload: Array<TDayliReport>
}
export const SET_DAYLI_REPORT_TYPES = 'SET_DAYLI_REPORT_TYPES'
type SET_DAYLI_REPORT_TYPES_ACTION = {
  type: typeof SET_DAYLI_REPORT_TYPES
  payload: Array<TDayliReportType>
}
export const SET_DAYLI_REPORT_KINDS = 'SET_DAYLI_REPORT_KINDS'
type SET_DAYLI_REPORT_KINDS_ACTION = {
  type: typeof SET_DAYLI_REPORT_KINDS
  payload: Array<TDayliReportKind>
}
export const SET_KNBK = 'SET_KNBK'
type SET_KNBK_ACTION = {
  type: typeof SET_KNBK
  flag?: string
  id?: number
  payload: Array<TKnbk>
}
export const SET_CHISEL = 'SET_CHISEL'
type SET_CHISEL_ACTION = {
  type: typeof SET_CHISEL
  flag?: string
  id?: number
  payload: Array<TChisel>
}
export const SET_DRILL_MORTAR = 'SET_DRILL_MORTAR'
type SET_DRILL_MORTAR_ACTION = {
  type: typeof SET_DRILL_MORTAR
  flag?: string
  id?: number
  payload: Array<TDrillMortar>
}
export const SET_DRILL_MORTAR_VOLUME = 'SET_DRILL_MORTAR_VOLUME'
type SET_DRILL_MORTAR_VOLUME_ACTION = {
  type: typeof SET_DRILL_MORTAR_VOLUME
  flag?: string
  id?: number
  payload: Array<TDrillMortarVolume>
}
export const SET_DRILL_MORTAR_LOSS = 'SET_DRILL_MORTAR_LOSS'
type SET_DRILL_MORTAR_LOSS_ACTION = {
  type: typeof SET_DRILL_MORTAR_LOSS
  flag?: string
  id?: number
  payload: Array<TDrillMortarLoss>
}
export const SET_DRILL_PUMP_WORK = 'SET_DRILL_PUMP_WORK'
type SET_DRILL_PUMP_WORK_ACTION = {
  type: typeof SET_DRILL_PUMP_WORK
  flag?: string
  id?: number
  payload: Array<TDrillPumpWork>
}
export const SET_CLEAN_SYSTEM_WORK = 'SET_CLEAN_SYSTEM_WORK'
type SET_CLEAN_SYSTEM_WORK_ACTION = {
  type: typeof SET_CLEAN_SYSTEM_WORK
  flag?: string
  id?: number
  payload: Array<TCleanSystemWork>
}
export const SET_BREAKDOWN_INSTRUMENT = 'SET_BREAKDOWN_INSTRUMENT'
type SET_BREAKDOWN_INSTRUMENT_ACTION = {
  type: typeof SET_BREAKDOWN_INSTRUMENT
  flag?: string
  id?: number
  payload: Array<TBreakdownInstrument>
}
export const SET_MATERIAL_CONSUMPTION = 'SET_MATERIAL_CONSUMPTION'
type SET_MATERIAL_CONSUMPTION_ACTION = {
  type: typeof SET_MATERIAL_CONSUMPTION
  flag?: string
  id?: number
  payload: Array<TMaterialConsumption>
}
export const SET_DRILL_MORTAR_PREP = 'SET_DRILL_MORTAR_PREP'
type SET_DRILL_MORTAR_PREP_ACTION = {
  type: typeof SET_DRILL_MORTAR_PREP
  flag?: string
  id?: number
  payload: Array<TDrillMortarPrep>
}
export const SET_DISEL_CONSUMPTION = 'SET_DISEL_CONSUMPTION'
type SET_DISEL_CONSUMPTION_ACTION = {
  type: typeof SET_DISEL_CONSUMPTION
  flag?: string
  id?: number
  payload: Array<TDieselConsumption>
}
export const SET_CHISEL_DRILL_HEAD = 'SET_CHISEL_DRILL_HEAD'
type SET_CHISEL_DRILL_HEAD_ACTION = {
  type: typeof SET_CHISEL_DRILL_HEAD
  flag?: string
  id?: number
  payload: Array<TChiselDrillHead>
}
export const SET_TECH_GEAR = 'SET_TECH_GEAR'
type SET_TECH_GEAR_ACTION = {
  type: typeof SET_TECH_GEAR
  flag?: string
  id?: number
  payload: Array<TTechGear>
}
export const SET_CASING_NKT = 'SET_CASING_NKT'
type SET_CASING_NKT_ACTION = {
  type: typeof SET_CASING_NKT
  flag?: string
  id?: number
  payload: Array<TCasingNkt>
}
export const SET_DRILL_INSTRUMENT_KNBK_ELEMENTS =
  'SET_DRILL_INSTRUMENT_KNBK_ELEMENTS'
type SET_DRILL_INSTRUMENT_KNBK_ELEMENTS_ACTION = {
  type: typeof SET_DRILL_INSTRUMENT_KNBK_ELEMENTS
  flag?: string
  id?: number
  payload: Array<TDrillInstrumentKnbkElements>
}
export const SET_TECH_QUIPMENT = 'SET_TECH_QUIPMENT'
type SET_TECH_QUIPMENT_ACTION = {
  type: typeof SET_TECH_QUIPMENT
  flag?: string
  id?: number
  payload: Array<TTechEquipment>
}
export const SET_WORK_LINE = 'SET_WORK_LINE'
type SET_WORK_LINE_ACTION = {
  type: typeof SET_WORK_LINE
  flag?: string
  id?: number
  payload: Array<TWorkLine>
}
export const SET_DIESEL_WORK = 'SET_DIESEL_WORK'
type SET_DIESEL_WORK_ACTION = {
  type: typeof SET_DIESEL_WORK
  flag?: string
  id?: number
  payload: Array<TDieselWork>
}
export const SET_STAFF = 'SET_STAFF'
type SET_STAFF_ACTION = {
  type: typeof SET_STAFF
  flag?: string
  id?: number
  payload: Array<TStaff>
}
export const SET_SPECIAL_MACHINE_WORK = 'SET_SPECIAL_MACHINE_WORK'
type SET_SPECIAL_MACHINE_WORK_ACTION = {
  type: typeof SET_SPECIAL_MACHINE_WORK
  flag?: string
  id?: number
  payload: Array<TSpecialMachineryWork>
}
export const SET_DAYLI_REPORTS_DATA = 'SET_DAYLI_REPORTS_DATA'
type SET_DAYLI_REPORTS_DATA_ACTION = {
  type: typeof SET_DAYLI_REPORTS_DATA
  flag?: string
  id?: number
  payload: Array<TDayliReportType>
}
export const SET_DR_TECH_OPERATIONS = 'SET_DR_TECH_OPERATIONS'
type SET_DR_TECH_OPERATIONS_ACTION = {
  type: typeof SET_DR_TECH_OPERATIONS
  flag?: string
  id?: number
  payload: Array<TTechOper>
}
export const LOADING_DAYLI_REPORT = 'LOADING_DAYLI_REPORT'
type LOADING_DAYLI_REPORT_ACTION = {
  type: typeof LOADING_DAYLI_REPORT
}
export const STOP_LOADING_DAYLI_REPORT = 'STOP_LOADING_DAYLI_REPORT'
type STOP_LOADING_DAYLI_REPORT_ACTION = {
  type: typeof STOP_LOADING_DAYLI_REPORT
}
export type DAYLI_REPORT_REDUCER_ACTIONS =
  | SET_DAYLI_REPORT_WORK_STAGES_ACTION
  | SET_DR_SORT_LIST_ACTION
  | LOADING_DAYLI_REPORT_ACTION
  | STOP_LOADING_DAYLI_REPORT_ACTION
  | SET_DAILY_REPORT_ACTION
  | SET_DR_TECH_OPERATIONS_ACTION
  | SET_DAYLI_REPORTS_DATA_ACTION
  | SET_KNBK_ACTION
  | SET_CHISEL_DRILL_HEAD_ACTION
  | SET_MATERIAL_CONSUMPTION_ACTION
  | SET_BREAKDOWN_INSTRUMENT_ACTION
  | SET_CASING_NKT_ACTION
  | SET_WORK_LINE_ACTION
  | SET_DAYLI_REPORT_TYPES_ACTION
  | SET_TECH_QUIPMENT_ACTION
  | SET_STAFF_ACTION
  | SET_SPECIAL_MACHINE_WORK_ACTION
  | SET_CHISEL_ACTION
  | SET_DIESEL_WORK_ACTION
  | SET_DRILL_MORTAR_ACTION
  | SET_DAYLI_REPORT_KINDS_ACTION
  | SET_DRILL_PUMP_WORK_ACTION
  | SET_TECH_GEAR_ACTION
  | SET_DRILL_MORTAR_LOSS_ACTION
  | SET_CLEAN_SYSTEM_WORK_ACTION
  | SET_DISEL_CONSUMPTION_ACTION
  | SET_DRILL_MORTAR_PREP_ACTION
  | SET_DRILL_INSTRUMENT_KNBK_ELEMENTS_ACTION
  | SET_DRILL_MORTAR_VOLUME_ACTION
