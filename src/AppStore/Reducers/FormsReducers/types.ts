type TCheckBox = {
  name: string
  label: string
}
type TStringItem = {
  name: string
  type: string
  label: string
  maxLength: number
  required: boolean
  nonNegative?: boolean
}
type TSelectItem = {
  name: string
  label: string
  dataName: string
  disabled?: boolean
}
type TTimeItem = {
  name: string
  label: string
  settings?: {
    popperPlacement?: string
    type: string
  }
}
type TDateItem = TTimeItem
type TItems = {
  stringItems?: TStringItem[]
  selectItems?: TSelectItem[]
  timeItems?: TTimeItem[]
  dateItems?: TDateItem[]
  selectExFlags?: TSelectItem[]
  selectExFlagsItems?: TSelectItem[]
  checkBoxItems?: TCheckBox[]
}
export type TObjectFormState = {
  additionally?: TObjectFormState
  fullWidthItems?: TItems
} & TItems
export type TInitialStateForms = {
  depthDayGraph: {
    main: TObjectFormState
  }
  npvActDetail: {
    main: TObjectFormState
  }
  npvAct: {
    main: TObjectFormState
    filter: TObjectFormState
  }
  npvActKinds: {
    main: TObjectFormState
  }
  npvCause: {
    main: TObjectFormState
  }
  plans: {
    filter: TObjectFormState
    main: TObjectFormState
    detail: TObjectFormState
  }
  scenarios: {
    main: TObjectFormState
  }
  /* organization: {
    main: TObjectFormState
  } */
  project: {
    main: TObjectFormState
  }
  user: {
    main: TObjectFormState
  }
  /* workClassifier: {
    main: TObjectFormState
  } */
  /* workKind: {
    main: TObjectFormState
  } */
  workObject: {
    main: TObjectFormState
    executor: TObjectFormState
    hole: TObjectFormState
  }
  dayliReport: {
    main: TObjectFormState
    additionally: TObjectFormState
    filter: TObjectFormState
    techOperations: TObjectFormState
  }
  dayliReportDetails: {
    techOperations: TObjectFormState
    knbk: TObjectFormState
    chisel: TObjectFormState
    drillMortar: TObjectFormState
    drillMortarVolume: TObjectFormState
    drillMortarLoss: TObjectFormState
    drillCleanSystem: TObjectFormState
    drillPumpWork: TObjectFormState
    drillBreakdownInstrument: TObjectFormState
    drilllMaterialConsumption: TObjectFormState
    drillMortarPrep: TObjectFormState
    drillDiselConsumption: TObjectFormState
    drillChiselDrillHead: TObjectFormState
    drillTechGear: TObjectFormState
    drillCasingNkt: TObjectFormState
    drillInstrumentKnbkElements: TObjectFormState
    drillTechEquipment: TObjectFormState
    drillWorkLine: TObjectFormState
    dieselWork: TObjectFormState
    staff: TObjectFormState
    specialMachineWork: TObjectFormState
  }
  /* drillingRig: {
    main: TObjectFormState
  } */
  deposit: {
    main: TObjectFormState
  }
  /* contract: {
    main: TObjectFormState
    filter: TObjectFormState
  } */
  /* contractDetails: TObjectFormState */
  unit: {
    main: TObjectFormState
  }
  nomenclature: {
    main: TObjectFormState
  }
  nomenclatureTypes: {
    main: TObjectFormState
  }
  mortarTypes: {
    main: TObjectFormState
  }
}
