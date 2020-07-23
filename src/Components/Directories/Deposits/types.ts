import { TDeposit } from "@AppStore/types/reducers/typesDataReducer";
import { IDefaultMapDispatch, IDefaultMapState } from "../types";

export interface IMapStateToPropsDeposits extends IDefaultMapState {
  deposits_data: TDeposit[];
}
export interface IMapDispatchToPropsDeposits extends IDefaultMapDispatch {
  getDeposits: () => void;
  iudDeposit: () => void;
}
