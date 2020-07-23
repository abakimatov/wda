import * as React from 'react'
//redux
import { connect } from 'react-redux'
import {
  getDrillingRigs,
  iudDrillingRig,
} from '@AppStore/Actions/Derictories/DrillingRigs'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
//components
import {
  selectDrillingRigs,
  selectDrillingRigsForm,
  selectDrillingRigsColumns,
} from '@AppStore/Selectors/drillingRigs'
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { AppStateType } from '@AppStore/store'
import {
  getUserFields,
  getUserFrames,
} from '@AppStore/Actions/UserData/UserData'
import {
  IMapStateToPropsDrillingRig,
  IMapDispatchToPropsDrillingRig,
} from './types'
import { selectDrillingRigFrame } from '@AppStore/Selectors/frames'
import { selectLoadingData } from '@AppStore/Selectors'

const DrillingRigsContainer: React.FC<
  IMapStateToPropsDrillingRig & IMapDispatchToPropsDrillingRig
> = React.memo(
  ({
    frame,
    drilling_rigs_data,
    loading_data,
    iudDrillingRig,
    forms,
    columns,
    getDrillingRigs,
    setTitleToNavbar,
    getUserFields,
    getUserFrames,
  }) => {
    React.useEffect(() => {
      refreshData()
      document.title = 'Буровые установки'
      setTitleToNavbar('Буровые установки')
    }, [])
    const refreshData = () => {
      getDrillingRigs()
      getUserFields()
      getUserFrames()
    }
    return (
      <TableMasterController
        data={drilling_rigs_data}
        iudDerictories={iudDrillingRig}
        loading_data={loading_data}
        frame={frame}
        forms={forms}
        columns={columns}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateToPropsDrillingRig => ({
  drilling_rigs_data: selectDrillingRigs(state),
  loading_data: selectLoadingData(state),
  frame: selectDrillingRigFrame(state),
  forms: selectDrillingRigsForm(state),
  columns: selectDrillingRigsColumns(state),
})
const mapDispatchToProps = {
  getDrillingRigs,
  iudDrillingRig,
  setTitleToNavbar,
  getUserFields,
  getUserFrames,
}
const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(DrillingRigsContainer)
