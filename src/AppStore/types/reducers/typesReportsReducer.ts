export type TPlanListDepthDayGraph = {
  date: string
  driving: number
  id: number
}
export type TDepthDayGraph = {
  drivingList: TPlanListDepthDayGraph[]
  pDepth: number
}
export type TCalendarBalanceTime = {
  project: string
  object: string
  drillingRig: string
  hours: number
  days: number
  driving: number
}
export type TReportReducer = {
  DepthDayGraph: TDepthDayGraph
  calendarTimeBalance: TCalendarBalanceTime[]
  calendarTimeBalanceDiag: any[]
  constructorTimeShedule: any[]
  constructorTimeSheduleShort: any[]
  daySummary: any[]
  loading: boolean
}
