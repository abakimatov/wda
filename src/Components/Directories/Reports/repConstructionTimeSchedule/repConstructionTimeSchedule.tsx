import * as React from 'react'
//@ts-ignore
import { Header } from '@Templates/DerictoriesComponents/PageConstructor/Header'
//@ts-ignore
import { GanttContainer } from './GanttContainer.js'
//@ts-ignore
import { repConstructionTimeSchedule } from '@AppStore/Actions/Reports/ConstructionTimeSchedule'
import { AppStateType } from '@AppStore/store'
import { connect } from 'react-redux'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
//==========================================//
type TProps = {
  setTitleToNavbar: (title: string) => void
  repConstructionTimeSchedule: (
    startDate: Date,
    endDate: Date,
    isPlan: boolean
  ) => void
  constructorTimeShedule: any[]
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
    this.props.repConstructionTimeSchedule(startDate, endDate, isPlan)
    this.props.setTitleToNavbar('План-график строительства (виды работ)')
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
      this.props.repConstructionTimeSchedule(startDate, endDate, isPlan)
    }
  }
  dispatchOnChange = (name: string, value: any) => {
    console.log(`name`, name, `value`, value)
    //@ts-ignore
    this.setState({ [name]: value })
  }

  render() {
    console.log(this.state)
    const { constructorTimeShedule } = this.props
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
        {/* <PivotGridContainer data={constructorTimeShedule} /> */}
        <GanttContainer data={constructorTimeShedule} />
      </section>
    )
  }
}
const mapState = (state: AppStateType) => ({
  constructorTimeShedule: state.reports.constructorTimeShedule,
})
const connector = connect(mapState, {
  repConstructionTimeSchedule,
  setTitleToNavbar,
})
export const RepConstructionTimeSchedule = connector(Container)
