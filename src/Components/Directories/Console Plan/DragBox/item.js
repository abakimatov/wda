import * as React from "react";
import { DragSource } from "react-dnd";
import { TargetItem } from "../styledComponents";
const itemSource = {
  beginDrag(props) {
    console.log(`dragging`);
    return props.item;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    if(props.canDropped){
      return props.handleDrop(props.item, props.index);
    }
  },
};
function collect(connect, monitor) {
  return {
    connectDragSouce: connect.dragSource(),
    connectDragPreview: connect.dragSource(),
    isDragging: monitor.isDragging(), 
  };
}
class Item extends React.Component {
  render() {
    const { isDragging, connectDragSouce, item } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSouce(
      <div style={{ opacity }}>
        <TargetItem>{item.name}</TargetItem>
      </div>
    );
  }
}

export default DragSource("item", itemSource, collect)(Item);
