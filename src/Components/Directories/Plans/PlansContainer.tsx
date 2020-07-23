import * as React from 'react'
//store
import { connect } from 'react-redux'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
import {
  getPlans,
  iudPlan,
  getDocPlanFilterList,
  getDocPlanFilterListData,
  getPlansFilteredDataFromIdsParam,
} from '@AppStore/Actions/Derictories/Plans'
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
import {
  selectPlans,
  selectPlansColumns,
  selectPlanFilterForm,
  selectPlansSortList,
} from '@AppStore/Selectors/plan'
import { IMapStatePlans, IMapDispatchPlans } from './types'
import { AppStateType } from '@AppStore/store'
import { selectPlansFrame } from '@AppStore/Selectors/frames'
import { getWorkObjects } from '@AppStore/Actions/Derictories/WorkObjects'
import { getOrganizations } from '@AppStore/Actions/Derictories/Organizations'
import { getScenarios } from '@AppStore/Actions/Derictories/Scenarios'
import { selectOrganizations } from '@AppStore/Selectors/organizations'
import { selectScenarios } from '@AppStore/Selectors/scenarios'
import { selectWorkObjects } from '@AppStore/Selectors/workObjects'
import { TreeData } from '@Templates/DerictoriesComponents/TreeData'
import { copyDocument } from '@AppStore/Actions/Derictories/DayliReport/helpers'

const PlansContainer: React.FC<IMapStatePlans & IMapDispatchPlans> = React.memo(
  ({
    data,
    workObjects,
    organizations,
    scenarios,
    loading_data,
    frame,
    filterForms,
    columns,
    sortList,
    orgId,
    //funcs
    iudPlan,
    getUserFields,
    getUserFrames,
    getPlans,
    getWorkObjects,
    getOrganizations,
    getScenarios,
    getDocPlanFilterList,
    getDocPlanFilterListData,
    getPlansFilteredDataFromIdsParam,
    setTitleToNavbar,
    copyDocument,
  }) => {
    const [state, setState] = React.useState({
      workObjectId: null,
      orgId: null,
      scenarioId: null,
    })
    const dispatchOnChange = (name: string, objId: number) =>
      setState({ ...state, [name]: objId })
    React.useEffect(() => {
      refreshData()
      setTitleToNavbar('Планы строительства')
    }, [])
    React.useEffect(() => {
      const { workObjectId, orgId, scenarioId } = state
      getPlansFilteredDataFromIdsParam({ workObjectId, orgId, scenarioId })
    }, [state.workObjectId, state.orgId, state.scenarioId])
    React.useEffect(() => {
      setState({ ...state, orgId })
    }, [orgId])
    const refreshData = () => {
      getUserFields()
      getUserFrames()
      getPlans()
      getWorkObjects()
      getOrganizations()
      getScenarios()
      getDocPlanFilterList()
    }
    const forwardHistory = (id: number) => window.open(`/plan/${id}`)
    console.log(`state`, state)
    return (
      <section style={{ height: ' calc(100% - 64px)' }}>
        <Header
          dispatchOnChange={(name: string, objId: number) =>
            dispatchOnChange(name, objId)
          }
          state={state}
          forms={filterForms}
          subData={{ workObjects, organizations, scenarios }}
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
            getData={(flag: string, objId: number) =>
              getDocPlanFilterListData(flag, objId)
            }
          />
          <TableMasterDocument
            data={data}
            columns={columns}
            loading_data={loading_data}
            frame={frame}
            iudData={iudPlan}
            forwardHistory={forwardHistory}
            visibleFiles={true}
            objTypeId={7}
            refreshData={refreshData}
            visibleCopyDoc={true}
            copyDoc={(docId: number) => copyDocument(docId, 'plan')}
          />
        </section>
      </section>
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStatePlans => ({
  data: selectPlans(state),
  loading_data: state.UI.loading_data,
  frame: selectPlansFrame(state),
  columns: selectPlansColumns(state),
  filterForms: selectPlanFilterForm(state),
  workObjects: selectWorkObjects(state),
  organizations: selectOrganizations(state),
  scenarios: selectScenarios(state),
  sortList: selectPlansSortList(state),
  orgId: state.user.curOrgId,
})
const mapDispatchToProps = {
  setTitleToNavbar,
  getPlans,
  getDocPlanFilterList,
  getWorkObjects,
  getOrganizations,
  getScenarios,
  iudPlan,
  getDocPlanFilterListData,
  getUserFields,
  getUserFrames,
  getPlansFilteredDataFromIdsParam,
  copyDocument,
}
export default connect(mapStateToProps, { ...mapDispatchToProps })(
  PlansContainer
)
