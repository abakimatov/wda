//MaterialConsumption
import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import {
  IMapStateMaterialConsumption,
  IMapDispatchMaterialConsumption,
} from './types'
import {
  selectDRMaterialConsumption,
  selectDRMaterialConsumptionColumns,
  selectDRMaterialConsumptionForm,
} from '@AppStore/Selectors/DayliReport'
import { TMaterialConsumption } from '@AppStore/types/reducers/typesDayliReportReducer'
import { selectNomenclature } from '@AppStore/Selectors/nomenclature'
import { getNomenclature } from '@AppStore/Actions/Derictories/Nomenclature'
import { selectUnits } from '@AppStore/Selectors/units'
import { getUnits } from '@AppStore/Actions/Derictories/Units'
import { iudDRMaterialConsumption } from '@AppStore/Actions/Derictories/DayliReport/MaterialConsumption'

const MaterialConsumption: React.FC<
  IMapStateMaterialConsumption & IMapDispatchMaterialConsumption
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
    iudDRMaterialConsumption,
    iudFunctionWithRedirectToItemsPage,
    getNomenclature,
    getUnits,
    //
  }) => {
    React.useEffect(() => {
      getNomenclature()
      getUnits()
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
      body: TMaterialConsumption,
      handleClose: () => void
    ) => iudDRMaterialConsumption(flag, body, handleClose)
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
const mapStateToProps = (
  state: AppStateType
): IMapStateMaterialConsumption => ({
  loading_data: selectLoadingData(state),
  columns: selectDRMaterialConsumptionColumns(state),
  forms: selectDRMaterialConsumptionForm(state),
  data: selectDRMaterialConsumption(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
  nomenclature: selectNomenclature(state),
  units: selectUnits(state),
})
const mapDispatchToProps = {
  iudDRMaterialConsumption,
  getNomenclature,
  getUnits,
}
export default connect(mapStateToProps, mapDispatchToProps)(MaterialConsumption)
