import { AppStateType } from '../../store'
import { TColumn } from '../../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../../Reducers/FormsReducers/types'
import {
  TBreakdownInstrument,
  TCasingNkt,
  TChisel,
  TChiselDrillHead,
  TCleanSystemWork,
  TDieselConsumption,
  TDieselWork,
  TDrillInstrumentKnbkElements,
  TDrillMortar,
  TDrillMortarPrep,
  TDrillMortarVolume,
  TDrillMortarLoss,
  TKnbk,
  TMaterialConsumption,
  TDrillPumpWork,
  TSpecialMachineryWork,
  TStaff,
  TTechEquipment,
  TTechGear,
  TTechOper,
  TWorkLine,
  TDayliReport,
  TDayliReportType,
  TDayliReportKind,
  TWorkStage,
} from '../../types/reducers/typesDayliReportReducer'
import { selector } from '../instance'
//! data dr work stages
const getDayliReportsWorkStages = (state: AppStateType): TWorkStage[] =>
  state.dayliReport.workStages
export const selectDayliReportsWorkStages = selector<TWorkStage[]>(
  getDayliReportsWorkStages
)
//! data dr kinds
const getDayliReportsKinds = (state: AppStateType): TDayliReportKind[] =>
  state.dayliReport.dr_dayli_report_kinds
export const selectDayliReportsKinds = selector<TDayliReportKind[]>(
  getDayliReportsKinds
)
//columns & forms
//! data dr types
const getDayliReportsTypes = (state: AppStateType): TDayliReportType[] =>
  state.dayliReport.dr_dayli_report_types
export const selectDayliReportsTypes = selector<TDayliReportType[]>(
  getDayliReportsTypes
)
//columns & forms
//! data
const getDayliReports = (state: AppStateType): TDayliReport[] =>
  state.dayliReport.dayli_reports
export const selectDayliReports = selector<TDayliReport[]>(getDayliReports)
//columns & forms
const getDayliReportsColumns = (state: AppStateType): TColumn[] =>
  state.columns.dayliReport
export const selectDayliReportsColumns = selector<TColumn[]>(
  getDayliReportsColumns
)
const getDayliReportsMainForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReport.main
export const selectDayliReportsMainForm = selector<TObjectFormState>(
  getDayliReportsMainForm
)
const getDayliReportsAdditionallyForm = (
  state: AppStateType
): TObjectFormState => state.forms.dayliReport.additionally
export const selectDayliReportsAdditionallyForm = selector<TObjectFormState>(
  getDayliReportsAdditionallyForm
)
const getDayliReportsFilterForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReport.filter
export const selectDayliReportsFilterForm = selector<TObjectFormState>(
  getDayliReportsFilterForm
)
//! data
const getBreakDownInstrument = (state: AppStateType): TBreakdownInstrument[] =>
  state.dayliReport.dr_breakdown_instrument
export const selectDRBreakDownInstrument = selector<TBreakdownInstrument[]>(
  getBreakDownInstrument
)
//columns & forms
const getBreakDownInstrumentColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_breakdown_instrument
export const selectDRBreakDownInstrumentColumns = selector<TColumn[]>(
  getBreakDownInstrumentColumns
)
const getBreakDownInstrumentForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.drillBreakdownInstrument
export const selectDRBreakDownInstrumentForm = selector<TObjectFormState>(
  getBreakDownInstrumentForm
)
//! data
const getCasingNTK = (state: AppStateType): TCasingNkt[] =>
  state.dayliReport.dr_casing_nkt
export const selectDRCasingNTK = selector<TCasingNkt[]>(getCasingNTK)
//columns & forms
const getCasingNTKColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_casing_nkt
export const selectDRCasingNTKColumns = selector<TColumn[]>(getCasingNTKColumns)
const getCasingNTKForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.drillCasingNkt
export const selectDRCasingNTKForm = selector<TObjectFormState>(
  getCasingNTKForm
)
//! data Additionally
const getChisel = (state: AppStateType): TChisel[] =>
  state.dayliReport.dr_chisel
