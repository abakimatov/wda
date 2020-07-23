import React from 'react'

import PivotGrid, { FieldChooser, Export } from 'devextreme-react/pivot-grid'
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source'

export class PivotGridContainer extends React.Component {
  render() {
    const { data } = this.props
    return (
      <React.Fragment>
        <div className="long-title">
          <h3>Баланс календарного времени</h3>
        </div>
        <PivotGrid
          id="/rep/calendar/time/balance"
          dataSource={dataSource(data)}
          allowSortingBySummary={true}
          allowSorting={true}
          allowFiltering={true}
          allowExpandAll={true}
          height={600}
          showBorders={true}
          texts={{
            grandTotal: 'Общая сводка',
            total: 'Общая сводка',
          }}
        >
          <Export enabled={true} fileName="/rep/calendar/time/balance" />
          <FieldChooser enabled={false} />
        </PivotGrid>
      </React.Fragment>
    )
  }
}

const dataSource = (data) =>
  new PivotGridDataSource({
    fields: [
      {
        dataField: 'object',
        dataType: 'string',
        area: 'row',
        caption: 'Объект',
        expanded: true,
      },
      {
        dataField: 'project',
        dataType: 'string',
        area: 'row',
        caption: 'Проект',
        expanded: true,
        showGrandTotals: false,
        showTotals: false,
      },
      {
        dataField: 'drillingRig',
        dataType: 'string',
        area: 'row',
        caption: 'Буровая установка',
        expanded: true,
        showGrandTotals: false,
        showTotals: false,
      },
      {
        dataField: 'days',
        dataType: 'number',
        area: 'data',
        caption: 'Кол-во дней',
        expanded: true,
        summaryType: 'sum',
      },
      {
        dataField: 'driving',
        dataType: 'number',
        area: 'data',
        caption: 'Проходка',
        expanded: true,
        summaryType: 'sum',
      },
      {
        dataField: 'hours',
        dataType: 'number',
        area: 'data',
        caption: 'Часы',
        expanded: true,
        summaryType: 'sum',
      },
    ],
    store: data,
  })
/* 
days: -0.16
drillingRig: "Буровая установка 122222"
driving: 3232
hours: -3.94
object: "789"
project: "123"
 */
