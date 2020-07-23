//TechGear
import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateTechGear, IMapDispatchTechGear } from './types'
import {
  selectDRTechGearColumns,
  selectDRTechGearForm,
  selectDRTechGear,
} from '@AppStore/Selectors/DayliReport'
import { TTechGear } from '@AppStore/types/reducers/typesDayliReportReducer'
import { selectNomenclature } from '@AppStore/Selectors/nomenclature'
import { getNomenclature } from '@AppStore/Actions/Derictories/Nomenclature'
import { selectUnits } from '@AppStore/Selectors/units'
import { getUnits } from '@AppStore/Actions/Derictories/Units'
import { iudDRTechGear } from '@AppStore/Actions/Derictories/DayliReport/TechGear'

const TechGear: React.FC<IMapStateTechGear & IMapDispatchTechGear> = React.memo(
  ({
    getData,
    loading_data,
    data,
    nomenclature,
    units,
    columns,
    forms,
    frame,
    //funcs
    iudDRTechGear,
    iudFunctionWithRedirectToItemsPage,
    getNomenclature,
    getUnits,
    //
  }) => {
    React.useEffect(() => {
      getNomenclature()
      getUnits()
    }, [])
    const refreshData = () => {
      getNomenclature()
      getUnits()
      if (getData) {
        getData()
      }
    }
    const iudData = (flag: string, body: TTechGear, handleClose: () => void) =>
      iudDRTechGear(flag, body, handleClose)
    return (
      <TableMasterController
        data={data}
        columns={columns}
        forms={forms}
        loading_data={loading_data}
        frame={frame}
        iudDerictories={iudData}
        subData={{ nomenclature, units }}
        iudFunctionWithRedirectToItemsPage={iudFunctionWithRedirectToItemsPage}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateTechGear => ({
  loading_data: selectLoadingData(state),
  columns: selectDRTechGearColumns(state),
  forms: selectDRTechGearForm(state),
  data: selectDRTechGear(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
  nomenclature: selectNomenclature(state),
  units: selectUnits(state),
})
const mapDispatchToProps = {
  iudDRTechGear,
  getNomenclature,
  getUnits,
}
export default connect(mapStateToProps, mapDispatchToProps)(TechGear)
