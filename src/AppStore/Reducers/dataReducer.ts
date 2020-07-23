import {
  /* derictories */
  /* SET_DRILLING_RIGS_DATA, */
  /* SET_WORK_CLASSIFIER_DATA, */
  /* SET_WORK_KINDS_DATA, */
  /* SET_CONTRACTS_DATA, */
  SET_WORK_OBJECTS_DATA,
  SET_DEPOSITS_DATA,
  SET_PROJECTS_DATA,
  SET_USERS_DATA,
  SET_BKV_TYPES,
  /* SET_DETAILS_CONTRACT, */
  SET_NOMENCLATURE,
  SET_UNITS,
  SET_NOMENCLATURE_TYPES,
  SET_WORK_OBJECT_EXECUTORS,
  SET_WORK_OBJECT_HOLES,
  SET_SUPERVISOR_PRESCRIPTS,
  SET_PLANS,
  SET_PLANS_DETAILS,
  SET_EX_FLAGS,
  SET_EX_FLAGS_ITEMS,
  SET_URL_PARAMS,
  //
  SET_SCENARIOS,
  SET_MORTAR_TYPES,
  DATA_REDUCER_ACTIONS,
  SET_PLANS_DEFAULT_STRUCTURE,
  SET_PLANS_SORT_LIST,
  //
  SET_CHECKED_ITEM_FROM_TABLES,
  /* SET_WORK_KINDS_FOLDERS, */
  /* SET_CONTRACT_SORT_LIST, */
} from '../types/actions/actionsDataReducer'
import { TDataReducer } from '@AppStore/types/reducers/typesDataReducer'

export type TInitialState = TDataReducer

const initialState: TInitialState = {
  urlParams: { id: null, item: '' }, 
  /* derictories */
  /* organizations: [], */
  /* drilling_rigs_data: [], */
  /* work_classifier_data: [],  */
  /* work_kinds_data: [], */
  /* work_kinds_folders: [], */
  /* contracts_data: [], */
  /* contractsSortList: [], */
  work_objects_data: [], 
  deposits_data: [], 
  projects_data: [],
  users_data: [],
  bkv_types_data: [],
  /* details_contract: [], */
  nomenclature_data: [],
  units_data: [],
  nomenclature_types: [],
  work_objects_executors_data: [],
  work_objects_holes_data: [],
  supervisor_prescripts: [],
  plans: [],
  plansSortList: [],
  planDetails: [],
  scenarios: [],
  exflags: [],
  exFlagsItems: [],
  mortar_types: [],
  planDefaultStructure: {
    orgs: [],
    templates: [],
  },
  checkedItemFromTables: {},
}

