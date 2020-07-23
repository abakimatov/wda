import * as React from 'react'
//redux
import { connect } from 'react-redux'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { getDeposits, iudDeposit } from '@AppStore/Actions/Derictories/Deposits'
import {
  selectDeposits,
  selectDepositsForm,
  selectDepositsColumns,
} from '@AppStore/Selectors/deposits'
import { AppStateType } from '@AppStore/store'
import { IMapStateToPropsDeposits, IMapDispatchToPropsDeposits } from './types'
import { selectDepositFrame } from '@AppStore/Selectors/frames'
import {
  getUserFrames,
  getUserFields,
} from '@AppStore/Actions/UserData/UserData'

const DepositsContainer: React.FC<
  IMapStateToPropsDeposits & IMapDispatchToPropsDeposits
> = React.memo(
  ({
    deposits_data,
    frame,
    getDeposits,
    iudDeposit,
    loading_data,
    forms,
    columns,
    getUserFrames,
    getUserFields,
  }) => {
    React.useEffect(() => {
      refreshData()
      document.title = 'Месторождения'
      setTitleToNavbar('Месторождения')
    }, [])
    const refreshData = () => {
      getUserFrames()
      getUserFields()
      getDeposits()
    }
    return (
      <TableMasterController
        data={deposits_data}
        iudDerictories={iudDeposit}
        loading_data={loading_data}
        frame={frame}
        forms={forms}
        columns={columns}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateToPropsDeposits => ({
  deposits_data: selectDeposits(state),
  loading_data: state.UI.loading_data,
  frame: selectDepositFrame(state),
  forms: selectDepositsForm(state),
  columns: selectDepositsColumns(state),
})
const mapDispatchToProps: IMapDispatchToPropsDeposits = {
  getDeposits,
  iudDeposit,
  getUserFrames,
  getUserFields,
  setTitleToNavbar,
}
const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(DepositsContainer)
