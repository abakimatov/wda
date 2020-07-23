import * as React from 'react'
import { connect } from 'react-redux'
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
import {
  getScenarios,
  iudScenario,
} from '@AppStore/Actions/Derictories/Scenarios'
import {
  selectScenarios,
  selectScenariosForm,
  selectScenariosColumns,
} from '@AppStore/Selectors/scenarios'
import { selectScenariosFrame } from '@AppStore/Selectors/frames/index'
import { AppStateType } from '@AppStore/store'
import {
  IMapDispatchToPropsScenarios,
  IMapStateToPropsScenarios,
} from './types'
import {
  getUserFrames,
  getUserFields,
} from '@AppStore/Actions/UserData/UserData'

const ScenariosContainer: React.FC<
  IMapDispatchToPropsScenarios & IMapStateToPropsScenarios
> = React.memo(
  ({
    scenarios,
    loading_data,
    frame,
    columns,
    forms,
    //funcs
    iudScenario,
    getScenarios,
    setTitleToNavbar,
    getUserFrames,
    getUserFields,
  }) => {
    React.useEffect(() => {
      refreshData()
      setTitleToNavbar('Сценарии')
      document.title = 'Сценарии'
    }, [])
    const refreshData = () => {
      getUserFrames()
      getUserFields()
      getScenarios()
    }
    return (
      <TableMasterController
        data={scenarios}
        columns={columns}
        forms={forms}
        loading_data={loading_data}
        frame={frame}
        iudDerictories={iudScenario}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateToPropsScenarios => ({
  scenarios: selectScenarios(state),
  loading_data: state.UI.loading_data,
  frame: selectScenariosFrame(state),
  columns: selectScenariosColumns(state),
  forms: selectScenariosForm(state),
})
const mapDispatchToProps: IMapDispatchToPropsScenarios = {
  setTitleToNavbar,
  getScenarios,
  iudScenario,
  getUserFrames,
  getUserFields,
}
const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(ScenariosContainer)
