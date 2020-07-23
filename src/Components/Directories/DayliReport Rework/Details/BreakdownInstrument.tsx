import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import {
  IMapStateBreakdownInstrument,
  IMapDispatchBreakdownInstrument,
} from './types'
import {
  selectDRBreakDownInstrument,
  selectDRBreakDownInstrumentColumns,
  selectDRBreakDownInstrumentForm,
} from '@AppStore/Selectors/DayliReport'
import { TBreakdownInstrument } from '@AppStore/types/reducers/typesDayliReportReducer'
import { iudDRBreakdownInstrument } from '@AppStore/Actions/Derictories/DayliReport/BreakDownInstrument'
import { selectNomenclature } from '@AppStore/Selectors/nomenclature'
import { getNomenclature } from '@AppStore/Actions/Derictories/Nomenclature'

const BreakdownInstrument: React.FC<
  IMapStateBreakdownInstrument & IMapDispatchBreakdownInstrument
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
    iudDRBreakdownInstrument,
    iudFunctionWithRedirectToItemsPage,
    getNomenclature,
    //
  }) => {
    React.useEffect(() => {
      refreshData()
    }, [])
    const refreshData = () => {
      getNomenclature()
      if (getData) {
        getData()
      }
    }
    const iudData = (
      flag: string,
      body: TBreakdownInstrument,
      handleClose: () => void
    ) => iudDRBreakdownInstrument(flag, body, handleClose)
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
): IMapStateBreakdownInstrument => ({
  loading_data: selectLoadingData(state),
  columns: selectDRBreakDownInstrumentColumns(state),
  forms: selectDRBreakDownInstrumentForm(state),
  data: selectDRBreakDownInstrument(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
  nomenclature: selectNomenclature(state),
})
const mapDispatchToProps = {
  iudDRBreakdownInstrument,
  getNomenclature,
}
export default connect(mapStateToProps, mapDispatchToProps)(BreakdownInstrument)
