import * as React from 'react'
import { repDepthDayGraph } from '@AppStore/Actions/Reports/DepthDayGraph'
import {
  TrepDepthDayGraphProps,
  TrepDepthDayGraphState,
  TrepDepthDayGraphMapState,
} from './types'
import { connect } from 'react-redux'
import { AppStateType } from '@AppStore/store'
//@ts-ignore
import { Header } from '@Templates/DerictoriesComponents/PageConstructor/Header'
//@ts-ignore
import styles from './styles.module.scss'
import { getWorkObjects } from '@AppStore/Actions/Derictories/WorkObjects'
import { getScenarios } from '@AppStore/Actions/Derictories/Scenarios'
import { selectWorkObjects } from '@AppStore/Selectors/workObjects'
import { selectScenarios } from '@AppStore/Selectors/scenarios'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
import {
  selectRepDepthDayGraph,
  selectRepDepthDayGraphForms,
} from '@AppStore/Selectors/Reports'
import { CustChart } from './Chart'
import {
  getUserFrames,
  getUserFields,
} from '@AppStore/Actions/UserData/UserData'

class Container extends React.Component<
  TrepDepthDayGraphProps,
  TrepDepthDayGraphState
> {
  constructor(props: TrepDepthDayGraphProps) {
    super(props)
    this.state = {
      workObjectId: null,
      scenarioId: null,
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now()),
    }
    this.dispatchOnChange = this.dispatchOnChange.bind(this)
  }
  componentDidUpdate(
    prevProps: TrepDepthDayGraphProps,
    prevState: TrepDepthDayGraphState
  ) {
    const workObjectId = this.state.workObjectId
    const scenarioId = this.state.scenarioId
    const startDate = this.state.startDate
    const endDate = this.state.endDate
    if (
      prevState.workObjectId !== this.state.workObjectId ||
      prevState.scenarioId !== this.state.scenarioId ||
      prevState.startDate !== this.state.startDate ||
      prevState.endDate !== this.state.endDate
    ) {
      this.getRepDepthDayGraph(workObjectId, scenarioId, startDate, endDate)
    }
  }
  componentDidMount() {
    this.props.getUserFrames()
    this.props.getUserFields()
    this.props.getWorkObjects()
    this.props.getScenarios()
    /* this.props.repDepthDayGraph(null, null, null, null) */
    this.props.setTitleToNavbar('Отчёт Глубина-день')
  }
  //@ts-ignore
  dispatchOnChange = (name: any, value: any) => this.setState({ [name]: value })
  getRepDepthDayGraph = (
    workObjectId: number,
    scenarioId: number,
    startDate: Date,
    endDate: Date
  ) => {
    this.props.repDepthDayGraph(workObjectId, scenarioId, startDate, endDate)
  }
  render() {
    const { workObjects, scenarios, DepthDayGraph, forms } = this.props
    console.log(this.state)
    return (
      <section className={styles.root}>
        <Header
          state={this.state}
          forms={forms}
          subData={{ scenarios, workObjects }}
          dispatchOnChange={this.dispatchOnChange}
        />
        <CustChart DepthDayGraph={DepthDayGraph} />
      </section>
    )
  }
}
const mapState = (state: AppStateType): TrepDepthDayGraphMapState => ({
  DepthDayGraph: selectRepDepthDayGraph(state),
  workObjects: selectWorkObjects(state),
  scenarios: selectScenarios(state),
  forms: selectRepDepthDayGraphForms(state),
})
const mapDispatch = {
  repDepthDayGraph,
  getWorkObjects,
  getScenarios,
  setTitleToNavbar,
  getUserFrames,
  getUserFields,
}
const connector = connect(mapState, mapDispatch)
const RepDepthDayGraphContainer = connector(Container)
export default RepDepthDayGraphContainer
