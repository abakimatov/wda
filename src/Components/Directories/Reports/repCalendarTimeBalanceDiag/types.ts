import { TWorkObject } from '@AppStore/types/reducers/typesDataReducer'

export type TProps = {
  setTitleToNavbar: (title: string) => void
  repCalendarTimeBalanceDiag: (
    workObjectId: number,
    startDate: Date,
    endDate: Date,
    isPlan: boolean
  ) => void
  getWorkObjects: () => void
  calendarTimeBalanceDiag: any[]
  workObjects: TWorkObject[]
}
export type TState = {
  startDate: Date
  endDate: Date
  isPlan: boolean
  workObjectId: number
}
