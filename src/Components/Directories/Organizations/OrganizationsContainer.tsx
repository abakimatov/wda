import * as React from 'react'
//redux
import { connect } from 'react-redux'
import { setTitleToNavbar, getLicenseParams } from '@AppStore/Actions/Ui.types'
import {
  getOrganizations,
  iudOrganization,
} from '@AppStore/Actions/Derictories/Organizations'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import {
  selectOrganizations,
  selectOrganizationsForm,
  selectOrganizationsColumns,
} from '@AppStore/Selectors/organizations'
import { selectOrganizationFrame } from '@AppStore/Selectors/frames/index'
import { selectUsers } from '@AppStore/Selectors/users'
import { getUsers } from '@AppStore/Actions/Derictories/Users'
import { AppStateType } from '@AppStore/store'
import {
  IMapDispatchToPropsOrganizations,
  IMapStateToPropsOrganizations,
} from './types'
import { selectLoadingData } from '@AppStore/Selectors'
import {
  getUserFrames,
  getUserFields,
} from '@AppStore/Actions/UserData/UserData'

const OrganizationsContainer: React.FC<
  IMapStateToPropsOrganizations & IMapDispatchToPropsOrganizations
> = React.memo(
  ({
    organizations_data,
    users_data,
    iudOrganization,
    loading_data,
    forms,
    columns,
    frame,
    getOrganizations,
    getUsers,
    getLicenseParams,
    setTitleToNavbar,
    getUserFrames,
    getUserFields,
  }) => {
    React.useEffect(() => {
      refreshData()
      document.title = 'Организации'
      setTitleToNavbar('Организации')
    }, [])
    const refreshData = () => {
      getUserFrames()
      getUserFields()
      getOrganizations()
      getUsers('m')
      getLicenseParams()
    }
    return (
      <TableMasterController
        data={organizations_data}
        subData={{
          users_data,
        }}
        iudDerictories={iudOrganization}
        loading_data={loading_data}
        frame={frame}
        forms={forms}
        columns={columns}
        visibleFiles={true}
        objTypeId={5}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType) => ({
  organizations_data: selectOrganizations(state),
  users_data: selectUsers(state),
  loading_data: selectLoadingData(state),
  frame: selectOrganizationFrame(state),
  forms: selectOrganizationsForm(state),
  columns: selectOrganizationsColumns(state),
})
const mapDispatchToProps: IMapDispatchToPropsOrganizations = {
  setTitleToNavbar,
  getUsers,
  getLicenseParams,
  getOrganizations,
  iudOrganization,
  getUserFrames,
  getUserFields,
}
const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(OrganizationsContainer)
