import {
  PERFORMENTS_REDUDER_ACTIONS,
  SET_PERFORMENS,
  TPerformensReducer,
} from './types'

const initialState: TPerformensReducer = {
  performens: [],
  columns: [
    {
      id: 0,
      dataField: 'id',
      dataType: 'number',
      caption: 'Код',
      width: '150px',
    },
    { id: 1, dataField: 'name', dataType: 'string', caption: 'Наименование' },
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
    },
  },
}

export const performersReducer = (
  state = initialState,
  action: PERFORMENTS_REDUDER_ACTIONS
): TPerformensReducer => {
  switch (action.type) {
    case SET_PERFORMENS:
      return {
        ...state,
        performens: action.payload,
      }
    default:
      return state
  }
}
