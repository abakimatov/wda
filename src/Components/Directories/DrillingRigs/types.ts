import { TDrillingRig } from "@AppStore/types/reducers/typesDataReducer";
import { IDefaultMapDispatch, IDefaultMapState } from "../types";

export interface IMapStateToPropsDrillingRig extends IDefaultMapState {
  drilling_rigs_data: TDrillingRig[];
}
export interface IMapDispatchToPropsDrillingRig extends IDefaultMapDispatch {
  getDrillingRigs: () => void;
  iudDrillingRig: () => void;
}
