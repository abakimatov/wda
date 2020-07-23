import { IDefaultMapDispatch, IDefaultMapState } from '../types'
import {
  TContract,
  TProject,
  TDeposit,
  TOrganizations,
} from '@AppStore/types/reducers/typesDataReducer'
import { TSortList } from '@AppStore/types/reducers/typesDayliReportReducer'
interface IBodyContractsSortListDataFromIdsParam {
  customerId: number | null
  projectId: number | null
  depositId: number | null
}
export interface IMapStateContract extends IDefaultMapState {
  data: TContract[]
  projects: TProject[]
  deposits: TDeposit[]
  organizations: TOrganizations[]
  sortList: TSortList[]
}
export interface IMapDispatchContract extends IDefaultMapDispatch {
  //funcs
  getContracts: () => void
  iudContract: () => void
  getProjects: () => void
  getDeposits: () => void
  getOrganizations: () => void
  getContractsSortListDataFromIdsParam: (
    body: IBodyContractsSortListDataFromIdsParam
  ) => void
  getContractsSortList: () => void
  getContractsSortListData: (flag: string, id: number) => void
}
