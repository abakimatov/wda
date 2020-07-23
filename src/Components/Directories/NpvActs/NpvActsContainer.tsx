import * as React from 'react'
//store
import { connect } from 'react-redux'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
import {
  getUserFields,
  getUserFrames,
} from '@AppStore/Actions/UserData/UserData'
//components
//import { TableMasterController } from "./TableMasterController";
//@ts-ignore
import { Header } from '@Templates/DerictoriesComponents/PageConstructor/Header'
//@ts-ignore
import { TableMasterDocument } from '@Templates/DerictoriesComponents/TableMasterDocument'
import { IMapStateActs, IMapDispatchActs } from './types'
import { AppStateType } from '@AppStore/store'
import { selectNpvActFrame } from '@AppStore/Selectors/frames'
import {
  getNpvActs,
  iudNpvAct,
  getNpvActsSortListDataFromIdsParam,
  getNpvActsSortListData,
} from '@AppStore/Actions/Derictories/NvpActs/NpvActs'
import {
  selectNpvActs,
  selectNpvActColumns,
  selectNpvActsFilterForm,
  selectNpvActsTreeDataFilter,
} from '@AppStore/Selectors/NpvActs'
import { TreeData } from '@Templates/DerictoriesComponents/TreeData'
import { getWorkObjects } from '@AppStore/Actions/Derictories/WorkObjects'
import { getOrganizations } from '@AppStore/Actions/Derictories/Organizations'
import { getScenarios } from '@AppStore/Actions/Derictories/Scenarios'
import { selectWorkObjects } from '@AppStore/Selectors/workObjects'
import { selectOrganizations } from '@AppStore/Selectors/organizations'
import { selectScenarios } from '@AppStore/Selectors/scenarios'
import { copyDocument } from '@AppStore/Actions/Derictories/DayliReport/helpers'

const NvpActsContainer: React.FC<IMapStateActs & IMapDispatchActs> = React.memo(
  ({
    sortList,
    data,
    filterForms,
    workObjects,
    loading_data,
    frame,
    columns,
    //funcs
    iudNpvAct,
    getUserFields,
    getUserFrames,
    getNpvActs,
    getWorkObjects,
    setTitleToNavbar,
    getNpvActsSortListDataFromIdsParam,
    getNpvActsSortListData,
    copyDocument,
  }) => {
    const [state, setState] = React.useState({
      workObjectId: null,
    })
    const dispatchOnChange = (name: string, value: any) =>
      setState({ ...state, [name]: value })
    React.useEffect(() => {
      refreshData()
      setTitleToNavbar('Акты НПВ')
      document.title = 'Акты НПВ'
    }, [])
    React.useEffect(() => {
      const { workObjectId } = state
      getNpvActsSortListDataFromIdsParam({ workObjectId })
    }, [state.workObjectId])
    const refreshData = () => {
      getUserFields()
      getUserFrames()
      getNpvActs()
      getWorkObjects()
    }
    const forwardHistory = (id: number) => window.open(`/npvact/${id}`)
    return (
      <section style={{ height: ' calc(100% - 64px)' }}>
        <Header
          dispatchOnChange={(name: string, value: any) =>
            dispatchOnChange(name, value)
          }
          state={state}
          forms={filterForms}
          subData={{ workObjects }}
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
            getData={(type: string, objId: number) => {
              getNpvActsSortListData(type, objId)
            }}
          />
          <TableMasterDocument
            data={data}
            columns={columns}
            loading_data={loading_data}
            frame={frame}
            iudData={iudNpvAct}
            forwardHistory={forwardHistory}
            visibleFiles={true}
            objTypeId={8}
            refreshData={refreshData}
            visibleCopyDoc={true}
            copyDoc={(docId: number) => copyDocument(docId, 'npvAct')}
          />
        </section>
      </section>
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateActs => ({ 
  data: selectNpvActs(state),
  loading_data: state.UI.loading_data,
  frame: selectNpvActFrame(state),
  columns: selectNpvActColumns(state),
  filterForms: selectNpvActsFilterForm(state),
  workObjects: selectWorkObjects(state),
  sortList: selectNpvActsTreeDataFilter(state),
})
const mapDispatchToProps = {
  setTitleToNavbar,
  getNpvActs,
  getWorkObjects,
  iudNpvAct,
  getUserFields,
  getUserFrames,
  getNpvActsSortListDataFromIdsParam,
  getNpvActsSortListData,
  copyDocument,
}
export default connect(mapStateToProps, { ...mapDispatchToProps })(
  NvpActsContainer
)
