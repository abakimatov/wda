import React, { memo, useCallback, PureComponent } from 'react'
import { useHistory } from 'react-router-dom'
import { TabsData } from '../TabsData'
//store
import { connect } from 'react-redux'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
import {
  getUserFields,
  getUserFrames,
} from '@AppStore/Actions/UserData/UserData'
import {
  getWorkObjects,
  iudWorkObject,
} from '@AppStore/Actions/Derictories/WorkObjects'
import { getDeposits } from '@AppStore/Actions/Derictories/Deposits'
import { getProjects } from '@AppStore/Actions/Derictories/Projects'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
import {
  selectWorkObjectForm,
  selectWorkObjects,
} from '@AppStore/Selectors/workObjects'
import { selectDeposits } from '@AppStore/Selectors/deposits'
import { selectProjects } from '@AppStore/Selectors/projects'
//components
import { DevExpressTableGrid } from '@Templates/DerictoriesComponents/styledComponents'
import { Toolbar } from '@Templates/DerictoriesComponents/PageConstructor/Toolbar'
import { Header } from '@Templates/DerictoriesComponents/PageConstructor/Header'
import { LoadingDocument } from '@Templates/DerictoriesComponents/PageConstructor/styledComponents'
import { LinearProgress, Divider } from '@material-ui/core'
import dayjs from 'dayjs'

class WorkObjectContainer extends PureComponent {
  //STATE
  constructor(props) {
    super(props)
    this.state = {
      flag: null,
      id: null,
    }
    //BINDS METHODS
    this.getGeneralData = this.getGeneralData.bind(this)
    this.getMainData = this.getMainData.bind(this)
    this.dispatchOnChange = this.dispatchOnChange.bind(this)
    this.functionResultPromise = this.functionResultPromise.bind(this)
    this.iudFunction = this.iudFunction.bind(this)
    this.iudFunctionWithRedirectToItemsPage = this.iudFunctionWithRedirectToItemsPage.bind(
      this
    )
  }
  //LIFE CYCLES
  componentDidMount() {
    this.getMainData(this.props)
    this.getGeneralData(this.props)
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { data, documentId } = nextProps
    const items = data
    const itemId = documentId
    if (itemId === 0) {
      return { flag: 'I' }
    } else if (items && itemId !== 0) {
      const existDoc = items.find((item) => String(item.id) === String(itemId))
      if (existDoc && existDoc.id !== prevState.id) {
        const date = dayjs(existDoc.dateCreated).format('DD.MM.YYYY hh:mm')
        nextProps.setTitleToNavbar(`Объект работ № ${existDoc.id} от ${date}`)
        return {
          ...existDoc,
          flag: 'U',
        }
      } else return null
    } else return null
  }
  //GET DATA METHODS
  getGeneralData = (props) => {
    props.getUserFields()
    props.getUserFrames()
    props.getProjects()
    props.getDeposits()
  }
  getMainData = (props) => {
    props.getWorkObjects(null, props.documentId)
  }
  //SET STATE
  dispatchOnChange = (name, value) =>
    this.setState({ ...this.state, [name]: value })
  //IUD DOCUMENT METHODS
  functionResultPromise = (result, id) => {
    if (result) this.props.forwardHistory('workobject', id)
  }
  functionResultOnClose = (result, id) => {
    if (result) this.props.redirectToDataList()
  }
  iudFunction = (type) => {
    if (type === 'save') {
      return this.props.iudWorkObject(
        this.state.flag,
        this.state,
        this.functionResultPromise
      ) // third arg > functionBeforeResolve
    }
    if (type === 'holding') {
      return this.props.iudWorkObject(
        this.state.flag,
        this.state,
        this.functionResultOnClose
      ) // third arg > functionBeforeResolve
    }
  }
  iudFunctionWithRedirectToItemsPage = (openAdd) => {
    if (openAdd && this.state.flag === 'I') {
      this.iudFunction('save')
    }
  }
  render() {
    const { forms, isLoading, projects, deposits } = this.props
    console.error(`forms`, forms)
    return (
      <DevExpressTableGrid>
        <section className="dev-exp-table-grid-item-1">
          <Toolbar
            saveData={() => this.iudFunction('save')}
            holdingData={() => this.iudFunction('holding')}
            visibles={{
              cancel: true,
            }}
          />
        </section>
        <section className="dev-exp-table-grid-item-2">
          {!isLoading && (
            <Header
              forms={forms}
              state={this.state}
              dispatchOnChange={this.dispatchOnChange}
              subData={{
                projects,
                deposits,
              }}
            />
          )}
          {isLoading && (
            <LoadingDocument>
              <div>Загрузка документа</div>
              <div>
                <LinearProgress color="secondary" size={10} />
              </div>
            </LoadingDocument>
          )}
        </section>
        <section className="dev-exp-table-grid-item-3">
          <TabsData
            id={this.state.id}
            iudFunctionWithRedirectToItemsPage={
              this.iudFunctionWithRedirectToItemsPage
            }
          />
        </section>
      </DevExpressTableGrid>
    )
  }
}
//
const mapStateToProps = (state) => ({
  projects: selectProjects(state),
  deposits: selectDeposits(state),
  forms: selectWorkObjectForm(state),
  data: selectWorkObjects(state),
  documentId: selectUrlParamsId(state),
  isLoading: selectLoadingData(state),
})
//
const mapDispatchToProps = {
  setTitleToNavbar,
  getUserFields,
  getUserFrames,
  getWorkObjects,
  iudWorkObject,
  getProjects,
  getDeposits,
}
//
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkObjectContainer)
const Exported = memo(() => {
  const history = useHistory()
  const forwardHistory = useCallback(
    (path, id) => history.push(`/${path}/${id}`),
    []
  )
  const redirectToDataList = () => history.push('/work_objects')
  return (
    <Container
      forwardHistory={forwardHistory}
      redirectToDataList={redirectToDataList}
    />
  )
})
export default Exported
