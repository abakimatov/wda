import * as React from 'react'
import DragSource from './item'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import DropTarget from './Target'
import {
  GridHeader,
  Toolbar,
  Title,
  WConsole,
  RightBar,
  Body,
  LeftBar,
  WDragTarget,
  Loader,
} from '../styledComponents'
import { TemplateButton } from '@Templates/Buttons'
import { CircularProgress } from '@material-ui/core'
import { DialogSelScenario } from './DialogSelScenario'
import TreeItem from './treeItem'
import { MarkUpSelectComponent } from '../../../../Templates/DerictoriesComponents/PageConstructor/Select/Select'
//
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      curOrgId: null,
      //
      targetIndex1: null,
      targetIndex1Name: null,
      //
      targetIndex2: null,
      targetIndex2Name: null,
      //
      orgs: [],
      scenarios: [],
      selScenario: {
        id: 'null',
      },
      workKinds: [],
      workObjects: [],
      templates: [],
      checkedItems: [],
      organizations: [],
      roots: [{ children: [{ children: [] }] }],
      ROOTS: [],
    }
    this.monitorTarget1Index = this.monitorTarget1Index.bind(this)
    this.monitorTarget2Index = this.monitorTarget2Index.bind(this)
    this.isHovered = this.isHovered.bind(this)
    this.isHoveredTarget2 = this.isHoveredTarget2.bind(this)
    //styles
    this.background = '#FFF'
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { defaultStructure, scenarios, curOrgId } = nextProps
    if (
      defaultStructure &&
      scenarios.length !== prevState.scenarios.length &&
      curOrgId !== prevState.curOrgId
    ) {
      const { orgs, templates } = defaultStructure
      let workObjects = []
      let workKinds = []
      let ROOTS = []
      orgs.map((org) => {
        ROOTS.push({ id: org.id, name: org.name })
        workObjects.push(
          ...org.objects.map((item) => ({
            ...item,
            children: [],
            parentName: org.name,
            parentId: org.id,
          }))
        )
        workKinds.push(...org.workKinds)
      })
      workKinds = workKinds
        .sort(function (a, b) {
          return a.id < b.id ? -1 : 1
        })
        .reduce(function (workKinds, el) {
          if (
            !workKinds.length ||
            workKinds[workKinds.length - 1].id != el.id
          ) {
            workKinds.push(el)
          }
          return workKinds
        }, [])
      return {
        orgs: orgs,
        templates: templates,
        scenarios: [...scenarios],
        workObjects: workObjects,
        workKinds: workKinds,
        curOrgId: curOrgId,
        ROOTS,
      }
    } else return null
  }
  componentDidMount() {}
  //methods
  isHovered = (hovered1, targetIndex1, targetIndex1Name) => {
    if (hovered1) {
      //console.log(`HOVERED 1 INDEX`, targetIndex1, targetIndex1Name);
      return this.monitorTarget1Index(targetIndex1, targetIndex1Name)
    }
  }
  isHoveredTarget2 = (hovered2, targetIndex2, targetIndex2Name) => {
    if (hovered2) {
      //console.log(`HOVERED 2 INDEX`, targetIndex2, targetIndex2Name);
      return this.monitorTarget2Index(targetIndex2, targetIndex2Name)
    }
  }
  monitorTarget1Index = (targetIndex1, targetIndex1Name) =>
    this.setState({ targetIndex1, targetIndex1Name })

  monitorTarget2Index = (targetIndex2, targetIndex2Name) =>
    this.setState({ targetIndex2, targetIndex2Name })
  //
  //dialog select scenario
  handleClose = (open) => this.setState({ open })
  onChangeSelScenario = (event) => {
    let selScenario = [...this.state.scenarios].filter(
      (scen) => scen.id === Number(event.target.value)
    )
    if (selScenario[0]) {
      this.setState({ selScenario: { ...selScenario[0] } })
    }
  }
  pushWorkObject = (simpleItem) => {
    const targetIndex1 = this.state.targetIndex1
    let ROOTS = [...this.state.ROOTS]
    //
    if (ROOTS[targetIndex1].children) {
      ROOTS[targetIndex1].children.push(simpleItem)
    } else {
      ROOTS[targetIndex1].children = [simpleItem]
    }
    let items = [...this.state.workObjects]
    const index = items.findIndex(
      (item) => Number(item.id) === Number(simpleItem.id)
    )
    items.splice(index, 1)
    return this.setState({ workObjects: items, ROOTS })
  }
  pushWorkKinds = (simpleItem) => {
    const targetIndex1 = this.state.targetIndex1
    const targetIndex2 = this.state.targetIndex2
    //
    let ROOTS = [...this.state.ROOTS]
    if (ROOTS[targetIndex1] && ROOTS[targetIndex1].children) {
      if (
        ROOTS[targetIndex1].children[targetIndex2] &&
        ROOTS[targetIndex1].children[targetIndex2].children
      ) {
        ROOTS[targetIndex1].children[targetIndex2].children.push(simpleItem)
        let items = [...this.state.workKinds]
        const index = items.findIndex(
          (item) => Number(item.id) === Number(simpleItem.id)
        )
        items.splice(index, 1)
        return this.setState({ workKinds: items, ROOTS })
      } else {
        if (
          ROOTS[targetIndex1].children &&
          ROOTS[targetIndex1].children[targetIndex2]
        ) {
          ROOTS[targetIndex1].children[targetIndex2].children = [simpleItem]
          let items = [...this.state.workKinds]
          const index = items.findIndex(
            (item) => Number(item.id) === Number(simpleItem.id)
          )
          items.splice(index, 1)
          return this.setState({ workKinds: items, ROOTS })
        }
      }
    }
  }
  pushTemplates = (simpleItem) => {
    const targetIndex1 = this.state.targetIndex1
    const targetIndex2 = this.state.targetIndex2
    const details = simpleItem.details
    //
    let ROOTS = [...this.state.ROOTS]
    if (
      ROOTS[targetIndex1].children &&
      ROOTS[targetIndex1].children[targetIndex2]
    ) {
      if (ROOTS[targetIndex1].children[targetIndex2].children) {
        details.forEach((el) =>
          ROOTS[targetIndex1].children[targetIndex2].children.push(el)
        )
      } else {
        ROOTS[targetIndex1].children[targetIndex2].children = details
      }
    }
    this.setState({ ROOTS })
  }
  setNewChildrenToWorkObject = (totalTime, children, index) => {
    let child = children[index]
    const targetIndex1 = this.state.targetIndex1
    const targetIndex2 = this.state.targetIndex2
    //
    let ROOTS = [...this.state.ROOTS]
    ROOTS[targetIndex1].totalTime = totalTime
    ROOTS[targetIndex1].children[targetIndex2].children[index] = child
    this.setState({ ROOTS })
  }
  //
  render() {
    const {
      templates,
      open,
      selScenario,
      scenarios,
      workKinds,
      workObjects,
    } = this.state
    const { loading } = this.props
    console.log(`STATE`, this.state)
    console.log(`ROOTS`, this.state.ROOTS)
    return (
      <GridHeader>
        <Toolbar>
          {/* data, name, ruName, value, onChange  => select params */}
          <section className="data-console-toolbar-item">
            <div className="data-console-toolbar-item-div">Сценарий</div>
            <MarkUpSelectComponent ruName="Сценарий" />
          </section>
          <section className="data-console-toolbar-item">
            <div className="data-console-toolbar-item-div">Заказчик</div>
            <MarkUpSelectComponent ruName="Заказчик" />
          </section>
          <section className="data-console-toolbar-item">
            <div className="data-console-toolbar-item-div">Объект</div>
            <MarkUpSelectComponent ruName="Объект" />
          </section>
        </Toolbar>
        <WConsole>
          <DndProvider backend={HTML5Backend}>
            <RightBar>
              <Title>Объекты работ</Title>
              <section className="board-1">
                {!loading &&
                  workObjects &&
                  workObjects.map((item, index) => (
                    <DragSource
                      canDropped={true}
                      key={index}
                      item={item}
                      handleDrop={(item) => this.pushWorkObject(item)}
                    />
                  ))}
                {loading && (
                  <Loader>
                    <div>
                      <CircularProgress size={30} color="secondary" />
                    </div>
                    <div>Загрузка объектов работ...</div>
                  </Loader>
                )}
              </section>
              <Title>Виды работ</Title>
              <section className="board-2">
                {/* {!loading &&
                  workKinds &&
                  workKinds.map((item, index) => (
                    <DragSource
                      key={index}
                      item={item}
                      handleDrop={(item) => this.pushWorkKinds(item)}
                    />
                  ))}
                {loading && (
                  <Loader>
                    <div>
                      <CircularProgress size={30} color="secondary" />
                    </div>
                    <div>Загрузка видов работ...</div>
                  </Loader>
                )} */}
                {
                  <TreeItem
                    dataSource={workKinds}
                    handleDrop={(item) => this.pushWorkKinds(item)}
                  />
                }
              </section>
            </RightBar>
            <Body>
              {this.state.ROOTS.map((root, index) => {
                const mapped = root && (
                  <DropTarget
                    className="board-drop-target-1"
                    //data
                    organization={root} //root.model
                    background={this.background}
                    dropTargetIndex1={index}
                    //methods
                    targetIndex1={this.state.targetIndex1}
                    targetIndex2={this.state.targetIndex2}
                    isHovered={this.isHovered}
                    isHoveredTarget2={this.isHoveredTarget2}
                    key={index}
                    setNewChildrenToWorkObject={this.setNewChildrenToWorkObject}
                  />
                )
                return mapped
              })}
            </Body>
            <LeftBar>
              <Title>Шаблоны строительства</Title>
              <section className="board-3">
                {!loading &&
                  templates &&
                  templates.map((item, index) => (
                    <DragSource
                      canDropped={true}
                      key={index}
                      item={item}
                      handleDrop={(item) => this.pushTemplates(item)}
                    />
                  ))}
                {loading && (
                  <Loader>
                    <div>
                      <CircularProgress size={30} color="secondary" />
                    </div>
                    <div>Загрузка шаблонов строительства...</div>
                  </Loader>
                )}
              </section>
            </LeftBar>
          </DndProvider>
        </WConsole>
        <DialogSelScenario
          open={open}
          handleClose={this.handleClose}
          selScenario={selScenario}
          scenarios={scenarios}
          onChangeSelScenario={this.onChangeSelScenario}
        />
      </GridHeader>
    )
  }
}