export const selectDRChisel = selector<TChisel[]>(getChisel)
//columns & forms
const getChiselColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_chisel
export const selectDRChiselColumns = selector<TColumn[]>(getChiselColumns)
const getChiselForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.chisel
export const selectDRChiselForm = selector<TObjectFormState>(getChiselForm)
const getChiselAdditionallyForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.chisel.additionally
export const selectDRChiselAdditionallyForm = selector<TObjectFormState>(
  getChiselAdditionallyForm
)
//! data
const getChiselDrillHead = (state: AppStateType): TChiselDrillHead[] =>
  state.dayliReport.dr_chisel_drill_head
export const selectDRChiselDrillHead = selector<TChiselDrillHead[]>(
  getChiselDrillHead
)
//columns & forms
const getChiselDrillHeadColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_chisel_drill_head
export const selectDRChiselDrillHeadColumns = selector<TColumn[]>(
  getChiselDrillHeadColumns
)
const getChiselDrillHeadForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.drillChiselDrillHead
export const selectDRChiselDrillHeadForm = selector<TObjectFormState>(
  getChiselDrillHeadForm
)
//! data
const getCleanSystemWork = (state: AppStateType): TCleanSystemWork[] =>
  state.dayliReport.dr_clean_system_work
export const selectDRCleanSystemWork = selector<TCleanSystemWork[]>(
  getCleanSystemWork
)
//columns & forms
const getCleanSystemWorkColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_clean_system_work
export const selectDRCleanSystemWorkColumns = selector<TColumn[]>(
  getCleanSystemWorkColumns
)
const getCleanSystemWorkForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.drillCleanSystem
export const selectDRCleanSystemWorkForm = selector<TObjectFormState>(
  getCleanSystemWorkForm
)
//! data
const getDieselConsumption = (state: AppStateType): TDieselConsumption[] =>
  state.dayliReport.dr_disel_consumption
export const selectDRDieselConsumption = selector<TDieselConsumption[]>(
  getDieselConsumption
)
//columns & forms
const getDieselConsumptionColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_disel_consumption
export const selectDRDieselConsumptionColumns = selector<TColumn[]>(
  getDieselConsumptionColumns
)
const getDieselConsumptionForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.drillDiselConsumption
export const selectDRDieselConsumptionForm = selector<TObjectFormState>(
  getDieselConsumptionForm
)
//! data
const getDieselWork = (state: AppStateType): TDieselWork[] =>
  state.dayliReport.dr_diesel_work
export const selectDRDieselWork = selector<TDieselWork[]>(getDieselWork)
//columns & forms
const getDieselWorkColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_diesel_work
export const selectDRDieselWorkColumns = selector<TColumn[]>(
  getDieselWorkColumns
)
const getDieselWorkForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.dieselWork
export const selectDRDieselWorkForm = selector<TObjectFormState>(
  getDieselWorkForm
)
//! data
const getDrillInstrumentKnbkElements = (
  state: AppStateType
): TDrillInstrumentKnbkElements[] =>
  state.dayliReport.dr_drill_instrument_knbk_elements
export const selectDRDrillInstrumentKnbkElements = selector<
  TDrillInstrumentKnbkElements[]
>(getDrillInstrumentKnbkElements)
//columns & forms
const getDrillInstrumentKnbkElementsColumns = (
  state: AppStateType
): TColumn[] => state.columns.dr_drill_instrument_knbk_elements
export const selectDRDrillInstrumentKnbkElementsColumns = selector<TColumn[]>(
  getDrillInstrumentKnbkElementsColumns
)
const getDrillInstrumentKnbkElementsForm = (
  state: AppStateType
): TObjectFormState =>
  state.forms.dayliReportDetails.drillInstrumentKnbkElements
export const selectDRDrillInstrumentKnbkElementsForm = selector<
  TObjectFormState
