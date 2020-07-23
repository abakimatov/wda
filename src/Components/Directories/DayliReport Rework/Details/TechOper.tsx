import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectDailyReportFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateTechOper, IMapDispatchTechOper } from './types'
import { iudDRTechOper } from '@AppStore/Actions/Derictories/DayliReport/TechOpers'
import { TTechOper } from '@AppStore/types/reducers/typesDayliReportReducer'
import {
  selectDRTechOpers,
  selectDRTechOpersColumns,
  selectDRTechOpersForm,
} from '@AppStore/Selectors/DayliReport'
import { selectWorkKinds } from '@AppStore/Selectors/workKinds'
import { selectWorkClassifier } from '@AppStore/Selectors/workClassifier'
import { selectOrganizations } from '@AppStore/Selectors/organizations'
import { getWorkKinds } from '@AppStore/Actions/Derictories/WorkKinds'
import { getOrganizations } from '@AppStore/Actions/Derictories/Organizations'
import { getWorkClassifier } from '@AppStore/Actions/Derictories/workClassifier'
import { selectDrillingRigs } from '@AppStore/Selectors/drillingRigs'
import { getDrillingRigs } from '@AppStore/Actions/Derictories/DrillingRigs'
//
const TechOper: React.FC<IMapStateTechOper & IMapDispatchTechOper> = React.memo(
  ({
    getData,
    loading_data,
    data,
    workKinds,
    workClassifiers,
    organizations,
    drillingRigs,
    columns,
    forms,
    frame,
    //funcs
    iudDRTechOper,
    iudFunctionWithRedirectToItemsPage,
    getWorkClassifier,
    getWorkKinds,
    getOrganizations,
    getDrillingRigs,
    //
  }) => {
    React.useEffect(() => {
      refreshData()
    }, [])
    const refreshData = () => {
      getWorkClassifier()
      getWorkKinds()
      getOrganizations()
      getDrillingRigs()
      if (getData) {
        getData()
      }
    }
    const iudData = (flag: string, body: TTechOper, handleClose: () => void) =>
      iudDRTechOper(flag, body, handleClose)
    return (
      <TableMasterController
        data={data}
        columns={columns}
        forms={forms}
        loading_data={loading_data}
        frame={frame}
        iudDerictories={iudData}
        subData={{
          workKinds,
          workClassifiers,
          organizations,
          drillingRigs,
        }}
        iudFunctionWithRedirectToItemsPage={iudFunctionWithRedirectToItemsPage}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateTechOper => ({
  loading_data: selectLoadingData(state),
  columns: selectDRTechOpersColumns(state),
  forms: selectDRTechOpersForm(state),
  data: selectDRTechOpers(state),
  frame: selectDailyReportFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
  workKinds: selectWorkKinds(state),
  workClassifiers: selectWorkClassifier(state),
  organizations: selectOrganizations(state),
  drillingRigs: selectDrillingRigs(state),
})
const mapDispatchToProps = {
  iudDRTechOper,
  getWorkClassifier,
  getWorkKinds,
  getOrganizations,
  getDrillingRigs,
}
export default connect(mapStateToProps, mapDispatchToProps)(TechOper)
