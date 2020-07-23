import { AppStateType } from '../store'
import { TPlanConsoleDefaultStructure } from '../types/reducers/typesDataReducer'
import { selector } from './instance'
//договоры
const getDefaultPlanStructure = (
  state: AppStateType
): TPlanConsoleDefaultStructure => state.data.planDefaultStructure
export const selectDefaultPlanStructure = selector<
  TPlanConsoleDefaultStructure
>(getDefaultPlanStructure)
