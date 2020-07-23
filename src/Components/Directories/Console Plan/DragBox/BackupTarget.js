import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { TargetButton } from "../styledComponents";
import { TableMasterTreeList } from "@Templates/DerictoriesComponents/TestTreeDrag";

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  };
}
class Target extends Component {
  componentDidUpdate() {
    const { isHovered, hovered, index, targetIndex } = this.props;
    if (index !== targetIndex) {
      return isHovered(hovered, index);
    }
  }
  render() {
    const {
      connectDropTarget,
      hovered,
      item,
      className,
      background,
      nameData,
      workKinds,
      workObject,
      templates,
    } = this.props;
    const backgroundColor = hovered ? "lightgreen" : background;
    return connectDropTarget(
      <div
        className={className}
        style={{ background: backgroundColor, height: 50 }}
      >
        {/* {checkedItems &&
          Array.isArray(checkedItems) &&
          checkedItems.map((checkedItem, index) => (
            <div key={index}>
              {nameData} {checkedItem.name}
            </div>
          ))} */}
        {/*  */}
        {/* {workObject &&
          Array.isArray(workObject) &&
          workObject.map((checkedItem, index) => (
            <div key={index}>
              {"Объект работ:"} {checkedItem.name}
            </div>
          ))} */}
        {/* {workKinds &&
          Array.isArray(workKinds) &&
          workKinds.map((checkedItem, index) => (
            <div key={index}>
              {"Вид работ:"} {checkedItem.name}
            </div>
          ))} */}
        {/* {templates &&
          Array.isArray(templates) &&
          templates.map((checkedItem, index) => (
            <div key={index}>
              {"Шаблон строительства:"} {checkedItem.name}
            </div>
          ))} */}
        <TableMasterTreeList
          data={templates}
          iudDerictories={() => {
            return;
          }}
          loading_data={false}
          frame={{ canEdit: true }}
          forms={{}}
          columns={[]}
        />
      </div>
    );
  }
}

export default DropTarget("item", {}, collect)(Target);
