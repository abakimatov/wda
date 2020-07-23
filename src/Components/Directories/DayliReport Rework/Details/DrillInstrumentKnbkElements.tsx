//DrillInstrumentKnbkElements
import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import {
  IMapStateDrillInstrumentKnbkElements,
  IMapDispatchDrillInstrumentKnbkElements,
} from './types'
import {
  selectDRDrillInstrumentKnbkElements,
  selectDRDrillInstrumentKnbkElementsColumns,
  selectDRDrillInstrumentKnbkElementsForm,
} from '@AppStore/Selectors/DayliReport'
import { selectNomenclature } from '@AppStore/Selectors/nomenclature'
import { getNomenclature } from '@AppStore/Actions/Derictories/Nomenclature'
import { TDrillInstrumentKnbkElements } from '@AppStore/types/reducers/typesDayliReportReducer'
import { iudDRDrillInstrumentKnbkElements } from '@AppStore/Actions/Derictories/DayliReport/DrillInstrumentKnbkElements'

const DrillInstrumentKnbkElements: React.FC<
  IMapStateDrillInstrumentKnbkElements & IMapDispatchDrillInstrumentKnbkElements
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
    iudDRDrillInstrumentKnbkElements,
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
      body: TDrillInstrumentKnbkElements,
      handleClose: () => void
    ) => iudDRDrillInstrumentKnbkElements(flag, body, handleClose)
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
const mapStateToProps = (
  state: AppStateType
): IMapStateDrillInstrumentKnbkElements => ({
  loading_data: selectLoadingData(state),
  columns: selectDRDrillInstrumentKnbkElementsColumns(state),
  forms: selectDRDrillInstrumentKnbkElementsForm(state),
  data: selectDRDrillInstrumentKnbkElements(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
  nomenclature: selectNomenclature(state),
})
const mapDispatchToProps = {
  iudDRDrillInstrumentKnbkElements,
  getNomenclature,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrillInstrumentKnbkElements)
