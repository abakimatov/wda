import * as React from 'react'
//redux
import { connect } from 'react-redux'
import {
  getWorkClassifier,
  iudWorkClassifier,
} from '@AppStore/Actions/Derictories/workClassifier'
import {
  selectWorkClassifier,
  selectWorkClassifierColumns,
  selectWorkClassifierForm,
} from '@AppStore/Selectors/workClassifier'
import { getBkvtypes } from '@AppStore/Actions/Derictories/HelpersFetches'
import { selectBkvTypes } from '@AppStore/Selectors/index'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { AppStateType } from '@AppStore/store'
import {
  IMapStateToPropsWorkClassfier,
  IMapDispatchToPropsWorkClassfier,
} from './types'
import { selectBkvWorkClassifierFrame } from '@AppStore/Selectors/frames'
import {
  getUserFields,
  getUserFrames,
} from '@AppStore/Actions/UserData/UserData'

const WorkClassifierContainer: React.FC<
  IMapDispatchToPropsWorkClassfier & IMapStateToPropsWorkClassfier
> = React.memo(
  ({
    frame,
    work_classifier_data,
    bkv_types_data,
    iudWorkClassifier,
    loading_data,
    forms,
    columns,
    getWorkClassifier,
    getBkvtypes,
    setTitleToNavbar,
    getUserFields,
    getUserFrames,
  }) => {
    React.useEffect(() => {
      refreshData()
      document.title = 'Классификатор работ БКВ'
      setTitleToNavbar('Классификатор работ БКВ')
    }, [])
    const refreshData = () => {
      getUserFields()
      getUserFrames()
      getWorkClassifier()
      getBkvtypes()
    }
    return (
      <TableMasterController
        data={work_classifier_data}
        iudDerictories={iudWorkClassifier}
        loading_data={loading_data}
        subData={{
          bkv_types_data,
        }}
        frame={frame}
        forms={forms}
        columns={columns}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (
  state: AppStateType
): IMapStateToPropsWorkClassfier => ({
  work_classifier_data: selectWorkClassifier(state),
  bkv_types_data: selectBkvTypes(state),
  loading_data: state.UI.loading_data,
  frame: selectBkvWorkClassifierFrame(state),
  forms: selectWorkClassifierForm(state),
  columns: selectWorkClassifierColumns(state),
})
const MapDispatchToProps: IMapDispatchToPropsWorkClassfier = {
  getWorkClassifier,
  iudWorkClassifier,
  setTitleToNavbar,
  getBkvtypes,
  getUserFields,
  getUserFrames,
}
const connector = connect(mapStateToProps, MapDispatchToProps)
export default connector(WorkClassifierContainer)