export default function (
  state = initialState,
  action: DATA_REDUCER_ACTIONS
): TInitialState {
  switch (action.type) {
    /* case SET_WORK_KINDS_FOLDERS:
      return {
        ...state,
        work_kinds_folders: action.payload,
      } */
    case SET_CHECKED_ITEM_FROM_TABLES:
      return {
        ...state,
        checkedItemFromTables: action.payload,
      }
    /* case SET_CONTRACT_SORT_LIST:
      return {
        ...state,
        contractsSortList: action.payload,
      } */
    case SET_PLANS_SORT_LIST:
      return {
        ...state,
        plansSortList: action.payload,
      }
    case SET_PLANS_DEFAULT_STRUCTURE:
      return {
        ...state,
        planDefaultStructure: action.payload,
      }
    case SET_MORTAR_TYPES:
      return {
        ...state,
        mortar_types: action.payload,
      }
    case SET_URL_PARAMS:
      const id = !isNaN(Number(action.payload.id))
        ? Number(action.payload.id)
        : null
      return {
        ...state,
        urlParams: { ...action.payload, id },
      }
    case SET_EX_FLAGS_ITEMS:
      return {
        ...state,
        exFlagsItems: action.payload,
      }
    case SET_EX_FLAGS:
      return {
        ...state,
        exflags: action.payload,
      }
    case SET_PLANS_DETAILS:
      return {
        ...state,
        planDetails: action.payload,
      }
    case SET_SCENARIOS:
      return {
        ...state,
        scenarios: action.payload,
      }
    case SET_PLANS:
      return {
        ...state,
        plans: action.payload,
      }
    case SET_SUPERVISOR_PRESCRIPTS:
      return {
        ...state,
        supervisor_prescripts: action.payload,
      }
    case SET_WORK_OBJECT_HOLES: //return Record(action, state, "work_objects_holes_data");
      return {
        ...state,
        work_objects_holes_data: action.payload,
      }
    case SET_WORK_OBJECT_EXECUTORS: //return Record(action, state, "work_objects_executors_data");
      return {
        ...state,
        work_objects_executors_data: action.payload,
      }
    /* case SET_DETAILS_CONTRACT: //return Record(action, state, "details_contract");
      if (action.payload !== null) {
        return {
          ...state,
          details_contract: action.payload,
        }
      } else {
        return {
          ...state,
          details_contract: [],
        }
      } */
    case SET_NOMENCLATURE_TYPES:
      return {
        ...state,
        nomenclature_types: action.payload,
      }
    case SET_BKV_TYPES:
      return {
        ...state,
        bkv_types_data: action.payload,
      }
    /* case SET_CONTRACTS_DATA:
      return {
        ...state,
        contracts_data: action.payload,
      } */
    case SET_USERS_DATA:
      return {
        ...state,
        users_data: action.payload,
      }
    case SET_PROJECTS_DATA:
      return {
        ...state,
        projects_data: action.payload,
      }
    case SET_WORK_OBJECTS_DATA:
      return {
        ...state,
        work_objects_data: action.payload,
      }
    /* case SET_DRILLING_RIGS_DATA:
      return {
        ...state,
        drilling_rigs_data: action.payload,
      } */
    case SET_DEPOSITS_DATA:
      return {
        ...state,
        deposits_data: action.payload,
      }
    /* case SET_WORK_CLASSIFIER_DATA:
      return {
        ...state,
        work_classifier_data: action.payload,
      } */
    /* case SET_WORK_KINDS_DATA:
      return {
        ...state,
        work_kinds_data: action.payload,
      } */
    /* case SET_ORGANIZATIONS:
      return {
        ...state,
        organizations: action.payload,
      } */
    case SET_NOMENCLATURE:
      return {
        ...state,
        nomenclature_data: action.payload,
      }
    case SET_UNITS:
      return {
        ...state,
        units_data: action.payload,
      }
    default:
      return state
  }
}
//helpers
export const Record = (action: any, state: any, dataName: any): any => {
  console.error(`Record`, action.id, action.flag)
  //@ts-ignore
  let stateDataName = state[dataName]
  if (action.id && action.flag === 'U') {
    if (stateDataName.length > 0) {
      let data = [...stateDataName]
      let currentItem = data.filter((item) => item.id === action.id)
      let currentIndex = data.indexOf({ ...currentItem[0] })
      let result = data.map((item) => {
        if (item.id === action.id && action.payload && action.payload[0]) {
          return action.payload[0]
        } else return { ...item }
      })
      return {
        ...state,
        [dataName]: result,
      }
      /* if(currentItem[0]) {
                let currentIndex = data.indexOf({...currentItem[0]});
                if(action.payload && action.payload[0]){
                    data.splice(currentIndex, 1, action.payload[0]);
                    return {
                        ...state,
                        [dataName]: data
                    }
                } else return state;
            } else return state; */
    } else return state
  }
  if (action.id && action.flag === 'I') {
    if (action.payload && action.payload[0]) {
      return {
        ...state,
        [dataName]: [{ ...action.payload[0] }, ...stateDataName],
      }
    }
  }
  if (action.id && action.flag === 'D') {
    if (stateDataName.length > 0) {
      let data = [...stateDataName]
      let currentItem = data.filter((item) => item.id !== action.id)
      if (currentItem) {
        return {
          ...state,
          [dataName]: currentItem,
        }
      } else return state
    } else return state
  }
  if (!action.id && !action.flag) {
    return {
      ...state,
      [dataName]: action.payload,
    }
  }
}
