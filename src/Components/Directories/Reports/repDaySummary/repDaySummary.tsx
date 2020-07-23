import * as React from 'react'
//@ts-ignore
import { Header } from '@Templates/DerictoriesComponents/PageConstructor/Header'
import { repDaySummary } from '@AppStore/Actions/Reports/DaySummary'
import { connect } from 'react-redux'
//@ts-ignore
import { PivotGridContainer } from './PivotGrid'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
import { AppStateType } from '@AppStore/store'

type TProps = {
  data: any[]
  repDaySummary: (date: Date) => void
  setTitleToNavbar: (title: string) => void
}
const Container: React.FC<TProps> = React.memo(
  ({ data, repDaySummary, setTitleToNavbar }) => {
    const [startDate, setStartDate] = React.useState(new Date(Date.now()))
    React.useEffect(() => {
      setTitleToNavbar('Суточная сводка (форма 155-ГАЗ)')
    }, [])
    React.useEffect(() => {
      repDaySummary(startDate)
    }, [startDate])
    return (
      <section style={{ background: '#fff' }}>
        <Header
          state={{ startDate }}
          forms={{
            dateItems: [{ name: 'startDate', ruName: 'Дата формирования' }],
          }}
          subData={{}}
          settings={{ popperPlacement: 'bottom' }}
          dispatchOnChange={(name: string, value: any) => setStartDate(value)}
        />
        <PivotGridContainer data={data} />
      </section>
    )
  }
)
const mapState = (state: AppStateType) => ({
  data: state.reports.daySummary,
})
const connector = connect(mapState, { repDaySummary, setTitleToNavbar })
export const RepDaySummary = connector(Container)
