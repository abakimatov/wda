import { TMortarType } from "@AppStore/types/reducers/typesDataReducer";
import { IDefaultMapDispatch, IDefaultMapState } from "../types";

export interface IMapStateToPropsMortarType extends IDefaultMapState {
  mortar_types: TMortarType[];
}
export interface IMapDispatchToPropsMortarType extends IDefaultMapDispatch {
  getMortarTypes: () => void;
  iudMortarType: () => void;
}
