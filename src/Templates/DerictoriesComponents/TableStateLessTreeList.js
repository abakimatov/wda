import React, { memo, useState } from 'react'
import { connect } from 'react-redux'
import TreeList, {
  Column,
  Selection,
  Pager,
  Paging,
  SearchPanel,
  FilterRow,
} from 'devextreme-react/tree-list'

const TableStateLessTreeListWithConnected = memo(
  ({
    data,
    onToolbarPreparing,
    onSelectionChanged,
    columns,
    loadPanelBoolean,
    isConnected,
  }) => {
    const [selectedRowKey, setSelectedRowKey] = useState([0])
    const setSelectedRowKeyOnRowClick = (key) => setSelectedRowKey([key])
    const addSpecialColumnsToDefault = (columns) => {
      if (columns) {
        return [
          {
            id: 'code',
            dataField: 'id',
            dataType: 'number',
            caption: 'Код',
            width: '150px',
          },
          ...columns,
        ]
      }
    }
    return (
      <TreeList
        dataSource={data}
        autoExpandAll={true}
        dataStructure="plain"
        showRowLines={true}
        onContentReady={(event) =>
          event.component.selectRowsByIndexes(selectedRowKey)
        }
        showBorders={true}
        style={{ padding: 10 }}
        keyExpr="id"
        dataType="string"
        noDataText="данные отсутствуют"
        parentIdExpr="parentId"
        onToolbarPreparing={(event) => onToolbarPreparing(event, isConnected)}
        onRowClick={(event) => {
          setSelectedRowKeyOnRowClick(event.rowIndex)
          onSelectionChanged(event.data)
          let key = event.component.getKeyByRowIndex(event.rowIndex)
          let expanded = event.component.isRowExpanded(key)
          if (expanded) {
            event.component.collapseRow(key)
          } else {
            event.component.expandRow(key)
          }
        }}
      >
        <Selection mode="single" />
        <SearchPanel visible={true} placeholder={'Поиск...'} />
        <FilterRow visible={true} showAllText="Сортировка" />
        {addSpecialColumnsToDefault(columns).map((column) => (
          <Column
            falseText={column.falseText}
            trueText={column.trueText}
            key={column.id}
            dataField={column.dataField}
            dataType={column.dataType}
            caption={column.caption}
            format={column.format}
            width={column.width}
          />
        ))}
        <Selection mode="single" />
        <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} allowedPageSizes={[15, 20, 30]} />
      </TreeList>
    )
  }
)

const mapStateToProps = (state) => ({
  isConnected: state.UI.isConnected,
})
const TableStateLessTreeListWithConnectedComponent = connect(
  mapStateToProps,
  {}
)(TableStateLessTreeListWithConnected)

export const TableStateLessTreeList = TableStateLessTreeListWithConnectedComponent
