export type TDayliReportType = {
  id: number
  name: string
}
export type TTechOper = {
  id: number
  workKindId: number
  workKindName: string
  classifierId: number
  classifierName: string
  operDescription: string
  startTime: string
  endTime: string
  driving: number
  npvDescription: string
  npvResponsibleId: number
  npvResponsibleName: string
  serviceName: string
}
export type TChisel = {
  id: number
  tripNumber: number
  externalD: number
  chiselModel: string
  iadcCode: string
  chiselNumber: number
  turns: number
  load: number
  feed: number
  startInterval: number
  endInterval: number
  pressure: number
  drillingTime: number
  mechSpeed: number
  workCode: string
  note: string
}
export type TDrillMortar = {
  id: number
  measureTime: string
  typeId: number
  typeName: string
  y: string
  t: string
  f: string
  crust: string
  ph: string
  sns: string
  dns: string
  viscocity: string
  ktk: string
  sand: string
  solidPhase: string
  mvt: string
  filtrateDensity: string
  chl: string
  cal: string
  es: string
  note: string
}
export type TDrillMortarVolume = {
  id: number
  measureTime: string
  gage1: number
  gage2: number
  gage3: number
  gage4: number
  gage5: number
  bpr: number
  bde: number
  ca: number
  inHole: number
  csgo: number
  popping: number
  onSurface: number
  total: number
}
export type TDrillMortarPrep = {
  id: number
  measureTime: string
  gage1: number
  gage2: number
  gage3: number
  gage4: number
  gage5: number
  bpr: number
  bde: number
  ca: number
  inHole: number
  csgo: number
  popping: number
  onSurface: number
  total: number
}
export type TDrillMortarLoss = {
  id: number
  measureTime: string
  complication: number
  recess: number
  spo: number
  cleaning: number
  other: number
  filtration: number
  dump: number
}
export type TCleanSystemWork = {
  id: number
  orderNum: number
  nomId: number
  nomName: string
  state: boolean
  workHours: number
  status: string
}
export type TDrillPumpWork = {
  id: number
  orderNum: number
  nomId: number
  nomName: string
  sleeveD: number
  moveCount: number
  feed: number
  pressure: number
}
export type TBreakdownInstrument = {
  id: number
  orderNum: number
  nomId: number
  nomName: string
  hasPassport: boolean
  startQuantity: number
  incomeQuantity: number
  expenditureQuantity: number
  endQuantity: number
}
export type TMaterialConsumption = {
  id: number
  orderNum: number
  nomId: number
  nomName: string
  unitId: number
  unitName: string
  startQuantity: number
  incomeQuantity: number
  expenditureQuantity: number
  endQuantity: number
}
export type TDieselConsumption = {
  id: number
  orderNum: number
  consumer: string
  nomId: number
  nomName: string
  unitId: number
  unitName: string
  quantity: number
  total: number
}
export type TChiselDrillHead = {
  id: number
  orderNum: number
  nomId: number
  nomName: string
  factoryNumber: string
  startQuantity: number
  incomeQuantity: number
  expenditureQuantity: number
  endQuantity: number
}
export type TTechGear = {
  id: number
  orderNum: number
  nomId: number
  nomName: string
  unitId: number
  unitName: string
  startQuantity: number
  incomeQuantity: number
  expenditureQuantity: number
  endQuantity: number
}
export type TCasingNkt = {
  id: number
  orderNum: number
  nomId: number
  nomName: string
  externalD: number
  wallThickness: number
  firmnessGroup: string
  threadType: string
  startQuantityP: number
  startQuantityM: number
  incomeQuantityP: number
  incomeQuantityM: number
  expendQuantityP: number
  expendQuantityM: number
  defectP: number
  defectM: number
  defectNote: string
  endQuantityP: number
  endQuantityM: number
}
export type TDrillInstrumentKnbkElements = {
  id: number
  orderNum: number
  nomId: number
  nomName: string
  externalD: number
  internalD: number
  firmnessGroup: string
  startQP: number
  startQM: number
  startQT: number
  incomeQP: number
  incomeQM: number
  incomeQT: number
  expendQP: number
  expendQM: number
  expendQT: number
  endQP: number
  endQM: number
  endQT: number
  runningTime: number
  runningTimeStart: number
  defectoscopyDate: string
}
export type TTechEquipment = {
  id: number
  nomId: number
  nomName: string
  hasPassport: boolean
  startQ: number
  incomeQ: number
  expendQ: number
  endQ: number
}
export type TWorkLine = {
  id: number
  orderNum: number
  diameter: number
  installDate: string
  coilLength: number
  tooling: string
  overwindDate: string
  overwindOperating: number
  overwindLength: number
  runningTimeSensor: number
  runningTmeEstim: number
  runningTimeSensorTotal: number
  runningTimeEstimTotal: number
}
export type TDieselWork = {
  id: number
  orderNum: number
  nomId: number
  nomName: string
  factoryNumber: string
  run: number
  monthRun: number
  totalRun: number
  state: string
}
export type TStaff = {
  id: number
  orderNum: number
  orgId: number
  orgName: string
  position: string
  name: string
  hours: number
}
export type TSpecialMachineryWork = {
  id: number
  orderNum: number
  nomId: number
  nomName: string
  stateNumber: string
  driverName: string
  work: number
  duty: number
  repair: number
  sediment: number
  note: string
  description: string
}
export type TDayliReport = {
  id: number
  docNumber: string
  docDate: string
  comment: string
  orgId: number
  orgName: string
  statusId: number
  statusName: string
  workObjectId: number
  workObjectName: string
  userConfirmed: null
  userConfirmedId: null
  userResponsible: string
  typeId: number
  typeName: string
  kindId: number
  kindName: string
  t12: number
  t24: number
  chiselEngComment: string
  mortarEngComment: string
  supervisorComment: string
  drillMasterComment: string
  supervisor1: string
  supervisor2: string
  drillMaster: string
  mortarEng: string
  chiselEng: string
  techEng: string
  dayPlan: string
  windSpeed: number
  precipitation: number
  email: string
  phone: string
  drillingRigId: number
  drillingRigName: string
  dateCreated: Date
}
export type TDayliReportKind = {
  id: number
  name: string
  mnemo: string
}
export type TKnbk = {
  id: number
  tripNumber: number
  knbkElement: string
  externalD: number
  internalD: number
  quantity: number
  length: number
  totalLength: number
  mass: number
  totalMass: number
}
export type TSortList = {
  id: number
  objId: number
  type: string
  name: string
  parentId?: number
}
export type TWorkStage = {
  id: number
  name: string
}

