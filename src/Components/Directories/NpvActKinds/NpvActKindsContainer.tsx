import * as React from 'react'
//redux
import { connect } from 'react-redux'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'

import { AppStateType } from '@AppStore/store'
import { IMapStateNpvActKinds, IMapDispatchNpvActKinds } from './types'
import { selectNpvActFrame } from '@AppStore/Selectors/frames'
import {
  getUserFrames,
  getUserFields,
} from '@AppStore/Actions/UserData/UserData'
import {
  getNpvActKinds,
  iudNpvActKind,
} from '@AppStore/Actions/Derictories/NvpActs/NpvActKinds'
import {
  selectNpvActKindsForm,
  selectNpvActKindsColumns,
  selectNpvActKinds,
} from '@AppStore/Selectors/NpvActs'

const DepositsContainer: React.FC<
  IMapStateNpvActKinds & IMapDispatchNpvActKinds
> = React.memo(
  ({
    npvActKinds,
    frame,
    getNpvActKinds,
    iudNpvActKind,
    loading_data,
    forms,
    columns,
    getUserFrames,
    getUserFields,
  }) => {
    React.useEffect(() => {
      getUserFrames()
      getUserFields()
      getNpvActKinds()
      document.title = 'Виды актов'
      setTitleToNavbar('Виды актов')
    }, [])
    const refreshData = () => {
      getUserFrames()
      getUserFields()
      getNpvActKinds()
    }
    return (
      <TableMasterController
        data={npvActKinds}
        iudDerictories={iudNpvActKind}
        loading_data={loading_data}
        frame={frame}
        forms={forms}
        columns={columns}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateNpvActKinds => ({
  npvActKinds: selectNpvActKinds(state),
  loading_data: state.UI.loading_data,
  frame: selectNpvActFrame(state),
  forms: selectNpvActKindsForm(state),
  columns: selectNpvActKindsColumns(state),
})
const mapDispatchToProps: IMapDispatchNpvActKinds = {
  getNpvActKinds,
  iudNpvActKind,
  getUserFrames,
  getUserFields,
  setTitleToNavbar,
}
const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(DepositsContainer)
