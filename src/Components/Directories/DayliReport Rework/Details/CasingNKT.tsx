//CasingNKT
import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateCasingNKT, IMapDispatchCasingNKT } from './types'
import {
  selectDRCasingNTK,
  selectDRCasingNTKColumns,
  selectDRCasingNTKForm,
} from '@AppStore/Selectors/DayliReport'
import { selectNomenclature } from '@AppStore/Selectors/nomenclature'
import { getNomenclature } from '@AppStore/Actions/Derictories/Nomenclature'
import { TCasingNkt } from '@AppStore/types/reducers/typesDayliReportReducer'
import { iudDRCasingNKT } from '@AppStore/Actions/Derictories/DayliReport/CasingNKT'

const CasingNKT: React.FC<
  IMapStateCasingNKT & IMapDispatchCasingNKT
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
    iudDRCasingNKT,
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
    const iudData = (flag: string, body: TCasingNkt, handleClose: () => void) =>
      iudDRCasingNKT(flag, body, handleClose)
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
const mapStateToProps = (state: AppStateType): IMapStateCasingNKT => ({
  loading_data: selectLoadingData(state),
  columns: selectDRCasingNTKColumns(state),
  forms: selectDRCasingNTKForm(state),
  data: selectDRCasingNTK(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
  nomenclature: selectNomenclature(state),
})
const mapDispatchToProps = {
  iudDRCasingNKT,
  getNomenclature,
}
export default connect(mapStateToProps, mapDispatchToProps)(CasingNKT)
