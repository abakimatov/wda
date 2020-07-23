import * as React from 'react'
import { connect } from 'react-redux'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { AppStateType } from '@AppStore/store'
import { IMapDispatchToPropsUnits, IMapStateToPropsUnits } from './types'
import { selectProjectFrame } from '@AppStore/Selectors/frames'
import {
  getUserFields,
  getUserFrames,
} from '@AppStore/Actions/UserData/UserData'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
import {
  selectPerformens,
  selectPerformensColumns,
  selectPerformensForm,
} from '@AppStore/Selectors/performents'
import {
  iudWorkPerformer,
  getWorkPerformers,
} from '@AppStore/Actions/Derictories/Performers'

const PerformersContainer: React.FC<
  IMapDispatchToPropsUnits & IMapStateToPropsUnits
> = React.memo(
  ({
    data,
    columns,
    frame,
    forms,
    iudWorkPerformer,
    getWorkPerformers,
    getUserFields,
    getUserFrames,
    setTitleToNavbar,
  }) => {
    React.useEffect(() => {
      refreshData()
      setTitleToNavbar('Исполнители')
    }, [])
    const refreshData = () => {
      getUserFields()
      getUserFrames()
      getWorkPerformers()
    }
    return (
      <TableMasterController
        data={data}
        frame={frame}
        columns={columns}
        forms={forms}
        iudDerictories={iudWorkPerformer}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType) => ({
  data: selectPerformens(state),
  frame: selectProjectFrame(state),
  columns: selectPerformensColumns(state),
  forms: selectPerformensForm(state),
})
const DispatchToProps = {
  getWorkPerformers,
  iudWorkPerformer,
  getUserFields,
  getUserFrames,
  setTitleToNavbar,
}
export default connect(mapStateToProps, DispatchToProps)(PerformersContainer)
