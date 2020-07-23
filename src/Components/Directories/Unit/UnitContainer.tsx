import * as React from 'react'
import { connect } from 'react-redux'
import { getUnits, iudUnit } from '@AppStore/Actions/Derictories/Units'
import {
  selectUnits,
  selectUnitsColumns,
  selectUnitsForm,
} from '@AppStore/Selectors/units'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { AppStateType } from '@AppStore/store'
import { IMapDispatchToPropsUnits, IMapStateToPropsUnits } from './types'
import { selectProjectFrame } from '@AppStore/Selectors/frames'
import {
  getUserFields,
  getUserFrames,
} from '@AppStore/Actions/UserData/UserData'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'

const UnitContainer: React.FC<
  IMapDispatchToPropsUnits & IMapStateToPropsUnits
> = React.memo(
  ({
    units_data,
    columns,
    frame,
    forms,
    iudUnit,
    getUnits,
    getUserFields,
    getUserFrames,
    setTitleToNavbar,
  }) => {
    React.useEffect(() => {
      refreshData()
      setTitleToNavbar('Единицы измерения')
    }, [])
    const refreshData = () => {
      getUserFields()
      getUserFrames()
      getUnits()
    }
    return (
      <TableMasterController
        data={units_data}
        frame={frame}
        columns={columns}
        forms={forms}
        iudDerictories={iudUnit}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType) => ({
  units_data: selectUnits(state),
  frame: selectProjectFrame(state),
  columns: selectUnitsColumns(state),
  forms: selectUnitsForm(state),
})
const DispatchToProps = {
  getUnits,
  iudUnit,
  getUserFields,
  getUserFrames,
  setTitleToNavbar,
}
export default connect(mapStateToProps, DispatchToProps)(UnitContainer)