export type TDayliReportDetails = {
  dr_tech_operations: TTechOper[]
  dr_knbk: TKnbk[]
  dr_chisel: TChisel[]
  dr_drill_mortar: TDrillMortar[]
  dr_drill_mortar_volume: TDrillMortarVolume[]
  dr_drill_pump_work: TDrillPumpWork[]
  dr_clean_system_work: TCleanSystemWork[]
  dr_breakdown_instrument: TBreakdownInstrument[]
  dr_material_consumption: TMaterialConsumption[]
  dr_drill_mortar_prep: TDrillMortarPrep[]
  dr_disel_consumption: TDieselConsumption[]
  dr_chisel_drill_head: TChiselDrillHead[]
  dr_tech_gear: TTechGear[]
  dr_casing_nkt: TCasingNkt[]
  dr_drill_instrument_knbk_elements: TDrillInstrumentKnbkElements[]
  dr_tech_equipment: TTechEquipment[]
  dr_work_line: TWorkLine[]
  dr_diesel_work: TDieselWork[]
  dr_staff: TStaff[]
  dr_special_machine_work: TSpecialMachineryWork[]
  dr_drill_mortar_loss: TDrillMortarLoss[]
}
export type TDayliReportReducer = {
  dayli_reports: TDayliReport[]
  dr_dayli_report_kinds: TDayliReportKind[]
  dr_dayli_report_types: TDayliReportType[]
  loading: boolean
  sortList: TSortList[]
  workStages: TWorkStage[]
} & TDayliReportDetails
