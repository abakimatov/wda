import * as React from 'react'
//redux
import { connect } from 'react-redux'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'

import { AppStateType } from '@AppStore/store'
import { IMapStateNpvCauses, IMapDispatchNpvCauses } from './types'
import { selectNpvActFrame } from '@AppStore/Selectors/frames'
import {
  getUserFrames,
  getUserFields,
} from '@AppStore/Actions/UserData/UserData'
import {
  getNpvCauses,
  iudNpvCause,
} from '@AppStore/Actions/Derictories/NvpActs/NpVCauses'
import {
  selectNpvCauses,
  selectNpvCausesColumns,
  selectNpvCausesForm,
} from '@AppStore/Selectors/NpvActs'

const DepositsContainer: React.FC<
  IMapStateNpvCauses & IMapDispatchNpvCauses
> = React.memo(
  ({
    npvCauses,
    frame,
    getNpvCauses,
    iudNpvCause,
    loading_data,
    forms,
    columns,
    getUserFrames,
    getUserFields,
  }) => {
    React.useEffect(() => {
      refreshData()
      document.title = 'Причины НПВ'
      setTitleToNavbar('Причины НПВ')
    }, [])
    const refreshData = () => {
      getUserFrames()
      getUserFields()
      getNpvCauses()
    }
    return (
      <TableMasterController
        data={npvCauses}
        iudDerictories={iudNpvCause}
        loading_data={loading_data}
        frame={frame}
        forms={forms}
        columns={columns}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateNpvCauses => ({
  npvCauses: selectNpvCauses(state),
  loading_data: state.UI.loading_data,
  frame: selectNpvActFrame(state),
  forms: selectNpvCausesForm(state),
  columns: selectNpvCausesColumns(state),
})
const mapDispatchToProps: IMapDispatchNpvCauses = {
  getNpvCauses,
  iudNpvCause,
  getUserFrames,
  getUserFields,
  setTitleToNavbar,
}
const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(DepositsContainer)
