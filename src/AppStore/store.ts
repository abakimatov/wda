import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './Reducers/userReducer'
import uiReducer from './Reducers/uiReducer'
import dataReducer from './Reducers/dataReducer'
import { formsReducer } from './Reducers/FormsReducers/formsReducer'
import { columnsReducer } from './Reducers/ColumnsReducers/columnsReducer'
import { dayliReportReducer } from './Reducers/dayliReportReducer'
import { npvActsReducer } from './Reducers/NpVActsReducer'
import { filesReducer } from './Reducers/filesReducer'
import { reportsReducer } from './Reducers/reportsReducer'
import { performersReducer } from './Reducers/perfoments/performersReducer'
import { organizationsReducer } from './Reducers/organizations/organizationsReducer'
import { drillingRigsReducer } from './Reducers/drillingRigs/drillingRigsReducer'
import { workClassifierReducer } from './Reducers/workClassifier/workClassifierReducer'
import { workKindsReducer } from './Reducers/workKinds/workKindsReducer'
import { contractsReducer } from './Reducers/contracts/contractsReducer'

const initialState = {}

const middleware = [thunk]

const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  UI: uiReducer,
  forms: formsReducer,
  columns: columnsReducer,
  dayliReport: dayliReportReducer,
  npvActs: npvActsReducer,
  files: filesReducer,
  reports: reportsReducer,
  performers: performersReducer,
  organizations: organizationsReducer,
  drillingRigs: drillingRigsReducer,
  workClassifier: workClassifierReducer,
  workKinds: workKindsReducer,
  contracts: contractsReducer,
})
//@ts-ignore
export type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
//@ts-ignore
window.__store__ = store

export default store
