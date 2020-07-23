import React, { memo, useCallback, PureComponent } from 'react'
import { useHistory } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
//store
import { connect } from 'react-redux'
import { setTitleToNavbar } from '@AppStore/Actions/Ui.types'
import {
  getUserFields,
  getUserFrames,
} from '@AppStore/Actions/UserData/UserData'
import {
  getContracts,
  iudContract,
} from '@AppStore/Actions/Derictories/Contracts'
import { selectUrlParamsId, selectLoadingData } from '@AppStore/Selectors'
//components
import { DevExpressTableGrid } from '@Templates/DerictoriesComponents/styledComponents'
import { Toolbar } from '@Templates/DerictoriesComponents/PageConstructor/Toolbar'
import { Header } from '@Templates/DerictoriesComponents/PageConstructor/Header'
import { LoadingDocument } from '@Templates/DerictoriesComponents/PageConstructor/styledComponents'
import {
  selectContractsForm,
  selectContracts,
} from '@AppStore/Selectors/contracts'
import { getOrganizations } from '@AppStore/Actions/Derictories/Organizations'
import { selectOrganizations } from '@AppStore/Selectors/organizations'
import { TabsData } from '../TabsData'
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
    const { data, planId } = nextProps
    const items = data
    const itemId = planId
    if (itemId === 0) {
      return { flag: 'I' }
    } else if (items && itemId !== 0) {
      const existDoc = items.find((item) => String(item.id) === String(itemId))
      if (existDoc && existDoc.id !== prevState.id) {
        const date = dayjs(existDoc.dateCreated).format('DD.MM.YYYY hh:mm')
        nextProps.setTitleToNavbar(`Договор № ${existDoc.id} от ${date}`)
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
    props.getOrganizations()
    props.setTitleToNavbar('Договор')
    document.title = 'Договор'
  }
  getMainData = (props) => {
    props.getContracts(null, props.planId)
  }
  //SET STATE
  dispatchOnChange = (name, value) =>
    this.setState({ ...this.state, [name]: value })
  //IUD DOCUMENT METHODS
  functionResultPromise = (result, id) => {
    if (result) this.props.forwardHistory('contract', id)
  }
  functionResultOnClose = (result, id) => {
    if (result) this.props.redirectToDataList()
  }
  iudFunction = (type) => {
    if (type === 'save') {
      return this.props.iudContract(
        this.state.flag,
        this.state,
        this.functionResultPromise
      ) // third arg > functionBeforeResolve
    }
    if (type === 'holding') {
      return this.props.iudContract(
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
    const { forms, isLoading, organizations } = this.props
    console.log(`state`, this.state)
    return (
      <DevExpressTableGrid>
        <section className="dev-exp-table-grid-item-1">
          <Toolbar
            saveData={() => this.iudFunction('save')}
            holdingData={() => this.iudFunction('holding')}
          />
        </section>
        <section className="dev-exp-table-grid-item-2">
          {!isLoading && (
            <Header
              forms={forms}
              state={this.state}
              dispatchOnChange={this.dispatchOnChange}
              subData={{
                organizations,
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
  forms: selectContractsForm(state),
  data: selectContracts(state),
  planId: selectUrlParamsId(state),
  isLoading: selectLoadingData(state),
  organizations: selectOrganizations(state),
})
//
const mapDispatchToProps = {
  setTitleToNavbar,
  getUserFields,
  getUserFrames,
  getContracts,
  iudContract,
  getOrganizations,
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
  const redirectToDataList = () => history.push('/contracts')
  return (
    <Container
      forwardHistory={forwardHistory}
      redirectToDataList={redirectToDataList}
    />
  )
})
export default Exported