>(getDrillInstrumentKnbkElementsForm)
//! data
const getDrillMortar = (state: AppStateType): TDrillMortar[] =>
  state.dayliReport.dr_drill_mortar
export const selectDRDrillMortar = selector<TDrillMortar[]>(getDrillMortar)
const getDrillMortarAdditionallyForm = (
  state: AppStateType
): TObjectFormState => state.forms.dayliReportDetails.drillMortar.additionally
export const selectDRDrillMortarAdditionallyForm = selector<TObjectFormState>(
  getDrillMortarAdditionallyForm
)
//columns & forms
const getDrillMortarColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_drill_mortar
export const selectDRDrillMortarColumns = selector<TColumn[]>(
  getDrillMortarColumns
)
const getDrillMortarForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.drillMortar
export const selectDRDrillMortarForm = selector<TObjectFormState>(
  getDrillMortarForm
)
//! data
const getDrillMortarPrep = (state: AppStateType): TDrillMortarPrep[] =>
  state.dayliReport.dr_drill_mortar_prep
export const selectDRDrillMortarPrep = selector<TDrillMortarPrep[]>(
  getDrillMortarPrep
)
//columns & forms
const getDrillMortarPrepColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_drill_mortar_prep
export const selectDRDrillMortarPrepColumns = selector<TColumn[]>(
  getDrillMortarPrepColumns
)
const getDrillMortarPrepForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.drillMortarPrep
export const selectDRDrillMortarPrepForm = selector<TObjectFormState>(
  getDrillMortarPrepForm
)
//! data
const getDrillMortarVolume = (state: AppStateType): TDrillMortarVolume[] =>
  state.dayliReport.dr_drill_mortar_volume
export const selectDRDrillMortarVolume = selector<TDrillMortarVolume[]>(
  getDrillMortarVolume
)
//columns & forms
const getDrillMortarVolumeColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_drill_mortar_volume
export const selectDRDrillMortarVolumeColumns = selector<TColumn[]>(
  getDrillMortarVolumeColumns
)
const getDrillMortarVolumeForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.drillMortarVolume
export const selectDRDrillMortarVolumeForm = selector<TObjectFormState>(
  getDrillMortarVolumeForm
)
//! data
const getDrillMortatLoss = (state: AppStateType): TDrillMortarLoss[] =>
  state.dayliReport.dr_drill_mortar_loss
export const selectDRDrillMortatLoss = selector<TDrillMortarLoss[]>(
  getDrillMortatLoss
)
//columns & forms
const getDrillMortatLossColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_drill_mortar_loss
export const selectDRDrillMortatLossColumns = selector<TColumn[]>(
  getDrillMortatLossColumns
)
const getDrillMortatLossForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.drillMortarLoss
export const selectDRDrillMortatLossForm = selector<TObjectFormState>(
  getDrillMortatLossForm
)
//! data
const getKnbk = (state: AppStateType): TKnbk[] => state.dayliReport.dr_knbk
export const selectDRKnbk = selector<TKnbk[]>(getKnbk)
//columns & forms
const getKnbkColumns = (state: AppStateType): TColumn[] => state.columns.dr_knbk
export const selectDRKnbkColumns = selector<TColumn[]>(getKnbkColumns)
const getKnbkForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.knbk
export const selectDRKnbkForm = selector<TObjectFormState>(getKnbkForm)
//! data
const getMaterialConsumption = (state: AppStateType): TMaterialConsumption[] =>
  state.dayliReport.dr_material_consumption
export const selectDRMaterialConsumption = selector<TMaterialConsumption[]>(
  getMaterialConsumption
)
//columns & forms
const getMaterialConsumptionColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_material_consumption
export const selectDRMaterialConsumptionColumns = selector<TColumn[]>(
  getMaterialConsumptionColumns
)
const getMaterialConsumptionForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.drilllMaterialConsumption
export const selectDRMaterialConsumptionForm = selector<TObjectFormState>(
  getMaterialConsumptionForm
)
//! data
const getPumpWork = (state: AppStateType): TDrillPumpWork[] =>
  state.dayliReport.dr_drill_pump_work
