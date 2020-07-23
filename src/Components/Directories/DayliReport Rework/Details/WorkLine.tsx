//WorkLine
import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateWorkLine, IMapDispatchWorkLine } from './types'
import {
  selectDRWorkLine,
  selectDRWorkLineColumns,
  selectDRWorkLineForm,
} from '@AppStore/Selectors/DayliReport'
import { TWorkLine } from '@AppStore/types/reducers/typesDayliReportReducer'
import { iudDRWorkLine } from '@AppStore/Actions/Derictories/DayliReport/WorkLine'

const WorkLine: React.FC<IMapStateWorkLine & IMapDispatchWorkLine> = React.memo(
  ({
    getData,
    loading_data,
    data,
    columns,
    forms,
    frame,
    //funcs
    iudDRWorkLine,
    iudFunctionWithRedirectToItemsPage,
    //
  }) => {
    React.useEffect(() => {}, [])
    const refreshData = () => {
      if (getData) {
        getData()
      }
    }
    const iudData = (flag: string, body: TWorkLine, handleClose: () => void) =>
      iudDRWorkLine(flag, body, handleClose)
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
const mapStateToProps = (state: AppStateType): IMapStateWorkLine => ({
  loading_data: selectLoadingData(state),
  columns: selectDRWorkLineColumns(state),
  forms: selectDRWorkLineForm(state),
  data: selectDRWorkLine(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
})
const mapDispatchToProps = {
  iudDRWorkLine,
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkLine)