export default App
/* 
pushWorkObject = (simpleItem) => {
    const targetIndex1 = this.state.targetIndex1
    //const targetIndex1Name = this.state.targetIndex1Name;
    //
    let tree = new TreeModel({ childrenPropertyName: 'children' })
    //const targetIndex2 = this.state.targetIndex2;
    //const targetIndex2Name = this.state.targetIndex2Name;
    //
    let parentNode = this.state.roots[targetIndex1].first(function (node) {
      return node.model.id === simpleItem.parentId
    })
    if (parentNode) {
      parentNode.addChild(tree.parse(simpleItem))
      //
      let items = [...this.state.workObjects]
      const index = items.findIndex(
        (item) => Number(item.id) === Number(simpleItem.id)
      )
      items.splice(index, 1)
      return this.setState({ workObjects: items })
    } else if (!parentNode) {
      let root = tree.parse({
        id: simpleItem.parentId,
        name: `${simpleItem.parentName}`,
        children: [
          {
            ...simpleItem,
            children: [],
          },
        ],
      })
      const findNode = this.state.roots.filter(
        (rt) => rt.model.id === simpleItem.parentId
      )
      if (findNode.length === 0)
        this.setState((prevState) => ({
          roots: [...prevState.roots, root],
        }))
      let items = [...this.state.workObjects]
      const index = items.findIndex(
        (item) => Number(item.id) === Number(simpleItem.id)
      )
      items.splice(index, 1)
      return this.setState({ workObjects: items })
    }
  }
  pushWorkKinds = (simpleItem) => {
    let tree = new TreeModel({ childrenPropertyName: 'children' })
    const targetIndex1 = this.state.targetIndex1
    const targetIndex2 = this.state.targetIndex2
    let parentNode = this.state.roots[targetIndex1].children[targetIndex2]
    if (parentNode) {
      parentNode.addChild(tree.parse(simpleItem))
      let items = [...this.state.workKinds]
      const index = items.findIndex(
        (item) => Number(item.id) === Number(simpleItem.id)
      )
      items.splice(index, 1)
      return this.setState({ workKinds: items })
    }
  }
  pushTemplates = (simpleItem) => {
    let arr = [
      {
        entryTypeId: 1,
        id: 9,
        name: 'Подготовка к бурению122',
        parentId: null,
        timeEnd: new Date(Date.now()),
        timeStart: new Date(Date.now()),
      },
      {
        entryTypeId: 1,
        id: 10,
        name: 'Подготовка к бурению122',
        parentId: null,
        timeEnd: new Date(Date.now()),
        timeStart: new Date(Date.now()),
      },
    ]
    let tree = new TreeModel({ childrenPropertyName: 'children' })
    const targetIndex1 = this.state.targetIndex1
    const targetIndex2 = this.state.targetIndex2
    let parentNode = this.state.roots[targetIndex1].children[targetIndex2]
    if (parentNode  && simpleItem.workKinds ) {
      simpleItem.workKinds arr.forEach((element) =>
      parentNode.addChild(tree.parse(element))
      )
    }
  }
  setNewChildrenToWorkObject = (children, index) => {
    let child = children[index]
  }
*/
