import React from 'react'
import dayjs from 'dayjs'

import Gantt, {
  Tasks,
  Dependencies,
  Resources,
  ResourceAssignments,
  Column,
  Editing,
  Toolbar,
  Item,
  Validation,
} from 'devextreme-react/gantt'

export class GanttContainer extends React.Component {
  render() {
    const {
      data: { periods },
    } = this.props
    //===
    const tasks = periods
    return (
      <Gantt
        taskListWidth={500}
        scaleType="months"
        height={700}
        taskTitlePosition="outside"
      >
        <Tasks dataSource={tasks} startExpr="startDate" endExpr="endDate" />

        <Toolbar>
          <Item name="undo" />
          <Item name="redo" />
          <Item name="separator" />
          <Item name="collapseAll" />
          <Item name="expandAll" />
          <Item name="separator" />
          <Item name="addTask" />
          <Item name="deleteTask" />
          <Item name="separator" />
          <Item name="zoomIn" />
          <Item name="zoomOut" />
        </Toolbar>

        {/* <Column dataField="title" caption="Вид работ" />
        <Column dataField="deposit" caption="Месторождение" />
        <Column dataField="startDate" caption="Дата начала" dataType="date" />
        <Column dataField="endDate" caption="Дата окончания" dataType="date" /> */}

        <Column dataField="title" caption="Объект" width={300} />
        <Column dataField="startDate" caption="Дата начала" dataType="date" />
        <Column dataField="endDate" caption="Дата окончания" dataType="date" />
        <Validation autoUpdateParentTasks={true} />
        {/* <Editing enabled={true} /> */}
      </Gantt>
    )
  }
}
