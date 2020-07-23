import { SET_ORGANIZATIONS, ORGANIZATIONS_REDUCER_ACTIONS } from './types'
import { TOrganizationReducer } from './types'
/* INITIAL STATE */
const initialState: TOrganizationReducer = {
  organizations: [],
  columns: [
    {
      id: 100,
      dataField: 'id',
      dataType: 'number',
      caption: 'Код',
      width: '150px',
    },
    { id: 0, dataField: 'name', dataType: 'string', caption: 'Наименование' },
    {
      id: 1,
      dataField: 'mnemo',
      dataType: 'string',
      caption: 'Краткое наименование',
    },
    { id: 2, dataField: 'inn', dataType: 'number', caption: 'ИНН' },
    { id: 3, dataField: 'kpp', dataType: 'number', caption: 'КПП' },
    {
      id: 4,
      dataField: 'legAddress',
      dataType: 'string',
      caption: 'Юридический адрес',
    },
    {
      id: 5,
      dataField: 'actAddress',
      dataType: 'string',
      caption: 'Фактический адрес',
    },
    { id: 6, dataField: 'email', dataType: 'string', caption: 'Почта' },
    { id: 7, dataField: 'phone', dataType: 'string', caption: 'Телефон' },
    {
      id: 8,
      dataField: 'respUserId',
      dataType: 'string',
      caption: 'Ответственный пользователь',
    },
    {
      id: 9,
      dataField: 'respEmail',
      dataType: 'string',
      caption: 'Почта ответственного',
    },
    {
      id: 10,
      dataField: 'respPhone',
      dataType: 'string',
      caption: 'Телефон ответственного',
    },
  ],
  form: {
    main: {
      stringItems: [
        {
          name: 'phone',
          type: 'phone',
          label: 'Телефон',
          maxLength: 150,
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          label: 'Наименование',
          maxLength: 150,
          required: true,
        },
        {
          name: 'mnemo',
          type: 'text',
          label: 'Краткое наименование',
          maxLength: 150,
          required: true,
        },
        {
          name: 'kpp',
          type: 'number',
          label: 'КПП',
          maxLength: 9,
          required: true,
        },
        {
          name: 'inn',
          type: 'number',
          label: 'ИНН',
          maxLength: 10,
          required: true,
        },
        {
          name: 'legAddress',
          type: 'text',
          label: 'Юридический адрес',
          maxLength: 150,
          required: true,
        },
        {
          name: 'actAddress',
          type: 'text',
          label: 'Фактический адрес',
          maxLength: 150,
          required: true,
        },
        {
          name: 'email',
          type: 'text',
          label: 'Почта',
          maxLength: 150,
          required: true,
        },
      ],
      selectItems: [
        { name: 'respUserId', label: 'Пользователь', dataName: 'users_data' },
      ],
    },
  },
}
/* REDUCER */
export const organizationsReducer = (
  state = initialState,
  action: ORGANIZATIONS_REDUCER_ACTIONS
): TOrganizationReducer => {
  switch (action.type) {
    case SET_ORGANIZATIONS:
      console.log(`SET_ORGANIZATIONS`, action.payload)
      return {
        ...state,
        organizations: action.payload,
      }
    default:
      return state
  }
}
