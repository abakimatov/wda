import {
  WORK_CLASSIFIER_REDUCER_ACTIONS,
  SET_WORK_CLASSIFIER_DATA,
} from './types'
import { TWorkClassifierReducer } from './types'
/* INITIAL STATE */
const initialState: TWorkClassifierReducer = {
  workClassifier: [],
  columns: [
    {
      id: 100,
      dataField: 'id',
      dataType: 'number',
      caption: 'Код',
      width: '150px',
    },
    { id: 0, dataField: 'name', dataType: 'string', caption: 'Наименование' },
    { id: 1, dataField: 'typeName', dataType: 'string', caption: 'Тип БКВ' },
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
        { name: 'typeId', label: 'Тип БКВ', dataName: 'bkv_types_data' },
      ],
    },
  },
}
/* REDUCER */
export const workClassifierReducer = (
  state = initialState,
  action: WORK_CLASSIFIER_REDUCER_ACTIONS
): TWorkClassifierReducer => {
  switch (action.type) {
    case SET_WORK_CLASSIFIER_DATA:
      return {
        ...state,
        workClassifier: action.payload,
      }
    default:
      return state
  }
}
