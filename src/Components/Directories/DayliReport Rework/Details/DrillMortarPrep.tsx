//DrillMortarPrep
import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateDrillMortarPrep, IMapDispatchDrillMortarPrep } from './types'
import {
  selectDRChisel,
  selectDRChiselColumns,
  selectDRChiselForm,
  selectDRDrillMortarPrep,
  selectDRDrillMortarPrepColumns,
  selectDRDrillMortarPrepForm,
} from '@AppStore/Selectors/DayliReport'
import { TDrillMortarPrep } from '@AppStore/types/reducers/typesDayliReportReducer'
import { iudDRDrillMortarPrep } from '@AppStore/Actions/Derictories/DayliReport/DrillMortarPrep'

const DrillMortarPrep: React.FC<
  IMapStateDrillMortarPrep & IMapDispatchDrillMortarPrep
> = React.memo(
  ({
    getData,
    loading_data,
    data,
    columns,
    forms,
    frame,
    //funcs
    iudDRDrillMortarPrep,
    iudFunctionWithRedirectToItemsPage,
    //
  }) => {
    React.useEffect(() => {}, [])
    const refreshData = () => {
      if (getData) {
        getData()
      }
    }
    const iudData = (
      flag: string,
      body: TDrillMortarPrep,
      handleClose: () => void
    ) => iudDRDrillMortarPrep(flag, body, handleClose)
    return (
      <TableMasterController
        data={data}
        columns={columns}
        forms={forms}
        loading_data={loading_data}
        frame={frame}
        iudDerictories={iudData}
        subData={{}}
        iudFunctionWithRedirectToItemsPage={iudFunctionWithRedirectToItemsPage}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateDrillMortarPrep => ({
  loading_data: selectLoadingData(state),
  columns: selectDRDrillMortarPrepColumns(state),
  forms: selectDRDrillMortarPrepForm(state),
  data: selectDRDrillMortarPrep(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
})
const mapDispatchToProps = {
  iudDRDrillMortarPrep,
}
export default connect(mapStateToProps, mapDispatchToProps)(DrillMortarPrep)
