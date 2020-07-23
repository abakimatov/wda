import { IDefaultMapState, IDefaultMapDispatch } from "../types";
import {
  TScenario,
  TPlanConsoleDefaultStructure,
} from "../../../AppStore/types/reducers/typesDataReducer";

export interface IOwnPropsConsole {}
export interface IMapStateConsole /* extends IDefaultMapState */ {
  scenarios: TScenario[];
  defaultStructure: TPlanConsoleDefaultStructure;
  loading: boolean;
  curOrgId: number;
}
export interface IMapDispatchConsole extends IDefaultMapDispatch {
  getConsoleData: () => void;
}
