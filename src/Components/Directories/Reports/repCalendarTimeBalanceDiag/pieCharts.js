import React from 'react'

import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
} from 'devextreme-react/pie-chart'

export class PieChartContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { title, calendarTimeBalanceDiag } = this.props
    return (
      <PieChart
        id="pie"
        dataSource={calendarTimeBalanceDiag}
        palette="Bright"
        //title={title}
      >
        <Series argumentField="name" valueField="percent">
          <Label visible={true} customizeText={this.customizeText}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Size width={800} />
        <Export enabled={true} />
      </PieChart>
    )
  }
  customizeText = (arg) => {
    return `${arg.valueText}%`
    // (${arg.percentText})
  }
}
