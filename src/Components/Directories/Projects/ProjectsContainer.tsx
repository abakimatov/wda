import * as React from 'react'
//redux
import { connect } from 'react-redux'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
//components
//@ts-ignore
import { TableMasterController } from '@Templates/DerictoriesComponents/TableMaster'
import {
  selectProjects,
  selectProjectsForm,
  selectProjectsColumns,
} from '@AppStore/Selectors/projects'
import { getProjects, iudProject } from '@AppStore/Actions/Derictories/Projects'
import { AppStateType } from '@AppStore/store'
import { IMapDispatchToPropsProject, IMapStateToPropsProject } from './types'
import { selectProjectFrame } from '@AppStore/Selectors/frames'
import {
  getUserFields,
  getUserFrames,
} from '@AppStore/Actions/UserData/UserData'

const ProjectsContainer: React.FC<
  IMapStateToPropsProject & IMapDispatchToPropsProject
> = React.memo(
  ({
    frame,
    getProjects,
    setTitleToNavbar,
    projects_data,
    iudProject,
    loading_data,
    forms,
    columns,
    getUserFields,
    getUserFrames,
  }) => {
    React.useEffect(() => {
      refreshData()
      document.title = 'Проекты'
      setTitleToNavbar('Проекты')
    }, [])
    const refreshData = () => {
      getUserFields()
      getUserFrames()
      getProjects()
    }
    return (
      <TableMasterController
        data={projects_data}
        iudDerictories={iudProject}
        loading_data={loading_data}
        frame={frame}
        forms={forms}
        columns={columns}
        visibleFiles={true}
        objTypeId={2}
        refreshData={refreshData}
      />
    )
  }
)
const mapStateToProps = (state: AppStateType): IMapStateToPropsProject => ({
  projects_data: selectProjects(state),
  loading_data: state.UI.loading_data,
  frame: selectProjectFrame(state),
  forms: selectProjectsForm(state),
  columns: selectProjectsColumns(state),
})
const mapDispatchToProps: IMapDispatchToPropsProject = {
  iudProject,
  getProjects,
  setTitleToNavbar,
  getUserFields,
  getUserFrames,
}
const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(ProjectsContainer)
