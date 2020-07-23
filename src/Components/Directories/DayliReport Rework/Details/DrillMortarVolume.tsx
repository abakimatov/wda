import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import {
  IMapStateDrillMortarVolume,
  IMapDispatchDrillMortarVolume,
} from './types'
import {
  selectDRDrillMortarVolume,
  selectDRDrillMortarVolumeColumns,
  selectDRDrillMortarVolumeForm,
} from '@AppStore/Selectors/DayliReport'
import { TDrillMortarVolume } from '@AppStore/types/reducers/typesDayliReportReducer'
import { iudDRDrillMortarVolume } from '@AppStore/Actions/Derictories/DayliReport/DrillMortarVolume'

const DrillMortarVolume: React.FC<
  IMapStateDrillMortarVolume & IMapDispatchDrillMortarVolume
> = React.memo(
  ({
    getData,
    loading_data,
    data,
    columns,
    forms,
    frame,
    //funcs
    iudDRDrillMortarVolume,
    iudFunctionWithRedirectToItemsPage,
    //
  }) => {
    React.useEffect(() => {}, [])
    const refreshData = () => {
      if (getData) {
        getData()
      }
    }
    const iudData = (
      flag: string,
      body: TDrillMortarVolume,
      handleClose: () => void
    ) => iudDRDrillMortarVolume(flag, body, handleClose)
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
const mapStateToProps = (state: AppStateType): IMapStateDrillMortarVolume => ({
  loading_data: selectLoadingData(state),
  columns: selectDRDrillMortarVolumeColumns(state),
  forms: selectDRDrillMortarVolumeForm(state),
  data: selectDRDrillMortarVolume(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
})
const mapDispatchToProps = {
  iudDRDrillMortarVolume,
}
export default connect(mapStateToProps, mapDispatchToProps)(DrillMortarVolume)
