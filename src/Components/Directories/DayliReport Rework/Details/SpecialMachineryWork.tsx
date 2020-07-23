//SpecialMachineryWork
import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import {
  IMapStateSpecialMachineryWork,
  IMapDispatchSpecialMachineryWork,
} from './types'
import {
  selectDRSpecialMachineryWork,
  selectDRSpecialMachineryWorkColumns,
  selectDRSpecialMachineryWorkForm,
} from '@AppStore/Selectors/DayliReport'
import { selectNomenclature } from '@AppStore/Selectors/nomenclature'
import { getNomenclature } from '@AppStore/Actions/Derictories/Nomenclature'
import { TSpecialMachineryWork } from '@AppStore/types/reducers/typesDayliReportReducer'
import { iudDRSpecialMachineryWork } from '@AppStore/Actions/Derictories/DayliReport/SpecialMachineryWork'

const SpecialMachineryWork: React.FC<
  IMapStateSpecialMachineryWork & IMapDispatchSpecialMachineryWork
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
    iudDRSpecialMachineryWork,
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
      body: TSpecialMachineryWork,
      handleClose: () => void
    ) => iudDRSpecialMachineryWork(flag, body, handleClose)
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
): IMapStateSpecialMachineryWork => ({
  loading_data: selectLoadingData(state),
  columns: selectDRSpecialMachineryWorkColumns(state),
  forms: selectDRSpecialMachineryWorkForm(state),
  data: selectDRSpecialMachineryWork(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
  nomenclature: selectNomenclature(state),
})
const mapDispatchToProps = {
  iudDRSpecialMachineryWork,
  getNomenclature,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecialMachineryWork)
