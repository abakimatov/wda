import * as React from 'react'
//@ts-ignore
import dayjs from 'dayjs'
//@ts-ignore
import styles from './styles.module.scss'
import { TDepthDayGraph } from '@AppStore/types/reducers/typesReportsReducer'
import SelectBox from 'devextreme-react/select-box'
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  CommonAxisSettings,
  Grid,
  Export,
  Legend,
  Margin,
  Tooltip,
  Label,
  Format,
} from 'devextreme-react/chart'
//@ts-ignore
import { architectureSources } from './data'
import DevExpress from 'devextreme'

type TEvent = {
  component?: DevExpress.ui.dxSelectBox
  element?: DevExpress.core.dxElement
  model?: any
  value?: any
  previousValue?: any
  jQueryEvent?: JQueryEventObject
  event?: DevExpress.event
}
type TProps = {
  DepthDayGraph: TDepthDayGraph
}
type TState = { type: string; types: string[] }

export class CustChart extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props)
    this.state = {
      type: 'spline',
      types: ['spline', 'stackedspline', 'fullstackedspline'],
    }
    this.handleChange = this.handleChange.bind(this)
  }
  customizeTooltip(pointInfo: any) {
    return {
      text: `${pointInfo.argumentText}<br/>${pointInfo.valueText}`,
    }
  }
  legendCustomizeText(pointInfo: any, data: any) {
    return console.log(`pointInfo`, pointInfo, `data`, data)
  }
  render() {
    const {
      DepthDayGraph: { drivingList },
    } = this.props
    const dataSource = drivingList ? drivingList.reverse() : []
    return (
      <section className={styles.rootChart}>
        <Chart
          palette="Violet"
          dataSource={dataSource}
          //title="Architecture Share Over Time (Count)"
        >
          <CommonSeriesSettings argumentField="date" type={this.state.type} />
          <CommonAxisSettings inverted={true}>
            <Grid visible={true} />
          </CommonAxisSettings>
          {architectureSources.map(function (item: any) {
            return (
              <Series
                key={item.value}
                valueField={item.value}
                name={item.name}
                color={item.color}
              />
            )
          })}
          <Margin bottom={20} />
          <ArgumentAxis
            allowDecimals={false}
            axisDivisionFactor={60}
            discreteAxisDivisionMode="crossLabels"
            /* inverted={true} */
          >
            <Label>
              <Format type="decimal" />
            </Label>
          </ArgumentAxis>
          <Legend verticalAlignment="bottom" horizontalAlignment="center" />
          <Export enabled={true} />
          <Tooltip enabled={true} customizeTooltip={this.customizeTooltip} />
        </Chart>
        {/* <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Series Type </span>
            <SelectBox
              dataSource={this.state.types}
              value={this.state.type}
              onValueChanged={this.handleChange}
            />
          </div>
        </div> */}
      </section>
    )
  }

  handleChange(e: TEvent) {
    this.setState({ type: e.value })
  }
}
