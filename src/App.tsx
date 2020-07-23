import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.light.css'
import * as React from 'react'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import ru from 'date-fns/locale/ru'
import {
  OrganizationsContainer,
  UsersContainer,
  ProjectsContainer,
  DepositsContainer,
  WorkKindsContainer,
  DrillingRigsContainer,
  WorkClassifierContainer,
  NomenclatureContainer,
  UnitContainer,
  NomenclatureTypesContainer,
  MortarTypesContainer,
  PlansContainer,
  PlanContainer,
  ContractsContainer,
  ContractContainer,
  WorkObjectsContainer,
  WorkObjectContainer,
  ScenariosContainer,
  ConsoleContainer,
  NvpCausesContainer,
  NpvActKindsContainer,
  NpvActsContainer,
  NpvActContainer,
  DailyReportsContainer,
  DayliReport,
  RepDepthDayGraphContainer,
  PerformersContainer,
} from './Lazyes/Lazyes'
//routes
//@ts-ignore
import ApiRoute from './Utils/ApiRoute'
//@ts-ignore
import AuthRoute from './Utils/AuthRoute'
//@ts-ignore
import LazyRoute from './Utils/LazyRoute'
import './App.css'
import { SET_URL_PARAMS } from './AppStore/types/actions/actionsDataReducer'
import { SET_USER, SET_CONNECTION_STATUS } from './AppStore/types'
//Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//State management
import { Provider } from 'react-redux'
import store from './AppStore/store'
import * as jwtDecode from 'jwt-decode'
//material
import LinearProgress from '@material-ui/core/LinearProgress'
//Styled components
//@ts-ignore
import { CustomFallback, AppGrid } from './styledComponents'
//Components
//@ts-ignore
import NavbarContainer from './Components/Navigation/NavbarContainer'
//@ts-ignore
import RegistrationGenKey from './Components/Registration/RegistrationGenKey'
//@ts-ignore
import RegistrationCheckKey from './Components/Registration/RegistrationCheckKey'
//@ts-ignore
import LoginContainer from './Components/Login/LoginContainer'
//@ts-ignore
import ProfileContainer from './Components/Profile/ProfileContainer'
//registration
//@ts-ignore
import RegistrationSelf from './Components/Registration/RegistrationSelf'
//@ts-ignore
//import RegistrationOrganization from './Components/Registration/RegistrationOrganization/RegistrationOrganization'
//@ts-ignore
import Invitation from './Components/Registration/Invitation' 
import Menu from './Z_Navigation/Menu'
import Header from 'Z_Navigation/Header'
import { RepCalendarTimeBalance } from 'Components/Directories/Reports/repCalendarTimeBalance/repCalendarTimeBalance'
import { RepCalendarTimeBalanceDiag } from 'Components/Directories/Reports/repCalendarTimeBalanceDiag/repCalendarTimeBalanceDiag'
import { RepConstructionTimeSchedule } from 'Components/Directories/Reports/repConstructionTimeSchedule/repConstructionTimeSchedule'
import { RepConstructionTimeScheduleShort } from 'Components/Directories/Reports/repConstructionTimeScheduleShort/repConstructionTimeScheduleShort'
import { RepDaySummary } from 'Components/Directories/Reports/repDaySummary/repDaySummary'
import { RegistrationOgranization } from 'Components/Registrations/RegistrationOgranization'

const token = localStorage.getItem('current_access')
const jwtDecodeVar: (token: string) => { exp: number } = jwtDecode
if (token) {
  if (Date.now() > jwtDecodeVar(token).exp * 1000) {
    store.dispatch({ type: SET_USER, payload: false })
    localStorage.removeItem('current_access')
  } else {
    store.dispatch({ type: SET_USER, payload: true })
  }
}

