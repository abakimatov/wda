import * as React from 'react'
//@ts-ignore
import { Header } from '@Templates/DerictoriesComponents/PageConstructor/Header'
//@ts-ignore
import { PivotGridContainer } from './PivotGrid'
import { AppStateType } from '@AppStore/store'
import { connect } from 'react-redux'
import { repConstructionTimeScheduleShort } from '@AppStore/Actions/Reports/ConstructionTimeScheduleShort'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
type TProps = {
  repConstructionTimeScheduleShort: (
    startDate: Date,
    endDate: Date,
    isPlan: boolean
  ) => void
  setTitleToNavbar: (title: string) => void
  constructorTimeSheduleShort: any[]
}
type TState = {
  startDate: Date
  endDate: Date
  isPlan: boolean
}
class Container extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props)
    this.state = {
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now()),
      isPlan: false,
    }
  }
  componentDidMount() {
    let startDate = new Date()
    startDate.setFullYear(2000, 1, 1)
    const endDate = new Date(Date.now())
    const isPlan = this.state.isPlan
    this.props.repConstructionTimeScheduleShort(startDate, endDate, isPlan)
    this.props.setTitleToNavbar('План-график строительства (краткий)')
  }
  componentDidUpdate(prevProps: TProps, prevState: TState) {
    const prevStartDate = prevState.startDate
    const prevEndDate = prevState.endDate
    const prevIsPlan = prevState.isPlan
    const { startDate, endDate, isPlan } = this.state
    if (
      prevStartDate !== startDate ||
      prevEndDate !== endDate ||
      prevIsPlan !== isPlan
    ) {
      this.props.repConstructionTimeScheduleShort(startDate, endDate, isPlan)
    }
  }
  dispatchOnChange = (name: string, value: any) => {
    //@ts-ignore
    this.setState({ [name]: value })
  }
  render() {
    const { constructorTimeSheduleShort } = this.props
    return (
      <section>
        <Header
          state={this.state}
          forms={{
            dateItems: [
              { name: 'startDate', ruName: 'Дата начала' },
              { name: 'endDate', ruName: 'Дата окончания' },
            ],
            checkBoxItems: [
              { name: 'isPlan', label: 'Из суточных рапортов/Из планов' },
            ],
          }}
          subData={{}}
          settings={{ popperPlacement: 'bottom' }}
          dispatchOnChange={this.dispatchOnChange}
        />
        <PivotGridContainer data={constructorTimeSheduleShort} />
      </section>
    )
  }
}
const mapState = (state: AppStateType) => ({
  constructorTimeSheduleShort: state.reports.constructorTimeSheduleShort,
})
const connector = connect(mapState, {
  repConstructionTimeScheduleShort,
  setTitleToNavbar,
})
export const RepConstructionTimeScheduleShort = connector(Container)
