import React from 'react'

import PivotGrid, { FieldChooser, Export } from 'devextreme-react/pivot-grid'
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source'

export class PivotGridContainer extends React.Component {
  render() {
    const { data } = this.props
    return (
      <React.Fragment>
        <div className="long-title">
          <h3>План-график строительства (краткий)</h3>
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
          showColumnGrandTotals={false}
          texts={{
            grandTotal: 'Общая сводка',
            total: 'Общая сводка',
            noData: 'Нет данных',
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
        dataField: 'executor',
        dataType: 'string',
        area: 'row',
        caption: 'Владелец',
        expanded: true,
      },
      {
        dataField: 'deposit',
        dataType: 'string',
        area: 'row',
        caption: 'Месторождение',
        expanded: true,
        showGrandTotals: false,
        showTotals: false,
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
        dataField: 'year',
        dataType: 'number',
        area: 'column',
        caption: 'Год',
        expanded: true,
        showGrandTotals: false,
        selector: (data) => `Год ${data.year}`,
      },
      {
        dataField: 'month',
        dataType: 'number',
        area: 'column',
        caption: 'Месяц',
        expanded: true,
        showTotals: false,
        selector: (data) => `Месяц ${data.month}`,
      },
      {
        dataField: 'driving',
        dataType: 'number',
        area: 'data',
        caption: 'Проходка',
      },
    ],
    store: data,
  })