export class App extends React.Component {
  componentDidMount() {
    registerLocale('RU', ru)
    setDefaultLocale('RU')
    this.handleConnectionChange()
    window.addEventListener('online', this.handleConnectionChange)
    window.addEventListener('offline', this.handleConnectionChange)
  }
  componentWillUnmount() {
    window.removeEventListener('online', this.handleConnectionChange)
    window.removeEventListener('offline', this.handleConnectionChange)
  }
  handleConnectionChange = () => {
    const condition = window.navigator.onLine ? 'online' : 'offline'
    if (condition === 'online') {
      const webPing = setInterval(() => {
        fetch('google.com', {
          mode: 'no-cors',
        })
          .then(() => {
            store.dispatch({ type: SET_CONNECTION_STATUS, payload: true })
            return clearInterval(webPing)
          })
          .catch(() =>
            store.dispatch({ type: SET_CONNECTION_STATUS, payload: false })
          )
      }, 1000)
      return
    }
    return store.dispatch({ type: SET_CONNECTION_STATUS, payload: false })
  }
  _fallback = (text: string) => (
    <CustomFallback>
      <div>Загрузка {text}...</div>
      <div>
        <LinearProgress color="secondary" />
      </div>
    </CustomFallback>
  )
  render() {
    return (
      <AppGrid>
        <Provider store={store}>
          <Router>
            {/* <NavbarContainer /> */}
            <Menu />
            <section className="data-app-container">
              <Header />
              <section className="data-app-content">
                <Switch>
                  <ApiRoute
                    exact={true}
                    path="/"
                    component={ProfileContainer}
                  />
                  <AuthRoute exact path="/login" component={LoginContainer} />
                  <ApiRoute
                    exact={true}
                    path="/genregkey"
                    component={RegistrationGenKey}
                  />
                  {/* Reports */}
                  <LazyRoute
                    exact
                    path="/rep/day/summary"
                    component={RepDaySummary}
                    Fallback={() =>
                      this._fallback('Суточная сводка (форма 155-ГАЗ)')
                    }
                  />
                  <LazyRoute
                    exact
                    path="/rep/depth/day/graph"
                    component={RepDepthDayGraphContainer}
                    Fallback={() => this._fallback('Глубина-день')}
                  />
                  <LazyRoute
                    exact
                    path="/rep/calendar/time/balance"
                    component={RepCalendarTimeBalance}
                    Fallback={() =>
                      this._fallback('Баланс календарного времени')
                    }
                  />
                  <LazyRoute
                    exact
                    path="/rep/calendar/time/balance/diag"
                    component={RepCalendarTimeBalanceDiag}
                    Fallback={() =>
                      this._fallback('Баланс календарного времени(диаграмма)')
                    }
                  />
                  <LazyRoute
                    exact
                    path="/rep/construction/time/schedule"
                    component={RepConstructionTimeSchedule}
                    Fallback={() =>
                      this._fallback(
                        'План-график строительства (по видам работ)'
                      )
                    }
                  />
                  <LazyRoute
                    exact
                    path="/rep/construction/time/schedule/short"
                    component={RepConstructionTimeScheduleShort}
                    Fallback={() =>
                      this._fallback('План-график строительства (краткий)')
                    }
                  />
                  {/* RepConstructionTimeSchedule */}
                  {/* RepCalendarTimeBalanceDiag */}
                  {/* Derictories */}
                  <LazyRoute
                    exact
                    path="/npvactkinds"
                    component={NpvActKindsContainer}
                    Fallback={() => this._fallback('видов актов')}
                  />
                  <LazyRoute
                    exact
                    path="/npvcauses"
                    component={NvpCausesContainer}
                    Fallback={() => this._fallback('причин НПВ')}
                  />
                  <LazyRoute
                    exact
                    path="/console"
                    component={ConsoleContainer}
                    Fallback={() =>
                      this._fallback(
                        'консоли формирования планов строительства'
                      )
                    }
                  />
                  <LazyRoute
                    exact
                    path="/organizations"
                    component={OrganizationsContainer}
                    Fallback={() => this._fallback('организаций')}
                  />
                  <LazyRoute
                    exact
                    path="/users"
                    component={UsersContainer}
                    Fallback={() => this._fallback('пользователей')}
                  />
                  <LazyRoute
                    exact
                    path="/projects"
                    component={ProjectsContainer}
                    Fallback={() => this._fallback('проектов')}
                  />
                  <LazyRoute
                    exact
                    path="/deposits"
                    component={DepositsContainer}
                    Fallback={() => this._fallback('месторождений')}
                  />
                  <LazyRoute
                    exact
                    path="/work_kinds"
                    component={WorkKindsContainer}
                    Fallback={() => this._fallback('видов работ')}
                  />
                  <LazyRoute
                    exact
                    path="/drilling_rigs"
                    component={DrillingRigsContainer}
                    Fallback={() => this._fallback('буровых установок')}
                  />
                  <LazyRoute
                    exact
                    path="/work_classifier"
                    component={WorkClassifierContainer}
                    Fallback={() => this._fallback('классификатора')}
                  />
                  <LazyRoute
                    exact
                    path="/nomenclature"
                    component={NomenclatureContainer}
                    Fallback={() => this._fallback('номенклатуры')}
                  />
                  <LazyRoute
                    exact
                    path="/units"
                    component={UnitContainer}
                    Fallback={() => this._fallback('единиц измерения')}
                  />
                  <LazyRoute
                    exact
                    path="/nomenclature_types"
                    component={NomenclatureTypesContainer}
                    Fallback={() => this._fallback('типов номенклатуры')}
                  />
                  <LazyRoute
                    exact
                    path="/mortar_types"
                    component={MortarTypesContainer}
                    Fallback={() => this._fallback('типов буровых растворов')}
                  />
                  {/*  DAYLI REPORTS */}
                  <LazyRoute
                    exact
                    path="/daily_reports"
                    component={DailyReportsContainer}
                    Fallback={() => this._fallback('суточных рапортов')}
                  />
                  <Route
                    exact
                    path="/daylireport/:id"
                    render={(props) => {
                      const {
                        match: { params },
                      } = props
                      store.dispatch({
                        type: SET_URL_PARAMS,
                        payload: { ...params, item: 'daylireport' },
                      })
                      return (
                        <LazyRoute
                          exact
                          path="/daylireport"
                          component={DayliReport}
                          Fallback={() => this._fallback('Суточного рапорта')}
                        />
                      )
                    }}
                  />
                  {/* NPV ACTS */}
                  <LazyRoute
                    exact
                    path="/npvacts"
                    component={NpvActsContainer}
                    Fallback={() => this._fallback('актов НПВ')}
                  />
                  <Route
                    exact
                    path="/npvact/:id"
                    render={(props) => {
                      const {
                        match: { params },
                      } = props
                      store.dispatch({
                        type: SET_URL_PARAMS,
                        payload: { ...params, item: 'npvact' },
                      })
                      return (
                        <LazyRoute
                          exact
                          path="/npvact"
                          component={NpvActContainer}
                          Fallback={() => this._fallback('акта НПВ')}
                        />
                      )
                    }}
                  />
                  {/* PLANS */}
                  <LazyRoute
                    exact
                    path="/plans"
                    component={PlansContainer}
                    Fallback={() => this._fallback('планов')}
                  />
                  <Route
                    exact
                    path="/plan/:id"
                    render={(props) => {
                      const {
                        match: { params },
                      } = props
                      store.dispatch({
                        type: SET_URL_PARAMS,
                        payload: { ...params, item: 'plan' },
                      })
                      return (
                        <LazyRoute
                          exact
                          path="/plan"
                          component={PlanContainer}
                          Fallback={() => this._fallback('плана')}
                        />
                      )
                    }}
                  />
                  {/* CONTRACTS */}
                  <LazyRoute
                    exact
                    path="/contracts"
                    component={ContractsContainer}
                    Fallback={() => this._fallback('договоров')}
                  />
                  <Route
                    exact
                    path="/contract/:id"
                    render={(props) => {
                      const {
                        match: { params },
                      } = props
                      store.dispatch({
                        type: SET_URL_PARAMS,
                        payload: { ...params, item: 'contract' },
                      })
                      return (
                        <LazyRoute
                          exact
                          path="/contract"
                          component={ContractContainer}
                          Fallback={() => this._fallback('договора')}
                        />
                      )
                    }}
                  />
                  {/* WORK OBJECTS */}
                  <LazyRoute
                    exact
                    path="/work_objects"
                    component={WorkObjectsContainer}
                    Fallback={() => this._fallback('объектов работ')}
                  />
                  <Route
                    exact
                    path="/workobject/:id"
                    render={(props) => {
                      const {
                        match: { params },
                      } = props
                      store.dispatch({
                        type: SET_URL_PARAMS,
                        payload: { ...params, item: 'workobject' },
                      })
                      return (
                        <LazyRoute
                          exact
                          path="/workobject"
                          component={WorkObjectContainer}
                          Fallback={() => this._fallback('объекта работ')}
                        />
                      )
                    }}
                  />
                  {/* SCENARIOS */}
                  <LazyRoute
                    exact
                    path="/scenarios"
                    component={ScenariosContainer}
                    Fallback={() => this._fallback('сценариев')}
                  />
                  {/*  */}
                  {/* PERFORMENS */}
                  <LazyRoute
                    exact
                    path="/performens"
                    component={PerformersContainer}
                    Fallback={() => this._fallback('Исполнителей')}
                  />
                  <Route
                    exact
                    path="/registration/link/:param"
                    component={RegistrationCheckKey}
                  />
                  <Route
                    exact
                    path="/register_organization"
                    component={RegistrationOgranization}
                  />
                  <Route
                    exact
                    path="/registration/self"
                    component={RegistrationSelf}
                  />
                  <ApiRoute exact="/invitation" component={Invitation} />
                </Switch>
              </section>
            </section>
          </Router>
        </Provider>
      </AppGrid>
    )
  }
}
