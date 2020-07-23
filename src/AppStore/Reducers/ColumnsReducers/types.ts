export type TColumn = {
  id: number
  dataField: string
  dataType: string
  caption: string
  format?: string
  size?: number
  width?: string
}
export type TInitialState = {
  npvActDetails: TColumn[]
  planDetails: TColumn[]
  nomenclatureTypes: TColumn[]
  scenarios: TColumn[]
  plans: TColumn[]
  unit: TColumn[]
  mortarTypes: TColumn[]
  nomenclature: TColumn[]
  /* organization: TColumn[] */
  project: TColumn[]
  user: TColumn[]
  /* workClassifier: TColumn[] */
  /* workKind: TColumn[] */
  workObject: TColumn[]
  workObjectExecutor: TColumn[]
  workObjectHole: TColumn[]
  dayliReport: TColumn[]
  dr_tech_operations: TColumn[]
  dr_knbk: TColumn[]
  dr_chisel: TColumn[]
  dr_drill_mortar: TColumn[]
  dr_drill_mortar_volume: TColumn[]
  dr_drill_mortar_loss: TColumn[]
  dr_clean_system_work: TColumn[]
  dr_drill_pump_work: TColumn[]
  dr_breakdown_instrument: TColumn[]
  dr_material_consumption: TColumn[]
  dr_drill_mortar_prep: TColumn[]
  dr_disel_consumption: TColumn[]
  dr_chisel_drill_head: TColumn[]
  dr_tech_gear: TColumn[]
  dr_casing_nkt: TColumn[]
  dr_drill_instrument_knbk_elements: TColumn[]
  dr_tech_equipment: TColumn[]
  dr_work_line: TColumn[]
  dr_diesel_work: TColumn[]
  dr_staff: TColumn[]
  dr_special_machine_work: TColumn[]
  /* drillingRig: TColumn[] */
  /* contract: TColumn[] */
  /* contractDetails: TColumn[] */
  deposit: TColumn[]
  npvCause: TColumn[]
  npvActKinds: TColumn[]
  npvAct: TColumn[]
}
