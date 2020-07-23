import { TColumn } from './ColumnsReducers/types'
import { TObjectFormState } from './FormsReducers/types'
import { TSortList } from '@AppStore/types/reducers/typesDayliReportReducer'

export type TBaseTable = {
  sortList?: TSortList[]
  columns?: TColumn[]
  form: {
    main: TObjectFormState
    details?: TObjectFormState
    filter?: TObjectFormState
  } 
}