export const selectDRPumpWork = selector<TDrillPumpWork[]>(getPumpWork)
//columns & forms
const getPumpWorkColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_drill_pump_work
export const selectDRPumpWorkColumns = selector<TColumn[]>(getPumpWorkColumns)
const getPumpWorkForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.drillPumpWork
export const selectDRPumpWorkForm = selector<TObjectFormState>(getPumpWorkForm)
//! data
const getSpecialMachineryWork = (
  state: AppStateType
): TSpecialMachineryWork[] => state.dayliReport.dr_special_machine_work
export const selectDRSpecialMachineryWork = selector<TSpecialMachineryWork[]>(
  getSpecialMachineryWork
)
//columns & forms
const getSpecialMachineryWorkColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_special_machine_work
export const selectDRSpecialMachineryWorkColumns = selector<TColumn[]>(
  getSpecialMachineryWorkColumns
)
const getSpecialMachineryWorkForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.specialMachineWork
export const selectDRSpecialMachineryWorkForm = selector<TObjectFormState>(
  getSpecialMachineryWorkForm
)
//! data
const getStaff = (state: AppStateType): TStaff[] => state.dayliReport.dr_staff
export const selectDRStaff = selector<TStaff[]>(getStaff)
//columns & forms
const getStaffColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_staff
export const selectDRStaffColumns = selector<TColumn[]>(getStaffColumns)
const getStaffForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.staff
export const selectDRStaffForm = selector<TObjectFormState>(getStaffForm)
//! data
const getTechEquipment = (state: AppStateType): TTechEquipment[] =>
  state.dayliReport.dr_tech_equipment
export const selectDRTechEquipment = selector<TTechEquipment[]>(
  getTechEquipment
)
//columns & forms
const getTechEquipmentColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_tech_equipment
export const selectDRTechEquipmentColumns = selector<TColumn[]>(
  getTechEquipmentColumns
)
const getTechEquipmentForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.drillTechEquipment
export const selectDRTechEquipmentForm = selector<TObjectFormState>(
  getTechEquipmentForm
)
//! data
const getTechGear = (state: AppStateType): TTechGear[] =>
  state.dayliReport.dr_tech_gear
export const selectDRTechGear = selector<TTechGear[]>(getTechGear)
//columns & forms
const getTechGearColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_tech_gear
export const selectDRTechGearColumns = selector<TColumn[]>(getTechGearColumns)
const getTechGearForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.drillTechGear
export const selectDRTechGearForm = selector<TObjectFormState>(getTechGearForm)
//! data tech operations
const getTechOpers = (state: AppStateType): TTechOper[] =>
  state.dayliReport.dr_tech_operations
export const selectDRTechOpers = selector<TTechOper[]>(getTechOpers)
//columns & forms
const getTechOpersColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_tech_operations
export const selectDRTechOpersColumns = selector<TColumn[]>(getTechOpersColumns)
const getTechOpersForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.techOperations
export const selectDRTechOpersForm = selector<TObjectFormState>(
  getTechOpersForm
)
const getTechOpersAdditionallyForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReport.techOperations.additionally
export const selectDRTechOpersAdditionallyForm = selector<TObjectFormState>(
  getTechOpersAdditionallyForm
) 
//! data
const getWorkLine = (state: AppStateType): TWorkLine[] =>
  state.dayliReport.dr_work_line
export const selectDRWorkLine = selector<TWorkLine[]>(getWorkLine)
//columns & forms
const getWorkLineColumns = (state: AppStateType): TColumn[] =>
  state.columns.dr_work_line
export const selectDRWorkLineColumns = selector<TColumn[]>(getWorkLineColumns)
const getWorkLineForm = (state: AppStateType): TObjectFormState =>
  state.forms.dayliReportDetails.drillWorkLine
export const selectDRWorkLineForm = selector<TObjectFormState>(getWorkLineForm)
