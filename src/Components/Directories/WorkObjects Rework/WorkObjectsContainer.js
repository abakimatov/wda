import React, { useEffect, memo } from 'react'
//store
import { connect } from 'react-redux'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
import {
  getWorkObjects,
  iudWorkObject,
} from '@AppStore/Actions/Derictories/WorkObjects'
import {
  getUserFields,
  getUserFrames,
} from '@AppStore/Actions/UserData/UserData'
//components
import { TableMasterDocument } from '@Templates/DerictoriesComponents/TableMasterDocument'
//import { TableMasterController } from "./TableMasterController";
import { FindFrame } from '@Templates/DerictoriesComponents/Creators'
import {
  selectWorkObjects,
  selectWorkObjectColumns,
  selectWorkObjectForm,
} from '@AppStore/Selectors/workObjects'

const WorkObjectsContainer = memo(
  ({
    data,
    loading_data,
    userInterface,
    columns,
    forms,
    //funcs
    iudWorkObject,
    getUserFields,
    getUserFrames,
    getWorkObjects,
    setTitleToNavbar,
  }) => {
    useEffect(() => {
      refreshData()
      setTitleToNavbar('Объекты работ')
      document.title = 'Объекты работ'
    }, [])
    const refreshData = () => {
      getUserFields()
      getUserFrames()
      getWorkObjects()
    }
    const forwardHistory = (id) => window.open(`/workobject/${id}`)
    return (
      <TableMasterDocument
        data={data}
        columns={columns}
        forms={forms}
        loading_data={loading_data}
        frame={FindFrame(userInterface, 'WorkObjectFrame')}
        iudData={iudWorkObject}
        forwardHistory={forwardHistory}
        visibleFiles={true}
        objTypeId={3}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state) => ({
  data: selectWorkObjects(state),
  loading_data: state.UI.loading_data,
  userInterface: state.user.userInterface,
  columns: selectWorkObjectColumns(state),
  forms: selectWorkObjectForm(state),
})
const mapDispatchToProps = {
  setTitleToNavbar,
  getWorkObjects,
  iudWorkObject,
  getUserFields,
  getUserFrames,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkObjectsContainer)
