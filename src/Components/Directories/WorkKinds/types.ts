import { IDefaultMapState, IDefaultMapDispatch } from "../types";
import { TWorkKind } from "@AppStore/types/reducers/typesDataReducer";

export interface IMapStateToPropsWorkKinds extends IDefaultMapState {
  work_kinds_data: TWorkKind[];
}
export interface IMapDispatchToPropsWorkKinds extends IDefaultMapDispatch {
  getWorkKinds: () => void;
  iudWorkKind: () => void;
}
