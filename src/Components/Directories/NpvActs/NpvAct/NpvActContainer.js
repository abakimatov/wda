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
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
//components
import { DevExpressTableGrid } from '@Templates/DerictoriesComponents/styledComponents'
import DetailsContainer from './Details/DetailsContainer'
import { Toolbar } from '@Templates/DerictoriesComponents/PageConstructor/Toolbar'
import { Header } from '@Templates/DerictoriesComponents/PageConstructor/Header'
import {
  WContent,
  LoadingDocument,
} from '@Templates/DerictoriesComponents/PageConstructor/styledComponents'
import { DrawerSimpleData } from '@Templates/DerictoriesComponents/PageConstructor/DrawerSimpleData'
import { LinearProgress } from '@material-ui/core'
import {
  getNpvActs,
  iudNpvAct,
} from '@AppStore/Actions/Derictories/NvpActs/NpvActs'
import { getNpvActKinds } from '@AppStore/Actions/Derictories/NvpActs/NpvActKinds'
import { getNpvActDetails } from '@AppStore/Actions/Derictories/NvpActs/NpvActDetails'
import {
  selectNpvActs,
  selectNpvActForm,
  selectNpvActKinds,
} from '@AppStore/Selectors/NpvActs'
import { getWorkObjects } from '@AppStore/Actions/Derictories/WorkObjects'
import { selectWorkObjects } from '@AppStore/Selectors/workObjects'

class NpvActContainer extends PureComponent {
  //STATE
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now()),
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
    const { data, npvId } = nextProps
    const items = data
    const itemId = npvId
    if (itemId === 0) {
      return { flag: 'I' }
    } else if (items && itemId !== 0) {
      const existDoc = items.find((item) => String(item.id) === String(itemId))
      if (existDoc && existDoc.id !== prevState.id) {
        nextProps.setTitleToNavbar(
          `Акт НПВ № ${existDoc.id} от ${existDoc.dateCreated}`
        )
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
    props.getNpvActKinds()
    props.getWorkObjects()
    props.setTitleToNavbar('Акт НПВ')
    document.title = 'Акт НПВ'
  }
  getMainData = (props) => {
    props.getNpvActs(null, props.npvId)
  }
  //SET STATE
  dispatchOnChange = (name, value) =>
    this.setState({ ...this.state, [name]: value })
  //IUD DOCUMENT METHODS
  functionResultPromise = (result, id) => {
    if (result) this.props.forwardHistory('npvact', id)
  }
  functionResultOnClose = (result, id) => {
    if (result) this.props.redirectToDataList()
  }
  iudFunction = (type) => {
    if (type === 'save') {
      return this.props.iudNpvAct(
        this.state.flag,
        this.state,
        this.functionResultPromise
      ) // third arg > functionBeforeResolve
    }
    if (type === 'holding') {
      return this.props.iudNpvAct(
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
  //CREATE CURRENT TABLE ON CLICK DRAWERS BUTTON
  render() {
    const { forms, isLoading, workObjects, npvActKinds } = this.props
    console.log(`state`, this.state)
    return (
      <DevExpressTableGrid>
        <section className="dev-exp-table-grid-item-1">
          <Toolbar
            saveData={() => this.iudFunction('save')}
            holdingData={() => this.iudFunction('holding')}
            visibles={{
              saveText: 'Провести и закрыть',
              save: true, 
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
              subData={{ workObjects, npvActKinds }}
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
  data: selectNpvActs(state),
  forms: selectNpvActForm(state),
  npvId: selectUrlParamsId(state),
  isLoading: selectLoadingData(state),
  workObjects: selectWorkObjects(state),
  npvActKinds: selectNpvActKinds(state),
})
//
const mapDispatchToProps = {
  setTitleToNavbar,
  getUserFields,
  getUserFrames,
  getNpvActs,
  getNpvActDetails,
  iudNpvAct,
  //sub data
  getNpvActKinds,
  getWorkObjects,
}
//
const Container = connect(mapStateToProps, mapDispatchToProps)(NpvActContainer)
const Exported = memo(() => {
  const history = useHistory()
  const forwardHistory = useCallback(
    (path, id) => history.push(`/${path}/${id}`),
    []
  )
  const redirectToDataList = () => history.push('/npvacts')
  return (
    <Container
      forwardHistory={forwardHistory}
      redirectToDataList={redirectToDataList}
    />
  )
})
export default Exported
