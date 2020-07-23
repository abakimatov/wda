import * as React from 'react'
import { connect } from 'react-redux'
import {
  getMortarTypes,
  iudMortarType,
} from '@AppStore/Actions/Derictories/MortarTypes'
import {
  selectMortarTypes,
  selectMortarTypesColumns,
  selectMortarTypesForm,
} from '@AppStore/Selectors/mortarTypes'
import { selectMortarTypeFrame } from '@AppStore/Selectors/frames/index'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { AppStateType } from '@AppStore/store'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
import {
  getUserFrames,
  getUserFields,
} from '@AppStore/Actions/UserData/UserData'
import {
  IMapStateToPropsMortarType,
  IMapDispatchToPropsMortarType,
} from './types'
import { selectLoadingData } from '@AppStore/Selectors'

const MortarTypesContainer: React.FC<
  IMapStateToPropsMortarType & IMapDispatchToPropsMortarType
> = React.memo(
  ({
    mortar_types,
    frame,
    columns,
    forms,
    iudMortarType,
    getUserFields,
    getUserFrames,
    getMortarTypes,
    setTitleToNavbar,
  }) => {
    React.useEffect(() => {
      refreshData()
      setTitleToNavbar('Типы буровых растворов')
      document.title = 'Типы буровых растворов'
    }, [])
    const refreshData = () => {
      getUserFrames()
      getUserFields()
      getMortarTypes()
    }
    return (
      <TableMasterController
        data={mortar_types}
        frame={frame}
        columns={columns}
        forms={forms}
        iudDerictories={iudMortarType}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateToPropsMortarType => ({
  loading_data: selectLoadingData(state),
  mortar_types: selectMortarTypes(state),
  frame: selectMortarTypeFrame(state),
  columns: selectMortarTypesColumns(state),
  forms: selectMortarTypesForm(state),
})
const DispatchToProps: IMapDispatchToPropsMortarType = {
  getMortarTypes,
  iudMortarType,
  getUserFrames,
  getUserFields,
  setTitleToNavbar,
}
export default connect(mapStateToProps, { ...DispatchToProps })(
  MortarTypesContainer
)
