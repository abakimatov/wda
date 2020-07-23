import React from 'react'
import styled from 'styled-components'
import { TreeView } from 'devextreme-react'
import DragSource from './item'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: null,
    }
    this.selectItem = this.selectItem.bind(this)
  }

  render() {
    const { currentItem } = this.state
    const { dataSource } = this.props
    return (
      <Container className="form">
        <TreeView
          id="simple-treeview"
          items={dataSource}
          dataStructure="plain"
          displayExpr="name"
          parentIdExpr="parentId"
          keyExpr="id"
          onItemClick={this.selectItem}
          itemRender={(item) => {
            return (
              <DragSource
                item={item}
                handleDrop={this.props.handleDrop}
                canDropped={item.entryTypeId !== 1}
              />
            )
          }}
        />
      </Container>
    )
  }

  selectItem(e) {
    this.setState({
      currentItem: Object.assign({}, e.itemData),
    })
  }
}

export default App
//styled
const Container = styled.div`
  .dx-treeview-item-content {
    color: black;
  }
`
