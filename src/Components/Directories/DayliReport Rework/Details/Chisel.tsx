import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateChisel, IMapDispatchChisel } from './types'
import {
  selectDRChisel,
  selectDRChiselColumns,
  selectDRChiselForm,
} from '@AppStore/Selectors/DayliReport'
import { iudDRChisel } from '@AppStore/Actions/Derictories/DayliReport/Chisel'
import { TChisel } from '@AppStore/types/reducers/typesDayliReportReducer'

const Chisel: React.FC<IMapStateChisel & IMapDispatchChisel> = React.memo(
  ({
    getData,
    loading_data,
    data,
    columns,
    forms,
    frame,
    //funcs
    iudDRChisel,
    iudFunctionWithRedirectToItemsPage,
    //
  }) => {
    React.useEffect(() => {
      refreshData()
    }, [])
    const refreshData = () => {
      if (getData) {
        getData()
      }
    }
    const iudData = (flag: string, body: TChisel, handleClose: () => void) =>
      iudDRChisel(flag, body, handleClose)
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
const mapStateToProps = (state: AppStateType): IMapStateChisel => ({
  loading_data: selectLoadingData(state),
  columns: selectDRChiselColumns(state),
  forms: selectDRChiselForm(state),
  data: selectDRChisel(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
})
const mapDispatchToProps = {
  iudDRChisel,
}
export default connect(mapStateToProps, mapDispatchToProps)(Chisel)
