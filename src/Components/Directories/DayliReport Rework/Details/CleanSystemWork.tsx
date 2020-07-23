import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateCleanSystemWork, IMapDispatchCleanSystemWork } from './types'
import {
  selectDRCleanSystemWork,
  selectDRCleanSystemWorkColumns,
  selectDRCleanSystemWorkForm,
} from '@AppStore/Selectors/DayliReport'
import { TCleanSystemWork } from '@AppStore/types/reducers/typesDayliReportReducer'
import { iudDRCleanSystemWork } from '@AppStore/Actions/Derictories/DayliReport/CleanSystemWork'
import { selectNomenclature } from '@AppStore/Selectors/nomenclature'
import { getNomenclature } from '@AppStore/Actions/Derictories/Nomenclature'

const DrillMortar: React.FC<
  IMapStateCleanSystemWork & IMapDispatchCleanSystemWork
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
    iudDRCleanSystemWork,
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
      body: TCleanSystemWork,
      handleClose: () => void
    ) => iudDRCleanSystemWork(flag, body, handleClose)
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
const mapStateToProps = (state: AppStateType): IMapStateCleanSystemWork => ({
  loading_data: selectLoadingData(state),
  columns: selectDRCleanSystemWorkColumns(state),
  forms: selectDRCleanSystemWorkForm(state),
  data: selectDRCleanSystemWork(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
  nomenclature: selectNomenclature(state),
})
const mapDispatchToProps = {
  iudDRCleanSystemWork,
  getNomenclature,
}
export default connect(mapStateToProps, mapDispatchToProps)(DrillMortar)
