import {
  SET_WORK_KINDS_DATA,
  WORK_KINDS_REDUCER_ACTIONS,
  SET_WORK_KINDS_FOLDERS,
} from './types'
import { TWorkKindsReducer } from './types'
/* INITIAL STATE */
const initialState: TWorkKindsReducer = {
  workKinds: [],
  folders: [],
  columns: [
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
      selectItems: [
        {
          name: 'entryTypeId',
          label: 'Тип документа',
          dataName: 'entryTypes',
        },
      ],
      checkBoxItems: [{ name: 'isModel', label: 'Эталонный' }],
    },
  },
}
/* REDUCER */
export const workKindsReducer = (
  state = initialState,
  action: WORK_KINDS_REDUCER_ACTIONS
): TWorkKindsReducer => {
  switch (action.type) {
    case SET_WORK_KINDS_DATA:
      return {
        ...state,
        workKinds: action.payload,
      }
    case SET_WORK_KINDS_FOLDERS:
      return {
        ...state,
        folders: action.payload,
      }
    default:
      return state
  }
}
