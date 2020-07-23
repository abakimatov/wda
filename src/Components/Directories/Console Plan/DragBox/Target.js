import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import Collapsible from 'react-collapsible'
import styled from 'styled-components'
import DownIcon from './down.png'
import DropTargetWorkObject from './TargetWorkObject'

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
      openPlan: false,
    }
    this.planExpandTriggerStyle = {
      display: 'flex',
      cursor: 'pointer',
      background: 'red',
      padding: '5px',
      color: '#FFF',
      border: '1px solid #FFF',
    }
  }
  componentDidUpdate() {
    const { isHovered, hovered, dropTargetIndex1, targetIndex1 } = this.props
    if (dropTargetIndex1 !== targetIndex1) {
      return isHovered(hovered, dropTargetIndex1, 'organizations')
    }
  }
  togglePlanExpand = (openPlan) => this.setState({ openPlan })
  render() {
    const {
      connectDropTarget,
      hovered,
      item,
      className,
      background,
      organization,
      isHoveredTarget2,
      targetIndex2,
    } = this.props
    const backgroundColor = hovered ? 'lightgreen' : background
    const { openPlan } = this.state
    return connectDropTarget(
      <div
        className={className}
        style={{ background: backgroundColor, height: 'auto' }}
      >
        {organization && (
          <Collapsible
            trigger={
              <Trigger>
                <SubGrid>
                  <div className="collapse-image">
                    <CollapsibleImg src={DownIcon} alt="" open={openPlan} />
                  </div>
                  <div>
                    <div>Организация:</div>
                    <div>{organization.name}</div>
                  </div>
                </SubGrid>
                <div>Начало работ:</div>
                <div>Окончание работ:</div>
                <div>Кол-во суток:</div>
                <div>Проходка:</div>
                <div>Владелец</div>
                <div>Проект</div> 
                <div>Месторождение</div>
              </Trigger>
            }
            triggerStyle={this.planExpandTriggerStyle}
            /* open={openPlan}
            handleTriggerClick={() => this.togglePlanExpand(!openPlan)} */
            transitionTime={200}
            onOpening={() => this.togglePlanExpand(true)}
            onClosing={() => this.togglePlanExpand(false)}
          >
            {organization &&
              organization.children &&
              organization.children.map((child, index) => {
                return (
                  <DropTargetWorkObject
                    dropTargetIndex2={index}
                    key={index}
                    child={child}
                    isHoveredTarget2={isHoveredTarget2}
                    targetIndex2={targetIndex2}
                    setNewChildrenToWorkObject={
                      this.props.setNewChildrenToWorkObject
                    }
                  />
                )
              })}
          </Collapsible>
        )}
      </div>
    )
  }
}

export default DropTarget('item', {}, collect)(Target)

const CollapsibleImg = styled.img`
  max-width: 20px;
  transform: ${(props) => (!props.open ? 'rotate(0deg)' : 'rotate(180deg)')};
  -webkit-transform: ${(props) =>
    props.open ? 'rotate(0deg)' : 'rotate(180deg)'};
`
const Trigger = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  width: 100%;
`
const SubGrid = styled.section`
  display: grid;
  grid-template-columns: 20px 1fr;
`
