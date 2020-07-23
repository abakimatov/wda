import { AppStateType } from '@AppStore/store'
import { TColumn } from '@AppStore/Reducers/ColumnsReducers/types'
import { selector } from './instance'
import { TObjectFormState } from '@AppStore/Reducers/FormsReducers/types'
import { TPlan, TPlanDetail } from '@AppStore/types/reducers/typesDataReducer'
import { TSortList } from '@AppStore/types/reducers/typesDayliReportReducer'
//планы
const getPlans = (state: AppStateType): TPlan[] => state.data.plans
export const selectPlans = selector<TPlan[]>(getPlans)
//детали плана
const getPlanDetails = (state: AppStateType): TPlanDetail[] =>
  state.data.planDetails
export const selectPlanDetails = selector<TPlanDetail[]>(getPlanDetails)
//PLANS FILTER FORM
const getPlanFilterForm = (state: AppStateType): TObjectFormState =>
  state.forms.plans.filter
export const selectPlanFilterForm = selector<TObjectFormState>(
  getPlanFilterForm
)
//GET PLANS SORT LIST
const getPLansSortList = (state: AppStateType): TSortList[] =>
  state.data.plansSortList
export const selectPlansSortList = selector<TSortList[]>(getPLansSortList)
//
const getPlansColumns = (state: AppStateType): TColumn[] => state.columns.plans
export const selectPlansColumns = selector<TColumn[]>(getPlansColumns)
const getPlansForm = (state: AppStateType): TObjectFormState =>
  state.forms.plans.main
export const selectPlansForm = selector<TObjectFormState>(getPlansForm)
//
const getPlansDetailsColumns = (state: AppStateType): TColumn[] =>
  state.columns.planDetails
export const selectPlanDetailsColumns = selector<TColumn[]>(
  getPlansDetailsColumns
)
const getPlansDetailsForm = (state: AppStateType): TObjectFormState =>
  state.forms.plans.detail
export const selectPlansDetailsForm = selector<TObjectFormState>(
  getPlansDetailsForm
)
