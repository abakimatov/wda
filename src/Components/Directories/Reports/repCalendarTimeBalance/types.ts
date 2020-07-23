import { TCalendarBalanceTime } from '@AppStore/types/reducers/typesReportsReducer'

export type TProps = {
  calendarTimeBalance: TCalendarBalanceTime[]
  repCalendarTimeBalance: (startDate: Date, endDate: Date) => void
  setTitleToNavbar: (title: string) => void
}
export type TState = {
  startDate: Date
  endDate: Date
}
