import * as React from 'react'
//store
import { connect } from 'react-redux'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
import {
  getUserFields,
  getUserFrames,
} from '@AppStore/Actions/UserData/UserData'
//@ts-ignore
import { Header } from '@Templates/DerictoriesComponents/PageConstructor/Header'
//components
//@ts-ignore
import { TableMasterDocument } from '@Templates/DerictoriesComponents/TableMasterDocument'
import {
  selectContracts,
  selectContractsColumns,
  selectContractsForm,
  selectContractsFilterForms,
  selectContractsSortList,
} from '@AppStore/Selectors/contracts'
import { selectDeposits } from '@AppStore/Selectors/deposits'
import { selectOrganizations } from '@AppStore/Selectors/organizations'
import { selectProjects } from '@AppStore/Selectors/projects'
import {
  getContracts,
  iudContract,
  getContractsSortListDataFromIdsParam,
  getContractsSortListData,
} from '@AppStore/Actions/Derictories/Contracts'
import { TreeData } from '@Templates/DerictoriesComponents/TreeData'
import { getDeposits } from '@AppStore/Actions/Derictories/Deposits'
import { getOrganizations } from '@AppStore/Actions/Derictories/Organizations'
import { getProjects } from '@AppStore/Actions/Derictories/Projects'
import { AppStateType } from '@AppStore/store'
import { IMapStateContract, IMapDispatchContract } from './types'
import { selectContractFrame } from '@AppStore/Selectors/frames'

const ContractsContainer: React.FC<
  IMapStateContract & IMapDispatchContract
> = React.memo(
  ({
    data,
    sortList,
    projects,
    deposits,
    organizations,
    loading_data,
    frame,
    columns,
    forms,
    filterForms,
    //funcs
    getContracts,
    iudContract,
    getUserFields,
    getUserFrames,
    setTitleToNavbar,
    getProjects,
    getDeposits,
    getOrganizations,
    getContractsSortListDataFromIdsParam,
    getContractsSortListData,
  }) => {
    React.useEffect(() => {
      refreshData()
      setTitleToNavbar('Договоры')
      document.title = 'Договоры'
    }, [])
    const refreshData = () => {
      getUserFields()
      getUserFrames()
      getContracts()
      getProjects()
      getDeposits()
      getOrganizations()
    }
    const [state, setState] = React.useState({
      projectId: null,
      customerId: null,
      depositId: null,
    })
    React.useEffect(() => {
      const { customerId, projectId, depositId } = state
      getContractsSortListDataFromIdsParam({
        customerId,
        projectId,
        depositId,
      })
    }, [state.customerId, state.depositId, state.projectId])
    const dispatchOnChange = (name: string, value: any) => {
      setState({ ...state, [name]: value })
    }
    const forwardHistory = (id: number) => window.open(`/contract/${id}`)
    return (
      <section style={{ height: ' calc(100% - 64px)' }}>
        <Header
          dispatchOnChange={(name: string, value: any) =>
            dispatchOnChange(name, value)
          }
          state={state}
          forms={filterForms}
          subData={{ projects, organizations, deposits }}
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
            items={sortList} // sortList
            getData={(flag, id) => getContractsSortListData(flag, id)}
          />
          <TableMasterDocument
            data={data}
            columns={columns}
            forms={forms}
            loading_data={loading_data}
            frame={frame}
            iudData={iudContract}
            forwardHistory={forwardHistory}
            //files
            visibleFiles={true}
            objTypeId={1}
            refreshData={refreshData}
          />
        </section>
      </section>
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateContract => ({
  data: selectContracts(state),
  loading_data: state.UI.loading_data,
  frame: selectContractFrame(state),
  columns: selectContractsColumns(state),
  forms: selectContractsForm(state),
  projects: selectProjects(state),
  organizations: selectOrganizations(state),
  deposits: selectDeposits(state),
  filterForms: selectContractsFilterForms(state),
  sortList: selectContractsSortList(state),
})
const mapDispatchToProps = {
  setTitleToNavbar,
  getContracts,
  iudContract,
  getUserFields,
  getUserFrames,
  getProjects,
  getDeposits,
  getOrganizations,
  getContractsSortListDataFromIdsParam,
  getContractsSortListData,
}
export default connect(mapStateToProps, mapDispatchToProps)(ContractsContainer)
