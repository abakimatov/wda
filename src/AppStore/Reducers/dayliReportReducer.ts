import {
  SET_KNBK,
  SET_CHISEL,
  SET_DRILL_MORTAR,
  SET_DRILL_MORTAR_VOLUME,
  SET_DRILL_MORTAR_LOSS,
  SET_DRILL_PUMP_WORK,
  SET_CLEAN_SYSTEM_WORK,
  SET_BREAKDOWN_INSTRUMENT,
  SET_MATERIAL_CONSUMPTION,
  SET_DRILL_MORTAR_PREP,
  SET_DISEL_CONSUMPTION,
  SET_CHISEL_DRILL_HEAD,
  SET_TECH_GEAR,
  SET_CASING_NKT,
  SET_DRILL_INSTRUMENT_KNBK_ELEMENTS,
  SET_TECH_QUIPMENT,
  SET_WORK_LINE,
  SET_DIESEL_WORK,
  SET_STAFF,
  SET_SPECIAL_MACHINE_WORK,
  SET_DAYLI_REPORT_TYPES,
  SET_DAYLI_REPORT_KINDS,
  SET_DR_TECH_OPERATIONS,
  DAYLI_REPORT_REDUCER_ACTIONS,
  SET_DAILY_REPORT,
  LOADING_DAYLI_REPORT,
  STOP_LOADING_DAYLI_REPORT,
  SET_DR_SORT_LIST,
  SET_DAYLI_REPORT_WORK_STAGES,
} from '../types/actions/actionsDayliReportReducer'
import { TDayliReportReducer } from '@AppStore/types/reducers/typesDayliReportReducer'

type InitialState = TDayliReportReducer

const initialState: TDayliReportReducer = {
  dayli_reports: [],
  dr_tech_operations: [], //
  dr_knbk: [], //
  dr_chisel: [], //
  dr_drill_mortar: [], //
  dr_drill_mortar_volume: [], //
  dr_drill_pump_work: [],
  dr_clean_system_work: [],
  dr_breakdown_instrument: [],
  dr_material_consumption: [],
  dr_drill_mortar_prep: [],
  dr_disel_consumption: [],
  dr_chisel_drill_head: [],
  dr_tech_gear: [],
  dr_casing_nkt: [],
  dr_drill_instrument_knbk_elements: [],
  dr_tech_equipment: [],
  dr_work_line: [],
  dr_diesel_work: [],
  dr_staff: [],
  dr_special_machine_work: [],
  dr_dayli_report_kinds: [],
  dr_dayli_report_types: [],
  dr_drill_mortar_loss: [],
  loading: false,
  sortList: [],
  workStages: [],
}

export const dayliReportReducer = (
  state = initialState,
  action: DAYLI_REPORT_REDUCER_ACTIONS
): InitialState => {
  switch (action.type) {
    case SET_DAYLI_REPORT_WORK_STAGES:
      return {
        ...state,
        workStages: action.payload,
      }
    case SET_DR_SORT_LIST:
      return {
        ...state,
        sortList: action.payload,
        loading: false,
      }
    case LOADING_DAYLI_REPORT:
      return {
        ...state,
        loading: true,
      }
    case STOP_LOADING_DAYLI_REPORT:
      return {
        ...state,
        loading: false,
      }
    case SET_DAILY_REPORT:
      return {
        ...state,
        dayli_reports: action.payload,
      }
    case SET_DR_TECH_OPERATIONS:
      return {
        ...state,
        dr_tech_operations: action.payload,
      }
    case SET_DAYLI_REPORT_KINDS:
      return {
        ...state,
        dr_dayli_report_kinds: action.payload,
      }
    case SET_DAYLI_REPORT_TYPES:
      return {
        ...state,
        dr_dayli_report_types: action.payload,
      }
    case SET_SPECIAL_MACHINE_WORK:
      return {
        ...state,
        dr_special_machine_work: action.payload,
      }
    case SET_STAFF:
      return {
        ...state,
        dr_staff: action.payload,
      }
    case SET_DIESEL_WORK:
      return {
        ...state,
        dr_diesel_work: action.payload,
      }
    case SET_WORK_LINE:
      return {
        ...state,
        dr_work_line: action.payload,
      }
    case SET_TECH_QUIPMENT:
      return {
        ...state,
        dr_tech_equipment: action.payload,
      }
    case SET_DRILL_INSTRUMENT_KNBK_ELEMENTS:
      return {
        ...state,
        dr_drill_instrument_knbk_elements: action.payload,
      }
    case SET_CASING_NKT:
      return {
        ...state,
        dr_casing_nkt: action.payload,
      }
    case SET_TECH_GEAR:
      return {
        ...state,
        dr_tech_gear: action.payload,
      }
    case SET_CHISEL_DRILL_HEAD:
      return {
        ...state,
        dr_chisel_drill_head: action.payload,
      }
    case SET_DISEL_CONSUMPTION:
      return {
        ...state,
        dr_disel_consumption: action.payload,
      }
    case SET_DRILL_MORTAR_PREP:
      return {
        ...state,
        dr_drill_mortar_prep: action.payload,
      }
    case SET_MATERIAL_CONSUMPTION:
      return {
        ...state,
        dr_material_consumption: action.payload,
      }
    case SET_BREAKDOWN_INSTRUMENT:
      return {
        ...state,
        dr_breakdown_instrument: action.payload,
      }
    case SET_CLEAN_SYSTEM_WORK:
      return {
        ...state,
        dr_clean_system_work: action.payload,
      }
    case SET_DRILL_PUMP_WORK:
      return {
        ...state,
        dr_drill_pump_work: action.payload,
      }
    case SET_DRILL_MORTAR_LOSS:
      return {
        ...state,
        dr_drill_mortar_loss: action.payload,
      }
    case SET_DRILL_MORTAR_VOLUME:
      return {
        ...state,
        dr_drill_mortar_volume: action.payload,
      }
    case SET_DRILL_MORTAR:
      return {
        ...state,
        dr_drill_mortar: action.payload,
      }
    case SET_CHISEL:
      return {
        ...state,
        dr_chisel: action.payload,
      }
    case SET_KNBK:
      return {
        ...state,
        dr_knbk: action.payload,
      }
    default:
      return state
  }
}
