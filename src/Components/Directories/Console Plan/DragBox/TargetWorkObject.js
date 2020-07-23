import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import Collapsible from 'react-collapsible'
import styled from 'styled-components'
import DownIcon from './down.png'
import { MarkUpDatePickerComponent } from '../../../../Templates/DerictoriesComponents/PageConstructor/DatePicker/DatePicker'

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}
class Target extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openWorkObject: false,
      disabled: false, // disabled work objects total time
      children: [],
      startTime: new Date(Date.now()),
      endTime: new Date(Date.now()),
      totalTime: 0,
      totalDriving: 0,
    }
    this.workObjectExpandTriggerStyle = {
      display: 'flex',
      cursor: 'pointer',
      background: '#3e6db6',
      color: '#FFF',
      border: '1px solid #FFF',
      padding: '5px',
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { child } = nextProps
    if (child.children && child.children.length !== prevState.children.length) {
      const children = child.children.map((d, index) => ({
        ...d,
        timeStart: new Date(Date.now()),
        timeEnd: new Date(Date.now()),
      }))
      return {
        children,
      }
    } else return null
  }
  componentDidUpdate() {
    const {
      isHoveredTarget2,
      hovered,
      dropTargetIndex2,
      targetIndex2,
    } = this.props
    if (dropTargetIndex2 !== targetIndex2) {
      return isHoveredTarget2(hovered, dropTargetIndex2, 'workObjects')
    }
  }
  toggleWorkObjectExpand = (openWorkObject) => this.setState({ openWorkObject })
  onChangeTime = async (event, name) => {
    const date = event
    //
    if (name === 'startTime') {
      const endTime = this.state.endTime
      const totalTime = this.timeCalc(endTime, date)
      this.setState({ startTime: date, totalTime })
    }
    if (name === 'endTime') {
      const startTime = this.state.startTime
      const totalTime = this.timeCalc(date, startTime)
      this.setState({ endTime: date, totalTime })
    }
  }
  onChangeDriving = (event, index) => {
    const children = [...this.state.children]
    const driving = event.target.value
    children[index].driving = driving
    //
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    let totalDriving = children.map((x) => parseInt(x.driving)).reduce(reducer)
    //
    totalDriving = !isNaN(totalDriving) ? totalDriving : 0
    this.setState({ children, totalDriving })
  }
  onChangeTimeStart = (event, index) => {
    const children = [...this.state.children]
    const startTime = event
    children[index].timeStart = startTime
    //
    const min = children.reduce((prev, current) => {
      return prev.timeStart <= startTime ? prev : current
    })
    //
    const endTime = this.state.endTime
    const totalTime = this.timeCalc(endTime, startTime)
    //
    this.setState({
      children,
      startTime: min.timeStart,
      totalTime,
      disabled: true,
    })
    //
    this.props.setNewChildrenToWorkObject(totalTime, children, index)
    //
  }
  onChangeTimeEnd = (event, index) => {
    const children = [...this.state.children]
    const endTime = event
    children[index].timeEnd = endTime
    //
    const max = children.reduce((prev, current) => {
      return prev.timeEnd >= endTime ? prev : current
    })
    //
    const startTime = this.state.startTime
    const totalTime = this.timeCalc(endTime, startTime)
    //
    this.setState({ children, endTime: max.timeEnd, totalTime, disabled: true })
    //
    this.props.setNewChildrenToWorkObject(totalTime, children, index)
    //
  }
  timeCalc = (dateMax, dateMin) => {
    const calc = (distance) => {
      const day = 1000 * 3600 * 24
      const Difference_In_Days = distance / day
      return Difference_In_Days
    }
    return calc(dateMax.getTime() - dateMin.getTime())
  }
  markUpWorkKinds = (children, disabled) => {
    return (
      Array.isArray(children) &&
      children.map((item, index) => {
        if (item.name) {
          const number = `${index + 1}.`
          return (
            <WorkKindGrid key={index}>
              <WorkKindSubGridImg>
                <div>{number}</div>
                <div>
                  <div>Вид работ:</div>
                  <div>{item.name}</div>
                </div>
              </WorkKindSubGridImg>
              <div className="data-collapse-datepicker">
                {item.timeStart && (
                  <MarkUpDatePickerComponent
                    disabled={false}
                    value={item.timeStart}
                    onChange={(date) => {
                      this.onChangeTimeStart(date, index)
                    }}
                  />
                )}
              </div>
              <div className="data-collapse-datepicker">
                {item.timeEnd && (
                  <MarkUpDatePickerComponent
                    disabled={false}
                    value={item.timeEnd}
                    onChange={(date) => {
                      this.onChangeTimeEnd(date, index)
                    }}
                  />
                )}
              </div>
              <div></div>
              <div className="data-collapse-datepicker">
                <input
                  value={item.driving}
                  type="number"
                  onChange={(event) => this.onChangeDriving(event, index)}
                />
              </div>
              <div></div>
              <div></div>
              <div></div>
            </WorkKindGrid>
          )
        }
      })
    )
  }
  render() {
    const { connectDropTarget, hovered, item, className, child } = this.props
    const backgroundColor = hovered ? 'lightgreen' : 'pink'
    const {
      openWorkObject,
      children,
      startTime,
      endTime,
      totalTime,
      disabled,
      totalDriving,
    } = this.state
    console.log(`target workobject state`, this.state)
    return connectDropTarget(
      <div
        className={className}
        style={{ background: backgroundColor, height: 'auto' }}
      >
        <Collapsible
          trigger={
            <Trigger>
              <SubGridImg>
                <div className="collapse-image">
                  <CollapsibleImg src={DownIcon} alt="" open={openWorkObject} />
                </div>
                <div>
                  <div>Объект работ:</div>
                  <div>{child.name}</div>
                </div>
              </SubGridImg>
              <div className="data-collapse-datepicker">
                <MarkUpDatePickerComponent
                  value={startTime}
                  onChange={(date) => this.onChangeTime(date, 'startTime')}
                  disabled={disabled}
                />
              </div>
              <div className="data-collapse-datepicker">
                <MarkUpDatePickerComponent
                  value={endTime}
                  onChange={(date) => this.onChangeTime(date, 'endTime')}
                  disabled={disabled}
                />
              </div>
              <div className="data-collapse-datepicker">
                {Number(totalTime).toFixed(2)}
              </div>
              <div>{totalDriving}</div>
              <div>{child.owner}</div>
              <div>{child.project}</div>
              <div>{child.deposit}</div>
            </Trigger>
          }
          triggerStyle={this.workObjectExpandTriggerStyle}
          /* open={openWorkObject}
          handleTriggerClick={() =>
            this.toggleWorkObjectExpand(!openWorkObject)
          } */
          transitionTime={200}
          onOpening={() => this.toggleWorkObjectExpand(true)}
          onClosing={() => this.toggleWorkObjectExpand(false)}
        >
          {/* work kinds === child.children */}
          {children && this.markUpWorkKinds(children, disabled)}
        </Collapsible>
      </div>
    )
  }
}
export default DropTarget('item', {}, collect)(Target)
//
const CollapsibleImg = styled.img`
  max-width: 20px;
  transform: ${(props) => (!props.open ? 'rotate(0deg)' : 'rotate(180deg)')};
  -webkit-transform: ${(props) =>
    props.open ? 'rotate(0deg)' : 'rotate(180deg)'};
`
const Trigger = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  .data-collapse-datepicker {
    align-self: center;
  }
`
const SubGridImg = styled.section`
  display: grid;
  grid-template-columns: 20px 1fr;
  padding-left: 10px;
`
const WorkKindGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  border: 1px solid #fff;
  padding: 1px;
  grid-gap: 5px;
  .data-collapse-datepicker {
    align-self: center;
  }
`
const WorkKindSubGridImg = styled.section`
  display: grid;
  grid-template-columns: 20px 1fr;
  padding-left: 30px;
`
