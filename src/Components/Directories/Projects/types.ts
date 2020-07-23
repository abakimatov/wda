import { TProject } from "@AppStore/types/reducers/typesDataReducer";
import { IDefaultMapState, IDefaultMapDispatch } from "../types";

export interface IMapStateToPropsProject extends IDefaultMapState {
  projects_data: TProject[];
}
export interface IMapDispatchToPropsProject extends IDefaultMapDispatch {
  getProjects: () => void;
  iudProject: () => void;
}
