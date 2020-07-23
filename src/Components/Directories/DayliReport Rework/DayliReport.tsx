import * as React from 'react'
import { useHistory } from 'react-router-dom'
//store
import { connect } from 'react-redux'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
import {
  getUserFields,
  getUserFrames,
} from '@AppStore/Actions/UserData/UserData'
import { selectUrlParamsId } from '@AppStore/Selectors'
//components
//@ts-ignore
import { DevExpressTableGrid } from '@Templates/DerictoriesComponents/styledComponents'
//@ts-ignore
import { Toolbar } from '@Templates/DerictoriesComponents/PageConstructor/Toolbar'
//@ts-ignore
import { Header } from '@Templates/DerictoriesComponents/PageConstructor/Header'
//@ts-ignore
import { LoadingDocument } from '@Templates/DerictoriesComponents/PageConstructor/styledComponents'
import { LinearProgress } from '@material-ui/core'
import {
  iudDailyReport,
  getDailyReports,
  getDReportTypes,
  getDReportKinds,
} from '@AppStore/Actions/Derictories/DayliReport/DaylyReport'
import {
  selectDayliReports,
  selectDayliReportsMainForm,
  selectDayliReportsTypes,
  selectDayliReportsKinds,
} from '@AppStore/Selectors/DayliReport'
import { selectWorkObjects } from '@AppStore/Selectors/workObjects'
//
import { getWorkObjects } from '@AppStore/Actions/Derictories/WorkObjects'
//@ts-ignore
import { TabsData } from './TabsData'
import { IMapStateDRSingle, IMapDispatchDRSingle } from './types'
import { AppStateType } from '@AppStore/store'
//@ts-ignore
import dayjs from 'dayjs'
import { selectOrganizations } from '@AppStore/Selectors/organizations'
import { getOrganizations } from '@AppStore/Actions/Derictories/Organizations'
//
type Tstate = {
  flag: null | string
  id: number
}
class DayliReport extends React.PureComponent<
  IMapStateDRSingle & IMapDispatchDRSingle,
  Tstate
