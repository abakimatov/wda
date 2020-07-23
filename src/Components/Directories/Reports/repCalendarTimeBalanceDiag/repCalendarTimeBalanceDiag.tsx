import * as React from 'react'
//@ts-ignore
import { Header } from '@Templates/DerictoriesComponents/PageConstructor/Header'
//@ts-ignore
import styles from './styles.module.scss'
import { TProps, TState } from './types'
import { repCalendarTimeBalanceDiag } from '@AppStore/Actions/Reports/CalendarTimeBalanceDiag'
import { connect } from 'react-redux'
import { AppStateType } from '@AppStore/store'
//@ts-ignore
import { PieChartContainer } from './pieCharts'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
import { getWorkObjects } from '@AppStore/Actions/Derictories/WorkObjects'
import { selectWorkObjects } from '@AppStore/Selectors/workObjects'

export class Container extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props)
    this.state = {
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now()),
      isPlan: false,
      workObjectId: null,
    }
  }
  componentDidMount() {
    const { workObjectId, isPlan } = this.state
    let startDate = new Date()
    startDate.setFullYear(2000, 1, 1)
    const endDate = new Date(Date.now())
    this.props.repCalendarTimeBalanceDiag(
      26, //workObjectId
      startDate,
      endDate,
      isPlan
    )
    this.props.getWorkObjects()
    this.props.setTitleToNavbar('Баланс календарного времени (диаграмма)')
  }
  componentDidUpdate(prevProps: TProps, prevState: TState) {
    const prevStartDate = prevState.startDate
    const prevEndDate = prevState.endDate
    const prevIsPlan = prevState.isPlan
    const prevWorkObjectId = prevState.workObjectId
    const { startDate, endDate, isPlan, workObjectId } = this.state
    if (
      prevStartDate !== startDate ||
      prevEndDate !== endDate ||
      prevIsPlan !== isPlan ||
      prevWorkObjectId !== workObjectId
    ) {
      this.props.repCalendarTimeBalanceDiag(
        workObjectId,
        startDate,
        endDate,
        isPlan
      )
    }
    this.props.setTitleToNavbar('Баланс календарного времени (диаграмма)')
  }
  dispatchOnChange = (name: string, value: any) => {
    //@ts-ignore
    this.setState({ [name]: value })
  }
  render() {
    const { calendarTimeBalanceDiag, workObjects } = this.props
    return (
      <section className={styles.root}>
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
            selectItems: [
              {
                name: 'workObjectId',
                ruName: 'Объект работ',
                dataName: 'workObjects',
              },
            ],
          }}
          subData={{ workObjects }}
          settings={{ popperPlacement: 'bottom' }}
          dispatchOnChange={this.dispatchOnChange}
        />
        {calendarTimeBalanceDiag &&
          Array.isArray(calendarTimeBalanceDiag) &&
          calendarTimeBalanceDiag.length > 0 && (
            <section className={styles.root_dx_component}>
              <PieChartContainer
                calendarTimeBalanceDiag={calendarTimeBalanceDiag}
                title={'Баланс календарного времени (диаграмма)'}
              />
            </section>
          )}
      </section>
    )
  }
}
const mapState = (state: AppStateType) => ({
  calendarTimeBalanceDiag: state.reports.calendarTimeBalanceDiag,
  workObjects: selectWorkObjects(state),
})
const connector = connect(mapState, {
  repCalendarTimeBalanceDiag,
  getWorkObjects,
  setTitleToNavbar,
})
export const RepCalendarTimeBalanceDiag = connector(Container)
