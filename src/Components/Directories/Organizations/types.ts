import { TOrganizations, TUser } from "@AppStore/types/reducers/typesDataReducer";
import { IDefaultMapDispatch, IDefaultMapState } from "../types";

export interface IMapStateToPropsOrganizations extends IDefaultMapState {
  organizations_data: TOrganizations[];
  users_data: TUser[];
}
export interface IMapDispatchToPropsOrganizations extends IDefaultMapDispatch {
  getUsers: (flag: string) => void;
  getLicenseParams: () => void;
  getOrganizations: () => void;
  iudOrganization: () => void;
}
