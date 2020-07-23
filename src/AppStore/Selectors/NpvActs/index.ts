import { AppStateType } from '../../store'
import {
  TNpvCause,
  TNpvActKind,
  TNpvAct,
  TNpvDetail,
} from '@AppStore/types/reducers/typesNpvActsReducer'
import { TColumn } from '@AppStore/Reducers/ColumnsReducers/types'
import { selector } from '../instance'
import { TObjectFormState } from '@AppStore/Reducers/FormsReducers/types'
import { TSortList } from '@AppStore/types/reducers/typesDayliReportReducer'
//!npv details
const getNpvActDetails = (state: AppStateType): TNpvDetail[] =>
  state.npvActs.npvActDetails
export const selectNpvDetails = selector<TNpvDetail[]>(getNpvActDetails)
//columns npv Details
const getNpvDetailsColumns = (state: AppStateType): TColumn[] =>
  state.columns.npvActDetails
export const selectNpvActDetailsColumns = selector<TColumn[]>(
  getNpvDetailsColumns
)
//form npv Details
const getNpvActDetailsForm = (state: AppStateType): TObjectFormState =>
  state.forms.npvActDetail.main
export const selectNpvDetailsForm = selector<TObjectFormState>(
  getNpvActDetailsForm
)
//!npv causes
const getNpvCauses = (state: AppStateType): TNpvCause[] =>
  state.npvActs.npvCauses
export const selectNpvCauses = selector<TNpvCause[]>(getNpvCauses)
//columns npv causes
const getNpvCausesColumns = (state: AppStateType): TColumn[] =>
  state.columns.npvCause
export const selectNpvCausesColumns = selector<TColumn[]>(getNpvCausesColumns)
//form npv causes
const getNpvCausesForm = (state: AppStateType): TObjectFormState =>
  state.forms.npvCause.main
export const selectNpvCausesForm = selector<TObjectFormState>(getNpvCausesForm)
//!npv act kinds
const getNpvActKinds = (state: AppStateType): TNpvActKind[] =>
  state.npvActs.npvActKinds
export const selectNpvActKinds = selector<TNpvActKind[]>(getNpvActKinds)
//columns act kinds
const getNpvActKindsColumns = (state: AppStateType): TColumn[] =>
  state.columns.npvActKinds
export const selectNpvActKindsColumns = selector<TColumn[]>(
  getNpvActKindsColumns
)
//form act kinds
const getNpvActKindsForm = (state: AppStateType): TObjectFormState =>
  state.forms.npvActKinds.main
export const selectNpvActKindsForm = selector<TObjectFormState>(
  getNpvActKindsForm
)
//!npv acts
const getNpvActs = (state: AppStateType): TNpvAct[] => state.npvActs.npvActs
export const selectNpvActs = selector<TNpvAct[]>(getNpvActs)
//columns act
const getNpvActColumns = (state: AppStateType): TColumn[] =>
  state.columns.npvAct
export const selectNpvActColumns = selector<TColumn[]>(getNpvActColumns)
//form act
const getNpvActForm = (state: AppStateType): TObjectFormState =>
  state.forms.npvAct.main
export const selectNpvActForm = selector<TObjectFormState>(getNpvActForm)
//!npv acts filter
const getNpvActsFilterForm = (state: AppStateType): TObjectFormState =>
  state.forms.npvAct.filter
export const selectNpvActsFilterForm = selector<TObjectFormState>(
  getNpvActsFilterForm
)
//! npv acts tree filter
const getNpvActsTreeDataFilter = (state: AppStateType): TSortList[] =>
  state.npvActs.npvActsFilters
export const selectNpvActsTreeDataFilter = selector<TSortList[]>(
  getNpvActsTreeDataFilter
)
