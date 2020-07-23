import * as React from 'react'
import { connect } from 'react-redux'
import { iudNpvActDetail } from '@AppStore/Actions/Derictories/NvpActs/NpvActDetails'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import { selectNpvActFrame } from '@AppStore/Selectors/frames'
import { AppStateType } from '@AppStore/store'
import { IMapStateNpvActDetails, IMapDispatchNpvDetails } from './types'
import { TNpvDetail } from '@AppStore/types/reducers/typesNpvActsReducer'
import {
  selectNpvDetails,
  selectNpvActDetailsColumns,
  selectNpvDetailsForm,
  selectNpvCauses,
} from '@AppStore/Selectors/NpvActs'
import { selectWorkKinds } from '@AppStore/Selectors/workKinds'
import { selectDrillingRigs } from '@AppStore/Selectors/drillingRigs'
import { selectWorkClassifier } from '@AppStore/Selectors/workClassifier'
import { selectOrganizations } from '@AppStore/Selectors/organizations'
import { getWorkKinds } from '@AppStore/Actions/Derictories/WorkKinds'
import { getDrillingRigs } from '@AppStore/Actions/Derictories/DrillingRigs'
import { getWorkClassifier } from '@AppStore/Actions/Derictories/workClassifier'
import { getNpvCauses } from '@AppStore/Actions/Derictories/NvpActs/NpVCauses'
import { getOrganizations } from '@AppStore/Actions/Derictories/Organizations'

const DetailsContainer: React.FC<
  IMapStateNpvActDetails & IMapDispatchNpvDetails
> = React.memo(
  ({
    loading_data,
    data,
    workKinds,
    drillingRigs,
    workClassifiers,
    npvCauses,
    organizations,
    columns,
    forms,
    frame,
    //funcs
    iudNpvActDetail,
    iudFunctionWithRedirectToItemsPage,
    getWorkKinds,
    getDrillingRigs,
    getWorkClassifier,
    getNpvCauses,
    getOrganizations,
    //
  }) => {
    React.useEffect(() => {
      getWorkKinds()
      getDrillingRigs()
      getWorkClassifier()
      getNpvCauses()
      getOrganizations()
    }, [])
    const refreshData = () => {
      getWorkKinds()
      getDrillingRigs()
      getWorkClassifier()
      getNpvCauses()
      getOrganizations()
    }
    const iudData = (flag: string, body: TNpvDetail, handleClose: () => void) =>
      iudNpvActDetail(flag, body, handleClose)
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
          drillingRigs,
          workClassifiers,
          npvCauses,
          organizations,
        }}
        iudFunctionWithRedirectToItemsPage={iudFunctionWithRedirectToItemsPage}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateNpvActDetails => ({
  loading_data: selectLoadingData(state),
  columns: selectNpvActDetailsColumns(state),
  forms: selectNpvDetailsForm(state),
  data: selectNpvDetails(state),
  frame: selectNpvActFrame(state),
  parentIdUrlParam: selectUrlParamsId(state),
  workKinds: selectWorkKinds(state),
  drillingRigs: selectDrillingRigs(state),
  workClassifiers: selectWorkClassifier(state),
  npvCauses: selectNpvCauses(state),
  organizations: selectOrganizations(state),
})
const mapDispatchToProps = {
  iudNpvActDetail,
  getWorkKinds,
  getDrillingRigs,
  getWorkClassifier,
  getNpvCauses,
  getOrganizations,
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer)
