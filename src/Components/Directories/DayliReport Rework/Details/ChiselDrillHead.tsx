//ChiselDrillHead
import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateChiselDrillHead, IMapDispatchChiselDrillHead } from './types'
import {
  selectDRChiselDrillHead,
  selectDRChiselDrillHeadColumns,
  selectDRChiselDrillHeadForm,
} from '@AppStore/Selectors/DayliReport'
import { selectNomenclature } from '@AppStore/Selectors/nomenclature'
import { getNomenclature } from '@AppStore/Actions/Derictories/Nomenclature'
import { iudDRChiselDrillHead } from '@AppStore/Actions/Derictories/DayliReport/ChiselDrillHead'
import { TChiselDrillHead } from '@AppStore/types/reducers/typesDayliReportReducer'

const ChiselDrillHead: React.FC<
  IMapStateChiselDrillHead & IMapDispatchChiselDrillHead
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
    iudDRChiselDrillHead,
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
      body: TChiselDrillHead,
      handleClose: () => void
    ) => iudDRChiselDrillHead(flag, body, handleClose)
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
const mapStateToProps = (state: AppStateType): IMapStateChiselDrillHead => ({
  loading_data: selectLoadingData(state),
  columns: selectDRChiselDrillHeadColumns(state),
  forms: selectDRChiselDrillHeadForm(state),
  data: selectDRChiselDrillHead(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
  nomenclature: selectNomenclature(state),
})
const mapDispatchToProps = {
  iudDRChiselDrillHead,
  getNomenclature,
}
export default connect(mapStateToProps, mapDispatchToProps)(ChiselDrillHead)
