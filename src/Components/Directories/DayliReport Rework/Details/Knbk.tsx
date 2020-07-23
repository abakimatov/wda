import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateKnbk, IMapDispatchKnbk } from './types'
import { TKnbk } from '@AppStore/types/reducers/typesDayliReportReducer'
import {
  selectDRKnbk,
  selectDRKnbkColumns,
  selectDRKnbkForm,
} from '@AppStore/Selectors/DayliReport'
import { iudDRKnbk } from '@AppStore/Actions/Derictories/DayliReport/Knbk'

const Knbk: React.FC<IMapStateKnbk & IMapDispatchKnbk> = React.memo(
  ({
    getData,
    loading_data,
    data,
    columns,
    forms,
    frame,
    //funcs
    iudDRKnbk,
    iudFunctionWithRedirectToItemsPage,
    //
  }) => {
    React.useEffect(() => {}, [])
    const refreshData = () => {
      if (getData) {
        getData()
      }
    }
    const iudData = (flag: string, body: TKnbk, handleClose: () => void) =>
      iudDRKnbk(flag, body, handleClose)
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
const mapStateToProps = (state: AppStateType): IMapStateKnbk => ({
  loading_data: selectLoadingData(state),
  columns: selectDRKnbkColumns(state),
  forms: selectDRKnbkForm(state),
  data: selectDRKnbk(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
})
const mapDispatchToProps = {
  iudDRKnbk,
}
export default connect(mapStateToProps, mapDispatchToProps)(Knbk)
