import React from 'react'

import PivotGrid, { FieldChooser, Export } from 'devextreme-react/pivot-grid'
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source'

export class PivotGridContainer extends React.Component {
  render() {
    const { data } = this.props
    return (
      <React.Fragment>
        <div className="long-title">
          <h3>Суточная сводка (форма 155-ГАЗ)</h3>
        </div>
        <PivotGrid
          id="/rep/day/summary"
          dataSource={dataSource(data)}
          allowSortingBySummary={true}
          allowSorting={true}
          allowFiltering={true}
          allowExpandAll={true}
          height={600}
          showBorders={true}
          showColumnFields={true}
          onContextMenuPreparing={this.onContextMenuPreparing}
          texts={{
            grandTotal: 'Общая сводка',
            total: 'Общая сводка',
            noData: 'Нет данных',
          }}
        >
          <Export enabled={true} fileName="/rep/day/summary" />
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
        caption: 'Скважина',
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
        dataField: 'customer',
        dataType: 'string',
        area: 'row',
        caption: 'Подрядчик',
        expanded: true,
        showGrandTotals: false,
        showTotals: false,
      },
      {
        dataField: 'pDriving',
        area: 'data',
        caption: 'Проект',
        expanded: true,
      },
      {
        dataField: 'fDriving',
        area: 'data',
        caption: 'Фактический забой, м',
        expanded: true,
      },
      {
        dataField: 'dayDriving',
        area: 'data',
        caption: 'Проходка сутки, м',
        expanded: true,
      },
      {
        dataField: 'pConstruction',
        dataType: 'string',
        area: 'data',
        caption: 'Конструкция скважины, проект',
      },
      {
        dataField: 'fConstruction',
        dataType: 'string',
        area: 'data',
        caption: 'Конструкция скважины, факт',
      },
      {
        dataField: 'knbk',
        dataType: 'string',
        area: 'data',
        caption: 'Компоновка бурильной колонны',
      },
      {
        dataField: 'load',
        dataType: 'string',
        area: 'data',
        caption: 'Нагрузка на долото, т',
      },
      {
        dataField: 'turns',
        dataType: 'string',
        area: 'data',
        caption: 'Число оборотов ротора, об/мин',
      },
      {
        dataField: 'feed',
        dataType: 'string',
        area: 'data',
        caption: 'Расход промывочной жидкости, л/с',
      },
      {
        dataField: 'pressure',
        dataType: 'string',
        area: 'data',
        caption: 'Давление, МПа',
      },
      {
        dataField: 'density',
        dataType: 'string',
        area: 'data',
        caption: 'Плотность, кг/м^3',
      },
      {
        dataField: 'viscosity',
        dataType: 'string',
        area: 'data',
        caption: 'Условная вязкость, с',
      },
      {
        dataField: 'filtration',
        dataType: 'string',
        area: 'data',
        caption: 'Фильтрация, см3/30 мин',
      },
      {
        dataField: 'sns',
        dataType: 'string',
        area: 'data',
        caption: 'СНС, дПа',
      },
      {
        dataField: 'ph',
        dataType: 'string',
        area: 'data',
        caption: 'pH',
      },
    ],
    store: data,
  })

/* 
  Скважина - object
Местоположение - deposit
Подрядчик - customer 
Буровая установка - drillingRig
Проект - pDriving
Фактический забой - fDriving
Проходка сутки - dayDriving
Конструкция скважины: проект - pConstruction, факт - fConstruction
Компоновка бурильной колонны - knbk
Нагрузка на долото - load
Число оборотов ротора - turns
Расход промывочной жидкости - feed
Давление - pressure
Плотность - density
Условная вязкость - viscosity
Фильтрация - filtration
СНС - sns
pH - ph
  */
