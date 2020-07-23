import { createSelector } from 'reselect'
import { AppStateType } from '../../store'
import { FrameType } from '../../commonTypes'
//searching frame
export const searchingFrame = (arr: FrameType[], name: string) => {
  if (arr && arr.length > 0 && name) {
    let current = arr.find((item) => item.name === name)
    if (current) {
      return {
        ...current,
      }
    } else return { canEdit: true }
  } else return { canEdit: true }
}
//
const getNpvActFrame = (state: AppStateType): FrameType[] =>
  state.user.userInterface
export const selectNpvActFrame = createSelector(getNpvActFrame, (data) =>
  searchingFrame(data, 'NpvActs')
)
//
const getMortarTypeFrame = (state: AppStateType): FrameType[] =>
  state.user.userInterface
export const selectMortarTypeFrame = createSelector(
  getMortarTypeFrame,
  (data) => searchingFrame(data, 'MortarTypeFrame')
)
const getNomenclatureFrame = (state: AppStateType): FrameType[] =>
  state.user.userInterface
export const selectNomenclatureFrame = createSelector(
  getNomenclatureFrame,
  (data) => searchingFrame(data, 'NomenclatureFrame')
)
const getOrganizationFrame = (state: AppStateType): FrameType[] =>
  state.user.userInterface
export const selectOrganizationFrame = createSelector(
  getOrganizationFrame,
  (data) => searchingFrame(data, 'OrganizationFrame')
)
const getScenarioFrame = (state: AppStateType): FrameType[] =>
  state.user.userInterface
export const selectScenariosFrame = createSelector(getScenarioFrame, (data) =>
  searchingFrame(data, 'ScenarioFrame')
)
const getUserFrame = (state: AppStateType): FrameType[] =>
  state.user.userInterface
export const selectUserFrame = createSelector(getUserFrame, (data) =>
  searchingFrame(data, 'UserFrame')
)
const getProjectFrame = (state: AppStateType): FrameType[] =>
  state.user.userInterface
export const selectProjectFrame = createSelector(getProjectFrame, (data) =>
  searchingFrame(data, 'ProjectFrame')
)
const getDepositFrame = (state: AppStateType): FrameType[] =>
  state.user.userInterface
export const selectDepositFrame = createSelector(getDepositFrame, (data) =>
  searchingFrame(data, 'DepositFrame')
)
const getWorkObjectFrame = (state: AppStateType): FrameType[] =>
  state.user.userInterface
export const selectWorkObjectFrame = createSelector(
  getWorkObjectFrame,
  (data) => searchingFrame(data, 'WorkObjectFrame')
)
const getWorkKindFrame = (state: AppStateType): FrameType[] =>
  state.user.userInterface
export const selectWorkKindFrame = createSelector(getWorkKindFrame, (data) =>
  searchingFrame(data, 'WorkKindFrame')
)
const getDrillingRigFrame = (state: AppStateType): FrameType[] =>
  state.user.userInterface
export const selectDrillingRigFrame = createSelector(
  getDrillingRigFrame,
  (data) => searchingFrame(data, 'DrillingRigFrame')
)
const getBkvWorkClassifierFrame = (state: AppStateType): FrameType[] =>
  state.user.userInterface
export const selectBkvWorkClassifierFrame = createSelector(
  getBkvWorkClassifierFrame,
  (data) => searchingFrame(data, 'BkvWorkClassifierFrame')
)
const getContractFrame = (state: AppStateType): FrameType[] =>
  state.user.userInterface
export const selectContractFrame = createSelector(getContractFrame, (data) =>
  searchingFrame(data, 'ContractFrame')
)
const getDailyReportFrame = (state: AppStateType): FrameType[] =>
  state.user.userInterface
export const selectDailyReportFrame = createSelector(
  getDailyReportFrame,
  (data) => searchingFrame(data, 'DailyReportFrame')
)
const getPlansFrame = (state: AppStateType): FrameType[] =>
  state.user.userInterface
export const selectPlansFrame = createSelector(getPlansFrame, (data) =>
  searchingFrame(data, 'PlansFrame')
)
