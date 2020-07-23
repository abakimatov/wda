//DieselConsumption
import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import {
  IMapStateDieselConsumption,
  IMapDispatchDieselConsumption,
} from './types'
import {
  selectDRDieselConsumption,
  selectDRDieselConsumptionColumns,
  selectDRDieselConsumptionForm,
} from '@AppStore/Selectors/DayliReport'
import { TDieselConsumption } from '@AppStore/types/reducers/typesDayliReportReducer'
import { selectNomenclature } from '@AppStore/Selectors/nomenclature'
import { getNomenclature } from '@AppStore/Actions/Derictories/Nomenclature'
import { selectUnits } from '@AppStore/Selectors/units'
import { getUnits } from '@AppStore/Actions/Derictories/Units'
import { iudDRDieselConsumption } from '@AppStore/Actions/Derictories/DayliReport/DieselConsumption'

const DieselConsumption: React.FC<
  IMapStateDieselConsumption & IMapDispatchDieselConsumption
> = React.memo(
  ({
    getData,
    loading_data,
    data,
    nomenclature,
    units,
    columns,
    forms,
    frame,
    //funcs
    iudDRDieselConsumption,
    iudFunctionWithRedirectToItemsPage,
    getNomenclature,
    getUnits,
    //
  }) => {
    React.useEffect(() => {
      refreshData()
    }, [])
    const refreshData = () => {
      getNomenclature()
      getUnits()
      if (getData) {
        getData()
      }
    }
    const iudData = (
      flag: string,
      body: TDieselConsumption,
      handleClose: () => void
    ) => iudDRDieselConsumption(flag, body, handleClose)
    return (
      <TableMasterController
        data={data}
        columns={columns}
        forms={forms}
        loading_data={loading_data}
        frame={frame}
        iudDerictories={iudData}
        subData={{ nomenclature, units }}
        iudFunctionWithRedirectToItemsPage={iudFunctionWithRedirectToItemsPage}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateDieselConsumption => ({
  loading_data: selectLoadingData(state),
  columns: selectDRDieselConsumptionColumns(state),
  forms: selectDRDieselConsumptionForm(state),
  data: selectDRDieselConsumption(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
  nomenclature: selectNomenclature(state),
  units: selectUnits(state),
})
const mapDispatchToProps = {
  iudDRDieselConsumption,
  getNomenclature,
  getUnits,
}
export default connect(mapStateToProps, mapDispatchToProps)(DieselConsumption)
