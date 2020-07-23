//Staff
import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateStaff, IMapDispatchStaff } from './types'
import { TKnbk, TStaff } from '@AppStore/types/reducers/typesDayliReportReducer'
import {
  selectDRKnbk,
  selectDRKnbkColumns,
  selectDRKnbkForm,
  selectDRStaff,
  selectDRStaffColumns,
  selectDRStaffForm,
} from '@AppStore/Selectors/DayliReport'
import { iudDRStaff } from '@AppStore/Actions/Derictories/DayliReport/Staff'
import { selectOrganizations } from '@AppStore/Selectors/organizations'
import { getOrganizations } from '@AppStore/Actions/Derictories/Organizations'

const Staff: React.FC<IMapStateStaff & IMapDispatchStaff> = React.memo(
  ({
    getData,
    loading_data,
    data,
    organizations,
    columns,
    forms,
    frame,
    //funcs
    iudDRStaff,
    iudFunctionWithRedirectToItemsPage,
    getOrganizations,
    //
  }) => {
    React.useEffect(() => {
      getOrganizations()
    }, [])
    const refreshData = () => {
      getOrganizations()
      if (getData) {
        getData()
      }
    }
    const iudData = (flag: string, body: TStaff, handleClose: () => void) =>
      iudDRStaff(flag, body, handleClose)
    return (
      <TableMasterController
        data={data}
        columns={columns}
        forms={forms}
        loading_data={loading_data}
        frame={frame}
        iudDerictories={iudData}
        subData={{ organizations }}
        iudFunctionWithRedirectToItemsPage={iudFunctionWithRedirectToItemsPage}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateStaff => ({
  loading_data: selectLoadingData(state),
  columns: selectDRStaffColumns(state),
  forms: selectDRStaffForm(state),
  data: selectDRStaff(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
  organizations: selectOrganizations(state),
})
const mapDispatchToProps = {
  iudDRStaff,
  getOrganizations,
}
export default connect(mapStateToProps, mapDispatchToProps)(Staff)
