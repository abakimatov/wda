import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateDrillMortar, IMapDispatchDrillMortar } from './types'
import {
  selectDRDrillMortar,
  selectDRDrillMortarColumns,
  selectDRDrillMortarForm,
} from '@AppStore/Selectors/DayliReport'
import { TDrillMortar } from '@AppStore/types/reducers/typesDayliReportReducer'
import { iudDRDrillMortar } from '@AppStore/Actions/Derictories/DayliReport/DrillMortar'

const DrillMortar: React.FC<
  IMapStateDrillMortar & IMapDispatchDrillMortar
> = React.memo(
  ({
    getData,
    loading_data,
    data,
    columns,
    forms,
    frame,
    //funcs
    iudDRDrillMortar,
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
      body: TDrillMortar,
      handleClose: () => void
    ) => iudDRDrillMortar(flag, body, handleClose)
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
const mapStateToProps = (state: AppStateType): IMapStateDrillMortar => ({
  loading_data: selectLoadingData(state),
  columns: selectDRDrillMortarColumns(state),
  forms: selectDRDrillMortarForm(state),
  data: selectDRDrillMortar(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
})
const mapDispatchToProps = {
  iudDRDrillMortar,
}
export default connect(mapStateToProps, mapDispatchToProps)(DrillMortar)
