import {
  SET_CONTRACTS_DATA,
  CONTRACT_REDUCER_ACTIONS,
  SET_CONTRACT_SORT_LIST,
  SET_DETAILS_CONTRACT,
} from './types'
import { TContractsReducer } from './types'
/* INITIAL STATE */
const initialState: TContractsReducer = {
  contracts: [],
  details: [],
  sortList: [],
  columns: [
    { id: 0, dataField: 'statusName', dataType: 'string', caption: 'Статус' },
    {
      id: 1,
      dataField: 'docDate',
      dataType: 'date',
      caption: 'Дата создания',
      format: 'dd.MM.yyyy',
    },
    { id: 2, dataField: 'name', dataType: 'string', caption: 'Наименование' },
    {
      id: 3,
      dataField: 'executorName',
      dataType: 'string',
      caption: 'Подрядчик',
    },
    {
      id: 4,
      dataField: 'workObjectName',
      dataType: 'string',
      caption: 'Объект работ',
    },
  ],
  columnsDetails: [
    {
      id: 4,
      dataField: 'workObjectName',
      dataType: 'string',
      caption: 'Объект работ',
    },
    {
      id: 5,
      dataField: 'workKindName',
      dataType: 'string',
      caption: 'Вид работ',
    },
    {
      id: 6,
      dataField: 'startDate',
      dataType: 'date',
      caption: 'Дата начала',
      format: 'dd.MM.yyyy',
    },
    {
      id: 7,
      dataField: 'endDate',
      dataType: 'date',
      caption: 'Дата окончания',
      format: 'dd.MM.yyyy',
    },
  ],
  form: {
    main: {
      stringItems: [
        {
          name: 'name',
          type: 'text',
          label: 'Наименование',
          maxLength: 150,
          required: true,
        },
      ],
      selectItems: [
        { name: 'executorId', label: 'Подрядчик', dataName: 'organizations' },
      ],
    },
    details: {
      selectItems: [
        { name: 'workKindId', label: 'Вид работ', dataName: 'workKinds' },
        {
          name: 'workObjectId',
          label: 'Объект работ',
          dataName: 'workObjects',
        },
      ],
      dateItems: [
        { name: 'startDate', label: 'Дата начала' },
        { name: 'endDate', label: 'Дата окончания' },
      ],
    },
    filter: {
      selectItems: [
        { name: 'customerId', label: 'Заказчик', dataName: 'organizations' },
        { name: 'projectId', label: 'Проект', dataName: 'projects' },
        { name: 'depositId', label: 'Месторождение', dataName: 'deposits' },
      ],
    },
  },
}
/* REDUCER */
export const contractsReducer = (
  state = initialState,
  action: CONTRACT_REDUCER_ACTIONS
): TContractsReducer => {
  switch (action.type) {
    case SET_CONTRACTS_DATA:
      return {
        ...state,
        contracts: action.payload,
      }
    case SET_CONTRACT_SORT_LIST:
      return {
        ...state,
        sortList: action.payload,
      }
    case SET_DETAILS_CONTRACT: //return Record(action, state, "details_contract");
      return {
        ...state,
        details: action.payload,
      }
    default:
      return state
  }
}
