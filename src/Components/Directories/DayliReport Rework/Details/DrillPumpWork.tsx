import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateDrillPumpWork, IMapDispatchDrillPumpWork } from './types'
import {
  selectDRPumpWork,
  selectDRPumpWorkColumns,
  selectDRPumpWorkForm,
} from '@AppStore/Selectors/DayliReport'
import { TDrillPumpWork } from '@AppStore/types/reducers/typesDayliReportReducer'
import { iudDRDrillPumpWork } from '@AppStore/Actions/Derictories/DayliReport/DrillPumpWork'
import { selectNomenclature } from '@AppStore/Selectors/nomenclature'
import { getNomenclature } from '@AppStore/Actions/Derictories/Nomenclature'

const DrillPumpWork: React.FC<
  IMapStateDrillPumpWork & IMapDispatchDrillPumpWork
> = React.memo(
  ({
    getData,
    loading_data,
    data,
    nomenclature,
    columns,
    forms,
    frame,
    //funcs
    iudDRDrillPumpWork,
    iudFunctionWithRedirectToItemsPage,
    getNomenclature,
    //
  }) => {
    React.useEffect(() => {
      getNomenclature()
    }, [])
    const refreshData = () => {
      getNomenclature()
      if (getData) {
        getData()
      }
    }
    const iudData = (
      flag: string,
      body: TDrillPumpWork,
      handleClose: () => void
    ) => iudDRDrillPumpWork(flag, body, handleClose)
    return (
      <TableMasterController
        data={data}
        columns={columns}
        forms={forms}
        loading_data={loading_data}
        frame={frame}
        iudDerictories={iudData}
        subData={{ nomenclature }}
        iudFunctionWithRedirectToItemsPage={iudFunctionWithRedirectToItemsPage}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateDrillPumpWork => ({
  loading_data: selectLoadingData(state),
  columns: selectDRPumpWorkColumns(state),
  forms: selectDRPumpWorkForm(state),
  data: selectDRPumpWork(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
  nomenclature: selectNomenclature(state),
})
const mapDispatchToProps = {
  iudDRDrillPumpWork,
  getNomenclature,
}
export default connect(mapStateToProps, mapDispatchToProps)(DrillPumpWork)
