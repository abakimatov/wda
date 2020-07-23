import { TUser } from '../types/reducers/typesDataReducer'
import { AppStateType } from '../store'
import { TColumn } from '../Reducers/ColumnsReducers/types'
import { TObjectFormState } from '../Reducers/FormsReducers/types'
import { selector } from './instance'
//пользователи
const getUsers = (state: AppStateType): TUser[] => state.data.users_data
export const selectUsers = selector<TUser[]>(getUsers)
//columns & forms
const geUsersColumns = (state: AppStateType): TColumn[] => state.columns.user
export const selectUsersColumns = selector<TColumn[]>(geUsersColumns)
const geUsersForm = (state: AppStateType): TObjectFormState =>
  state.forms.user.main
export const selectUsersForm = selector<TObjectFormState>(geUsersForm)
