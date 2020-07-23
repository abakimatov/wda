import * as React from 'react'
//redux
import { connect } from 'react-redux'
import { setTitleToNavbar, getRoles } from '@AppStore/Actions/Ui.types'
import { getUsers, iudUser } from '@AppStore/Actions/Derictories/Users'
import {
  selectUsers,
  selectUsersForm,
  selectUsersColumns,
} from '@AppStore/Selectors/users'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { AppStateType } from '@AppStore/store'
import { IMapStateToPropsUsers, IMapDispatchToPropsUsers } from './types'
import { selectUserFrame } from '@AppStore/Selectors/frames'
import {
  getUserFrames,
  getUserFields,
} from '@AppStore/Actions/UserData/UserData'

const UsersContainer: React.FC<
  IMapStateToPropsUsers & IMapDispatchToPropsUsers
> = React.memo(
  ({
    users_data,
    iudUser,
    frame,
    loading_data,
    roles,
    forms,
    columns,
    getUsers,
    getRoles,
    setTitleToNavbar,
    getUserFrames,
    getUserFields,
  }) => {
    React.useEffect(() => {
      refreshData()
      document.title = 'Пользователи'
      setTitleToNavbar('Пользователи')
    }, [])
    const refreshData = () => {
      getUserFrames()
      getUserFields()
      getUsers('a')
      getRoles()
    }
    return (
      <TableMasterController
        data={users_data}
        iudDerictories={iudUser}
        loading_data={loading_data}
        frame={frame}
        subData={{
          roles,
        }}
        forms={forms}
        columns={columns}
        visibleAdd={false}
        visibleRegisterNewUser={true}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateToPropsUsers => ({
  users_data: selectUsers(state),
  loading_data: state.UI.loading_data,
  frame: selectUserFrame(state),
  roles: state.UI.roles,
  forms: selectUsersForm(state),
  columns: selectUsersColumns(state),
})
const mapDispatchToProps: IMapDispatchToPropsUsers = {
  getUsers,
  iudUser,
  setTitleToNavbar,
  getRoles,
  getUserFrames,
  getUserFields,
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
