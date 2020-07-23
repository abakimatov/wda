import { IDefaultMapDispatch, IDefaultMapState } from '../../types'
import {
  TTechOper,
  TKnbk,
  TChisel,
  TDrillMortar,
  TDrillMortarVolume,
  TDrillPumpWork,
  TCleanSystemWork,
  TBreakdownInstrument,
  TMaterialConsumption,
  TDrillMortarPrep,
  TDieselConsumption,
  TChiselDrillHead,
  TTechGear,
  TCasingNkt,
  TDrillInstrumentKnbkElements,
  TTechEquipment,
  TWorkLine,
  TDieselWork,
  TStaff,
  TSpecialMachineryWork,
  TDrillMortarLoss,
} from '@AppStore/types/reducers/typesDayliReportReducer'
import {
  TWorkKind,
  TWorkClassifier,
  TOrganizations,
  TNomenclature,
  TUnits,
  TDrillingRig,
} from '@AppStore/types/reducers/typesDataReducer'
//tech oper
export interface IMapStateTechOper extends IDefaultMapState {
  data: TTechOper[]
  parentIdUrlParam: number
  workKinds: TWorkKind[]
  workClassifiers: TWorkClassifier[]
  organizations: TOrganizations[]
  drillingRigs: TDrillingRig[]
}
export interface IMapDispatchTechOper extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRTechOper: (
    flag: string,
    body: TTechOper,
    handleClose: () => void
  ) => void
  getWorkClassifier: () => void
  getWorkKinds: () => void
  getOrganizations: () => void
  getDrillingRigs: () => void
}
// knbk
export interface IMapStateKnbk extends IDefaultMapState {
  data: TKnbk[]
  parentIdUrlParam: number
}
export interface IMapDispatchKnbk extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRKnbk: (flag: string, body: TKnbk, handleClose: () => void) => void
}
//chisel
export interface IMapStateChisel extends IDefaultMapState {
  data: TChisel[]
  parentIdUrlParam: number
}
export interface IMapDispatchChisel extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRChisel: (flag: string, body: TChisel, handleClose: () => void) => void
}
//drill mortar
export interface IMapStateDrillMortar extends IDefaultMapState {
  data: TDrillMortar[]
  parentIdUrlParam: number
}
export interface IMapDispatchDrillMortar extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRDrillMortar: (
    flag: string,
    body: TDrillMortar,
    handleClose: () => void
  ) => void
}
//drill mortar volume
export interface IMapStateDrillMortarVolume extends IDefaultMapState {
  data: TDrillMortarVolume[]
  parentIdUrlParam: number
}
export interface IMapDispatchDrillMortarVolume extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRDrillMortarVolume: (
    flag: string,
    body: TDrillMortarVolume,
    handleClose: () => void
  ) => void
}
//drill pump work
export interface IMapStateDrillPumpWork extends IDefaultMapState {
  data: TDrillPumpWork[]
  nomenclature: TNomenclature[]
  parentIdUrlParam: number
}
export interface IMapDispatchDrillPumpWork extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRDrillPumpWork: (
    flag: string,
    body: TDrillPumpWork,
    handleClose: () => void
  ) => void
  getNomenclature: () => void
}
//clean sustem work
export interface IMapStateCleanSystemWork extends IDefaultMapState {
  data: TCleanSystemWork[]
  nomenclature: TNomenclature[]
  parentIdUrlParam: number
}
export interface IMapDispatchCleanSystemWork extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRCleanSystemWork: (
    flag: string,
    body: TCleanSystemWork,
    handleClose: () => void
  ) => void
  getNomenclature: () => void
}
//BreakdownInstrument
export interface IMapStateBreakdownInstrument extends IDefaultMapState {
  data: TBreakdownInstrument[]
  nomenclature: TNomenclature[]
  parentIdUrlParam: number
}
export interface IMapDispatchBreakdownInstrument extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRBreakdownInstrument: (
    flag: string,
    body: TBreakdownInstrument,
    handleClose: () => void
  ) => void
  getNomenclature: () => void
}
//MaterialConsumption
export interface IMapStateMaterialConsumption extends IDefaultMapState {
  data: TMaterialConsumption[]
  nomenclature: TNomenclature[]
  units: TUnits[]
  parentIdUrlParam: number
}
export interface IMapDispatchMaterialConsumption extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRMaterialConsumption: (
    flag: string,
    body: TMaterialConsumption,
    handleClose: () => void
  ) => void
  getNomenclature: () => void
  getUnits: () => void
}
//DrillMortarPrep
export interface IMapStateDrillMortarPrep extends IDefaultMapState {
  data: TDrillMortarPrep[]
  parentIdUrlParam: number
}
export interface IMapDispatchDrillMortarPrep extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRDrillMortarPrep: (
    flag: string,
    body: TDrillMortarPrep,
    handleClose: () => void
  ) => void
}
//DieselConsumption
export interface IMapStateDieselConsumption extends IDefaultMapState {
  data: TDieselConsumption[]
  nomenclature: TNomenclature[]
  units: TUnits[]
  parentIdUrlParam: number
}
export interface IMapDispatchDieselConsumption extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRDieselConsumption: (
    flag: string,
    body: TDieselConsumption,
    handleClose: () => void
  ) => void
  getNomenclature: () => void
  getUnits: () => void
}
//ChiselDrillHead
export interface IMapStateChiselDrillHead extends IDefaultMapState {
  data: TChiselDrillHead[]
  nomenclature: TNomenclature[]
  parentIdUrlParam: number
}
export interface IMapDispatchChiselDrillHead extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRChiselDrillHead: (
    flag: string,
    body: TChiselDrillHead,
    handleClose: () => void
  ) => void
  getNomenclature: () => void
}
//TechGear
export interface IMapStateTechGear extends IDefaultMapState {
  data: TTechGear[]
  nomenclature: TNomenclature[]
  units: TUnits[]
  parentIdUrlParam: number
}
export interface IMapDispatchTechGear extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRTechGear: (
    flag: string,
    body: TTechGear,
    handleClose: () => void
  ) => void
  getNomenclature: () => void
  getUnits: () => void
}
//CasingNKT
export interface IMapStateCasingNKT extends IDefaultMapState {
  data: TCasingNkt[]
  nomenclature: TNomenclature[]
  parentIdUrlParam: number
}
export interface IMapDispatchCasingNKT extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRCasingNKT: (
    flag: string,
    body: TCasingNkt,
    handleClose: () => void
  ) => void
  getNomenclature: () => void
}
//DrillInstrumentKnbkElements
export interface IMapStateDrillInstrumentKnbkElements extends IDefaultMapState {
  data: TDrillInstrumentKnbkElements[]
  nomenclature: TNomenclature[]
  parentIdUrlParam: number
}
export interface IMapDispatchDrillInstrumentKnbkElements
  extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRDrillInstrumentKnbkElements: (
    flag: string,
    body: TDrillInstrumentKnbkElements,
    handleClose: () => void
  ) => void
  getNomenclature: () => void
}
//TechEquipment
export interface IMapStateTechEquipment extends IDefaultMapState {
  data: TTechEquipment[]
  nomenclature: TNomenclature[]
  parentIdUrlParam: number
}
export interface IMapDispatchTechEquipment extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRTechEquipment: (
    flag: string,
    body: TTechEquipment,
    handleClose: () => void
  ) => void
  getNomenclature: () => void
}
//WorkLine
export interface IMapStateWorkLine extends IDefaultMapState {
  data: TWorkLine[]
  parentIdUrlParam: number
}
export interface IMapDispatchWorkLine extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRWorkLine: (
    flag: string,
    body: TWorkLine,
    handleClose: () => void
  ) => void
}
//DieselWork
export interface IMapStateDieselWork extends IDefaultMapState {
  data: TDieselWork[]
  nomenclature: TNomenclature[]
  parentIdUrlParam: number
}
export interface IMapDispatchDieselWork extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRDieselWork: (
    flag: string,
    body: TDieselWork,
    handleClose: () => void
  ) => void
  getNomenclature: () => void
}
//Staff
export interface IMapStateStaff extends IDefaultMapState {
  data: TStaff[]
  organizations: TOrganizations[]
  parentIdUrlParam: number
}
export interface IMapDispatchStaff extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRStaff: (flag: string, body: TStaff, handleClose: () => void) => void
  getOrganizations: () => void
}
//SpecialMachineryWork
export interface IMapStateSpecialMachineryWork extends IDefaultMapState {
  data: TSpecialMachineryWork[]
  nomenclature: TNomenclature[]
  parentIdUrlParam: number
}
export interface IMapDispatchSpecialMachineryWork extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRSpecialMachineryWork: (
    flag: string,
    body: TSpecialMachineryWork,
    handleClose: () => void
  ) => void
  getNomenclature: () => void
}
//DrillMortarLoss
export interface IMapStateDrillMortarLoss extends IDefaultMapState {
  data: TDrillMortarLoss[]
  parentIdUrlParam: number
}
export interface IMapDispatchDrillMortarLoss extends IDefaultMapDispatch {
  iudFunctionWithRedirectToItemsPage: (openAdd: boolean) => void
  getData: () => void
  iudDRDrillMortarLoss: (
    flag: string,
    body: TDrillMortarLoss,
    handleClose: () => void
  ) => void
}
