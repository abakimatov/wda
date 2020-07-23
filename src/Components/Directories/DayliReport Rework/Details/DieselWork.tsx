//DieselWork
import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateDieselWork, IMapDispatchDieselWork } from './types'
import {
  selectDRDieselWork,
  selectDRDieselWorkForm,
  selectDRDieselWorkColumns,
} from '@AppStore/Selectors/DayliReport'
import { selectNomenclature } from '@AppStore/Selectors/nomenclature'
import { getNomenclature } from '@AppStore/Actions/Derictories/Nomenclature'
import { TDieselWork } from '@AppStore/types/reducers/typesDayliReportReducer'
import { iudDRDieselWork } from '@AppStore/Actions/Derictories/DayliReport/DieselWork'

const DieselWork: React.FC<
  IMapStateDieselWork & IMapDispatchDieselWork
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
    iudDRDieselWork,
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
      body: TDieselWork,
      handleClose: () => void
    ) => iudDRDieselWork(flag, body, handleClose)
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
const mapStateToProps = (state: AppStateType): IMapStateDieselWork => ({
  loading_data: selectLoadingData(state),
  columns: selectDRDieselWorkColumns(state),
  forms: selectDRDieselWorkForm(state),
  data: selectDRDieselWork(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
  nomenclature: selectNomenclature(state),
})
const mapDispatchToProps = {
  iudDRDieselWork,
  getNomenclature,
}
export default connect(mapStateToProps, mapDispatchToProps)(DieselWork)
