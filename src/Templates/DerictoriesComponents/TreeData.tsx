import * as React from 'react'
import { TreeView } from 'devextreme-react'
import DevExpress from 'devextreme'
import { TSortList } from '@AppStore/types/reducers/typesDayliReportReducer'
//@ts-ignore
import styled from 'styled-components'

type Tstate<I> = { currentItem: I }
type Tprops<I> = {
  items: I[]
  getData: (flag: string, id: number) => void
}
type Tevent = {
  component?: DevExpress.ui.dxTreeView
  element?: DevExpress.core.dxElement
  model?: any
  itemData?: TSortList
  itemElement?: DevExpress.core.dxElement
  itemIndex?: any
  event?: DevExpress.event
  node?: DevExpress.ui.dxTreeViewNode
}

export class TreeData extends React.Component<
  Tprops<TSortList>,
  Tstate<TSortList>
> {
  constructor(props: Tprops<TSortList>) {
    super(props)
    this.state = {
      currentItem: null,
    }
    this.selectItem = this.selectItem.bind(this)
  }
  render() {
    /* const { currentItem } = this.state */
    let { items } = this.props
    items = Array.isArray(items)
      ? items.map((i) => ({ ...i, expanded: true }))
      : [] 
    return (
      <Container className="form">
        <div>Фильтрация</div>
        <TreeView
          id="simple-treeview"
          items={items}
          dataStructure="plain"
          displayExpr="name"
          parentIdExpr="parentId"
          keyExpr="id"
          onItemClick={this.selectItem}
          noDataText="Нет данных для фильтрации"
          expandNodesRecursive={true}
        />
      </Container>
    )
  }

  selectItem(e: Tevent) {
    console.log(e.itemData)
    this.props.getData(e.itemData.type, e.itemData.objId)
    this.setState({
      currentItem: Object.assign({}, e.itemData),
    })
  }
}
//item
const Container = styled.div`
  background: #fff;
  padding: 10px;
  border-right: 1px solid #dfe6f0;
  border-top: 1px solid #dfe6f0;
`
