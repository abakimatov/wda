import React, { memo, useState } from 'react'
import { connect } from 'react-redux'
import dayjs from 'dayjs'
import DataGrid, {
  Column,
  Pager,
  Paging,
  SearchPanel,
  FilterRow,
  GroupPanel,
  Summary,
  TotalItem,
  Scrolling,
  Grouping,
  Selection,
} from 'devextreme-react/data-grid'

const TableStateLessWithConnected = memo(
  ({
    data,
    onToolbarPreparing,
    DataRow,
    onSelectionChanged,
    columns,
    loadPanelBoolean,
    currentRow,
    isConnected,
    isSuperAdmin,
  }) => {
    const [selectedRowKey, setSelectedRowKey] = useState([0])
    const setSelectedRowKeyOnRowClick = (key) => setSelectedRowKey([key])
    //console.error(`isConnected TableStateLessWithConnected`, isConnected)
    const addSpecialColumnsToDefault = (columns) => {
      if (columns && Array.isArray(columns)) {
        return [
          /* {
            id: 'code',
            dataField: 'id',
            dataType: 'number',
            caption: 'Код',
            width: '150px',
          }, */
          ...columns,
        ]
      }
    }
    return (
      <DataGrid
        elementAttr={{
          id: 'gridContainer',
        }}
        onContentReady={(event) => {
          event.component.selectRowsByIndexes(selectedRowKey)
        }}
        dataSource={[...data]}
        showBorders={true}
        showRowLines={true}
        allowColumnResizing={true}
        keyExpr="id"
        noDataText="данные отсутствуют"
        onToolbarPreparing={(event) => onToolbarPreparing(event, isConnected)}
        loadPanel={{
          enabled: loadPanelBoolean,
          showIndicator: loadPanelBoolean,
          text: 'Загрузка данных',
          showPane: loadPanelBoolean,
        }}
        onRowClick={(event) => {
          setSelectedRowKeyOnRowClick(event.rowIndex)
          onSelectionChanged(event.data)
        }}
      >
        <Selection mode="single" /> {/* "multiple" | "none" */}
        {/* <Scrolling mode="virtual" />{' '} */}
        {/* or "virtual" | "infinite" | "standard" */}
        <SearchPanel visible={true} placeholder={'Поиск...'} />
        <FilterRow visible={true} showAllText="Сортировка" />
        {addSpecialColumnsToDefault(columns).map((column) => (
          <Column
            key={column.id}
            dataField={column.dataField}
            dataType={column.dataType}
            caption={column.caption}
            format={column.format}
            width={column.width}
            /* cellRender={(cell) => {
              if (column.dataType === 'date') {
                return dayjs(cell.data[column.dataField]).format('DD-MM-YYYY')
              } else if (column.dataType === 'datetime') {
                return dayjs(cell.data[column.dataField]).format('HH:mm')
              } else return cell.data[column.dataField]
            }} */
          />
        ))}
        {/* <GroupPanel
          visible={true}
          emptyPanelText={'Перетащите колонку для сортировки в это поле'}
        /> */}
        <Paging defaultPageSize={18} />
        <Pager />
        <Summary>
          <TotalItem
            column={'name'}
            summaryType="count"
            customizeText={(data) => `Всего: ${data.value} шт.`}
          />
        </Summary>
      </DataGrid>
    )
  }
)
const mapStateToProps = (state) => ({
  isConnected: state.UI.isConnected,
  isSuperAdmin: state.user.isSuperAdmin,
})
const TableStateLessWithConnectedComponent = connect(
  mapStateToProps,
  {}
)(TableStateLessWithConnected)

export const TableStateLess = TableStateLessWithConnectedComponent
