//DrillMortarLoss
import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateDrillMortarLoss, IMapDispatchDrillMortarLoss } from './types'
import {
  selectDRDrillMortatLoss,
  selectDRDrillMortatLossColumns,
  selectDRDrillMortatLossForm,
} from '@AppStore/Selectors/DayliReport'
import { TDrillMortarLoss } from '@AppStore/types/reducers/typesDayliReportReducer'
import { iudDRDrillMortarLoss } from '@AppStore/Actions/Derictories/DayliReport/DrillMortatLoss'

const DrillMortarLoss: React.FC<
  IMapStateDrillMortarLoss & IMapDispatchDrillMortarLoss
> = React.memo(
  ({
    getData,
    loading_data,
    data,
    columns,
    forms,
    frame,
    //funcs
    iudDRDrillMortarLoss,
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
      body: TDrillMortarLoss,
      handleClose: () => void
    ) => iudDRDrillMortarLoss(flag, body, handleClose)
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
const mapStateToProps = (state: AppStateType): IMapStateDrillMortarLoss => ({
  loading_data: selectLoadingData(state),
  columns: selectDRDrillMortatLossColumns(state),
  forms: selectDRDrillMortatLossForm(state),
  data: selectDRDrillMortatLoss(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
})
const mapDispatchToProps = {
  iudDRDrillMortarLoss,
}
export default connect(mapStateToProps, mapDispatchToProps)(DrillMortarLoss)