> {
  constructor(props: IMapStateDRSingle & IMapDispatchDRSingle) {
    super(props)
    this.state = {
      flag: null,
      id: null,
    }
    //BINDS METHODS
    this.getGeneralData = this.getGeneralData.bind(this)
    this.getMainData = this.getMainData.bind(this)
    this.dispatchOnChange = this.dispatchOnChange.bind(this)
    this.functionResultPromise = this.functionResultPromise.bind(this)
    this.iudFunction = this.iudFunction.bind(this)
    this.iudFunctionWithRedirectToItemsPage = this.iudFunctionWithRedirectToItemsPage.bind(
      this
    )
  }
  //LIFE CYCLES
  componentDidMount() {
    this.getMainData(this.props)
    this.getGeneralData(this.props)
  }
  static getDerivedStateFromProps(
    nextProps: IMapStateDRSingle & IMapDispatchDRSingle,
    prevState: { flag: null | string; id: null }
  ) {
    const { data, drId, setTitleToNavbar } = nextProps
    const items = data
    const itemId = drId
    if (itemId === 0) {
      return { flag: 'I' }
    } else if (items && itemId !== 0) {
      const existDoc = items.find((item) => String(item.id) === String(itemId))
      if (existDoc && existDoc.id !== prevState.id) {
        const date = dayjs(existDoc.dateCreated).format('DD.MM.YYYY hh:mm')
        setTitleToNavbar(`Суточный рапорт № ${existDoc.id} от ${date}`)
        return {
          ...existDoc,
          flag: 'U',
        }
      } else return null
    } else return null
  }
  //GET DATA METHODS
  getGeneralData = (props: IMapStateDRSingle & IMapDispatchDRSingle) => {
    props.getUserFields()
    props.getUserFrames()
    props.getWorkObjects()
    props.getOrganizations()
    props.getDReportTypes()
    props.getDReportKinds()
    props.setTitleToNavbar('Редактирование «Суточного рапорта»')
  }
  getMainData = (props: IMapStateDRSingle & IMapDispatchDRSingle) => {
    props.getDailyReports(null, props.drId)
  }
  //SET STATE
  dispatchOnChange = (name: string, value: string) =>
    this.setState({ ...this.state, [name]: value })
  //IUD DOCUMENT METHODS
  functionResultPromise = (result: boolean, id: number) => {
    if (result) this.props.forwardHistory('daylireport', id)
  }
  functionResultOnClose = (result: boolean, id: number) => {
    if (result) this.props.redirectToDataList()
  }
  iudFunction = (type: 'save' | 'holding') => {
    if (type === 'save') {
      return this.props.iudDailyReport(
        this.state.flag,
        this.state,
        this.functionResultPromise
      ) // third arg > functionBeforeResolve
    }
    if (type === 'holding') {
      return this.props.iudDailyReport(
        this.state.flag,
        this.state,
        this.functionResultOnClose
      ) // third arg > functionBeforeResolve
    }
  }
  iudFunctionWithRedirectToItemsPage = (openAdd: boolean) => {
    if (openAdd && this.state.flag === 'I') {
      this.iudFunction('save')
    }
  }
  render() {
    const {
      forms,
      isLoading,
      workObjects,
      dayliReportTypes,
      dayliReportKinds,
      organizations,
    } = this.props
    console.log(`state`, this.state)
    return (
      <DevExpressTableGrid>
        <section className="dev-exp-table-grid-item-1">
          <Toolbar
            saveData={() => this.iudFunction('save')}
            holdingData={() => this.iudFunction('holding')}
            visibles={{
              saveText: 'Провести и закрыть',
              save: true,
              cancel: true,
            }}
          />
        </section>
        <section className="dev-exp-table-grid-item-2">
          {!isLoading && (
            <Header
              forms={forms}
              state={this.state}
              dispatchOnChange={this.dispatchOnChange}
              subData={{
                workObjects,
                dayliReportTypes,
                dayliReportKinds,
                organizations,
              }}
            />
          )}
          {isLoading && (
            <LoadingDocument>
              <div>Загрузка документа</div>
              <div>
                <LinearProgress color="secondary" /* size={10} */ />
              </div>
            </LoadingDocument>
          )}
        </section>
        <section className="dev-exp-table-grid-item-3">
          <TabsData
            id={this.state.id}
            iudFunctionWithRedirectToItemsPage={
              this.iudFunctionWithRedirectToItemsPage
            }
            state={this.state}
            dispatchOnChange={this.dispatchOnChange}
          />
        </section>
      </DevExpressTableGrid>
    )
  }
}
//
const mapStateToProps = (state: AppStateType): IMapStateDRSingle => ({
  data: selectDayliReports(state),
  forms: selectDayliReportsMainForm(state),
  drId: selectUrlParamsId(state),
  isLoading: state.dayliReport.loading,
  workObjects: selectWorkObjects(state),
  dayliReportTypes: selectDayliReportsTypes(state),
  dayliReportKinds: selectDayliReportsKinds(state),
  organizations: selectOrganizations(state),
})
//
const mapDispatchToProps = {
  setTitleToNavbar,
  getUserFields,
  getUserFrames,
  getDailyReports,
  //
  iudDailyReport,
  //sub data
  getWorkObjects,
  getOrganizations,
  getDReportTypes,
  getDReportKinds,
}
//
const Container = connect(mapStateToProps, mapDispatchToProps)(DayliReport)
const Exported = React.memo(() => {
  const history = useHistory()
  const forwardHistory = React.useCallback(
    (path: string, id: number) => history.push(`/${path}/${id}`),
    []
  )
  const redirectToDataList = () => history.push('/daily_reports')
  return (
    <Container
      forwardHistory={forwardHistory}
      redirectToDataList={redirectToDataList}
    />
  )
})
export default Exported
