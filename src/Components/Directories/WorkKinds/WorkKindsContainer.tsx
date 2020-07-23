import * as React from 'react'
//redux
import { connect } from 'react-redux'
import {
  getWorkKinds,
  iudWorkKind,
} from '@AppStore/Actions/Derictories/WorkKinds'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
//components
//@ts-ignore
import { TableMasterTreeList } from '@Templates/DerictoriesComponents/TableMasterTreeList'
//import { TableMasterController } from "../../../CommonComponents/DerictoriesComponents/TableMaster";
import {
  selectWorkKinds,
  selectWorkKindsColumns,
  selectWorkKindsForm,
} from '@AppStore/Selectors/workKinds'
import { AppStateType } from '@AppStore/store'
import { selectWorkKindFrame } from '@AppStore/Selectors/frames'
import { selectLoadingData } from '@AppStore/Selectors'
import {
  IMapDispatchToPropsWorkKinds,
  IMapStateToPropsWorkKinds,
} from './types'
import {
  getUserFrames,
  getUserFields,
} from '@AppStore/Actions/UserData/UserData'

const WorkKindsContainer: React.FC<
  IMapDispatchToPropsWorkKinds & IMapStateToPropsWorkKinds
> = React.memo(
  ({
    work_kinds_data,
    frame,
    iudWorkKind,
    loading_data,
    forms,
    columns,
    getWorkKinds,
    setTitleToNavbar,
    getUserFields,
    getUserFrames,
  }) => {
    const [entryTypes] = React.useState([
      { id: 1, name: 'Папка' },
      { id: 2, name: 'Вид работ' },
    ])
    React.useEffect(() => {
      refreshData()
      document.title = 'Виды работ'
      setTitleToNavbar('Виды работ')
    }, [])
    const refreshData = () => {
      getUserFrames()
      getUserFields()
      getWorkKinds()
    }
    return (
      <TableMasterTreeList
        data={work_kinds_data}
        iudDerictories={iudWorkKind}
        loading_data={loading_data}
        frame={frame}
        forms={forms}
        columns={columns}
        subData={{
          entryTypes,
        }}
        anyData={{
          isStandard: false,
        }}
        visibleFiles={true}
        visibleMovedItems={true}
        objTypeId={4}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType) => ({
  loading_data: selectLoadingData(state),
  work_kinds_data: selectWorkKinds(state),
  frame: selectWorkKindFrame(state),
  forms: selectWorkKindsForm(state),
  columns: selectWorkKindsColumns(state),
})
const mapDispatchToProps: IMapDispatchToPropsWorkKinds = {
  getWorkKinds,
  iudWorkKind,
  setTitleToNavbar,
  getUserFields,
  getUserFrames,
}
const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(WorkKindsContainer)
