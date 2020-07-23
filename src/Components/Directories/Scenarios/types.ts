import { TScenario } from "@AppStore/types/reducers/typesDataReducer";
import { IDefaultMapState, IDefaultMapDispatch } from "../types";

export interface IMapStateToPropsScenarios extends IDefaultMapState {
  scenarios: TScenario[];
}
export interface IMapDispatchToPropsScenarios extends IDefaultMapDispatch {
  getScenarios: () => void;
  iudScenario: () => void; 
}
