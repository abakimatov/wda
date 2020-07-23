import { SET_DRILLING_RIGS_DATA, DRILLING_RIGS_REDUCER_ACTIONS } from './types'
import { TDrillingRigsReducer } from './types'
/* INITIAL STATE */
const initialState: TDrillingRigsReducer = {
  drillingRigs: [],
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
/* REDUCER */
export const drillingRigsReducer = (
  state = initialState,
  action: DRILLING_RIGS_REDUCER_ACTIONS
): TDrillingRigsReducer => {
  switch (action.type) {
    case SET_DRILLING_RIGS_DATA:
      return {
        ...state,
        drillingRigs: action.payload,
      }
    default:
      return state
  }
}
