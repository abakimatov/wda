import * as React from 'react'
//store
import { connect } from 'react-redux'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
//components
//@ts-ignore
import { Header } from '@Templates/DerictoriesComponents/PageConstructor/Header'
//@ts-ignore
import { TableMasterDocument } from '@Templates/DerictoriesComponents/TableMasterDocument'
import { selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { IMapStateDR, IMapDispatchDR } from './types'
import {
  getUserFields,
  getUserFrames,
} from '@AppStore/Actions/UserData/UserData'
import {
  iudDailyReport,
  getDailyReports,
  getDailyReportSortList,
  getDailyReportSortListData,
  getDailyReportSortListDataFromIdsParam,
} from '@AppStore/Actions/Derictories/DayliReport/DaylyReport'
import {
  selectDayliReports,
  selectDayliReportsColumns,
  selectDayliReportsFilterForm,
  selectDayliReportsWorkStages,
} from '@AppStore/Selectors/DayliReport'
import { AppStateType } from '@AppStore/store'
import { TreeData } from '@Templates/DerictoriesComponents/TreeData'
import { getWorkObjects } from '@AppStore/Actions/Derictories/WorkObjects'
import { getOrganizations } from '@AppStore/Actions/Derictories/Organizations'
import { selectWorkObjects } from '@AppStore/Selectors/workObjects'
import { selectOrganizations } from '@AppStore/Selectors/organizations'
import {
  getWorkStages,
  copyDocument,
} from '@AppStore/Actions/Derictories/DayliReport/helpers'

const DailyReportFrame: React.FC<IMapStateDR & IMapDispatchDR> = React.memo(
  ({
    data,
    workObjects,
    organizations,
    workStages,
    sortList,
    filterForms,
    loading_data,
    frame,
    columns,
    //funcs
    getDailyReports,
    iudDailyReport,
    getWorkObjects,
    getOrganizations,
    getUserFields,
    getUserFrames,
    setTitleToNavbar,
    getDailyReportSortList,
    getDailyReportSortListData,
    getDailyReportSortListDataFromIdsParam,
    getWorkStages,
    copyDocument,
  }) => {
    const [state, setState] = React.useState({
      workObjectId: null,
      customerId: null,
      workKindId: null,
    })
    const dispatchOnChange = (name: string, value: any) => {
      setState({ ...state, [name]: value })
    }
    React.useEffect(() => {
      refreshData()
      setTitleToNavbar('Список «Суточных рапортов»')
    }, [])
    React.useEffect(() => {
      const { customerId, workKindId, workObjectId } = state
      getDailyReportSortListDataFromIdsParam({
        customerId,
        workKindId,
        workObjectId,
      })
    }, [state.customerId, state.workKindId, state.workObjectId])
    const refreshData = () => {
      getWorkObjects()
      getOrganizations()
      getUserFields()
      getUserFrames()
      getDailyReports()
      getDailyReportSortList()
      getWorkStages()
    }
    const forwardHistory = (id: number) => window.open(`/daylireport/${id}`)
    return (
      <section style={{ height: ' calc(100% - 64px)' }}>
        <Header
          dispatchOnChange={dispatchOnChange}
          state={state}
          forms={filterForms}
          subData={{ workObjects, organizations, workStages }}
        />
        <section
          style={{
            display: 'grid',
            height: '100%',
            gridTemplateColumns: '230px 1fr',
            gridAutoRows: '100%',
          }}
        >
          <TreeData
            items={sortList}
            getData={(flag: string, id: number) => {
              getDailyReportSortListData(flag, id)
            }}
          />
          <TableMasterDocument
            data={data}
            columns={columns}
            loading_data={loading_data}
            frame={frame}
            iudData={iudDailyReport}
            forwardHistory={forwardHistory}
            visibleFiles={true}
            visibleCopyDoc={true}
            objTypeId={6}
            refreshData={refreshData}
            copyDoc={(docId: number) => copyDocument(docId, 'dayliReport')}
          />
        </section>
      </section>
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateDR => ({
  data: selectDayliReports(state),
  workObjects: selectWorkObjects(state),
  organizations: selectOrganizations(state),
  loading_data: selectLoadingData(state),
  frame: selectDailyReportFrame(state),
  columns: selectDayliReportsColumns(state),
  filterForms: selectDayliReportsFilterForm(state),
  sortList: state.dayliReport.sortList,
  workStages: selectDayliReportsWorkStages(state),
})
const mapDispatchToProps = {
  getWorkObjects,
  getOrganizations,
  setTitleToNavbar,
  getUserFields,
  getUserFrames,
  iudDailyReport,
  getDailyReports,
  getDailyReportSortList,
  getDailyReportSortListData,
  getDailyReportSortListDataFromIdsParam,
  getWorkStages,
  copyDocument,
}
export default connect(mapStateToProps, mapDispatchToProps)(DailyReportFrame)
