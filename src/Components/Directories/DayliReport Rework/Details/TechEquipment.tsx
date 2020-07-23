//TechEquipment
import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateTechEquipment, IMapDispatchTechEquipment } from './types'
import {
  selectDRTechEquipment,
  selectDRTechEquipmentColumns,
  selectDRTechEquipmentForm,
} from '@AppStore/Selectors/DayliReport'
import { selectNomenclature } from '@AppStore/Selectors/nomenclature'
import { getNomenclature } from '@AppStore/Actions/Derictories/Nomenclature'
import { TTechEquipment } from '@AppStore/types/reducers/typesDayliReportReducer'
import { iudDRTechEquipment } from '@AppStore/Actions/Derictories/DayliReport/TechEquipment'

const DrillInstrumentKnbkElements: React.FC<
  IMapStateTechEquipment & IMapDispatchTechEquipment
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
    iudDRTechEquipment,
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
      body: TTechEquipment,
      handleClose: () => void
    ) => iudDRTechEquipment(flag, body, handleClose)
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
const mapStateToProps = (state: AppStateType): IMapStateTechEquipment => ({
  loading_data: selectLoadingData(state),
  columns: selectDRTechEquipmentColumns(state),
  forms: selectDRTechEquipmentForm(state),
  data: selectDRTechEquipment(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
  nomenclature: selectNomenclature(state),
})
const mapDispatchToProps = {
  iudDRTechEquipment,
  getNomenclature,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrillInstrumentKnbkElements)
