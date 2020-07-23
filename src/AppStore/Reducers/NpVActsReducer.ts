import {
  NPV_ACTS_REDUCER_ACTIONS,
  SET_NPV_ACT_DETAILS,
  SET_NPV_CAUSES,
  SET_NPV_ACT_KINDS,
  SET_NPV_ACTS,
  SET_NPV_ACTS_FILTER_LIST,
} from '@AppStore/types/actions/actionsNpvActsReducer'
import { TNpvActsReducer } from '@AppStore/types/reducers/typesNpvActsReducer'

type InitialState = TNpvActsReducer

const initialState: TNpvActsReducer = {
  npvActDetails: [],
  npvActKinds: [],
  npvActs: [],
  npvCauses: [],
  npvActsFilters: [],
}

export const npvActsReducer = ( 
  state = initialState,  
  action: NPV_ACTS_REDUCER_ACTIONS
): InitialState => {
  switch (action.type) {
    case SET_NPV_ACTS_FILTER_LIST: 
      return {
        ...state,
        npvActsFilters: action.payload,
      }
    case SET_NPV_ACT_DETAILS:
      const npvActDetails = Record(action, [...state.npvActDetails])
      return {
        ...state,
        npvActDetails,
      }
    case SET_NPV_CAUSES:
      const npvCauses = Record(action, [...state.npvCauses])
      return {
        ...state,
        npvCauses,
      }
    case SET_NPV_ACT_KINDS:
      const npvActKinds = Record(action, [...state.npvActKinds])
      return {
        ...state,
        npvActKinds,
      }
    case SET_NPV_ACTS:
      const npvActs = Record(action, [...state.npvActs])
      return {
        ...state,
        npvActs: action.payload,
      }
    default:
      return state
  }
}
// ========================================================== //
//type TNpvProperty<R, T extends keyof R> = R[T]
//
const Record = (action: NPV_ACTS_REDUCER_ACTIONS, data: any[]): any[] => {
  console.error(`Record`, action.id, action.flag)
  const payload = action.payload
  if (action.id && action.flag === 'I' && payload) {
    const newArray = data.concat(payload)
    return newArray
  }
  if (action.id && action.flag === 'U' && payload[0]) {
    const newArray = data.map((d) => {
      if (d.id === action.id) return payload[0]
      else return d
    })
    return newArray
  }
  if (action.id && action.flag === 'D') {
    const newArray = data.filter((d) => d.id !== action.id)
    return newArray
  }
  if (!action.id || !action.flag) return action.payload
}
