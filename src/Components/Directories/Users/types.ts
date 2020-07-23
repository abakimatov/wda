import { IDefaultMapState, IDefaultMapDispatch } from "../types";
import { TUser } from "@AppStore/types/reducers/typesDataReducer";
import { RoleType } from "@AppStore/commonTypes";

export interface IMapStateToPropsUsers extends IDefaultMapState {
  users_data: TUser[];
  roles: RoleType[];
}
export interface IMapDispatchToPropsUsers extends IDefaultMapDispatch {
  getUsers: (flag: string) => void;
  iudUser: () => void;
  getRoles: () => void;
}
