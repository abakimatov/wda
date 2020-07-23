import * as React from 'react'
//@ts-ignore
import { Header } from '@Templates/DerictoriesComponents/PageConstructor/Header'
import { repCalendarTimeBalance } from '@AppStore/Actions/Reports/CalendarTimeBalance'
import { connect } from 'react-redux'
import { TProps, TState } from './types'
import { AppStateType } from '@AppStore/store'
//@ts-ignore
import { PivotGridContainer } from './PivotGrid'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'

const Container: React.FC<TProps & TState> = ({
  calendarTimeBalance,
  repCalendarTimeBalance,
  setTitleToNavbar,
}) => {
  const [dates, setDates] = React.useState({
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now()),
  })
  React.useEffect(() => {
    setTitleToNavbar('Баланс календарного времени')
  }, [])
  React.useEffect(() => {
    const { startDate, endDate } = dates
    repCalendarTimeBalance(startDate, endDate)
  }, [dates.startDate, dates.endDate])
  const dispatchOnChange = (name: string, value: any) =>
    setDates({ ...dates, [name]: value })
  return (
    <section>
      <Header
        state={dates}
        forms={{
          dateItems: [
            { name: 'startDate', ruName: 'Дата начала' },
            { name: 'endDate', ruName: 'Дата окончания' },
          ],
        }}
        subData={{}}
        settings={{ popperPlacement: 'bottom' }}
        dispatchOnChange={(name: string, value: any) =>
          dispatchOnChange(name, value)
        }
      />
      <PivotGridContainer data={calendarTimeBalance} />
    </section>
  )
}

const mapState = (state: AppStateType) => ({
  calendarTimeBalance: state.reports.calendarTimeBalance,
})
const connector = connect(mapState, {
  repCalendarTimeBalance,
  setTitleToNavbar,
})
export const RepCalendarTimeBalance = connector(Container)
