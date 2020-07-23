import { IDefaultMapState, IDefaultMapDispatch } from "../types";
import {
  TWorkClassifier,
  TBkvType,
} from "@AppStore/types/reducers/typesDataReducer";

export interface IMapStateToPropsWorkClassfier extends IDefaultMapState {
  work_classifier_data: TWorkClassifier[];
  bkv_types_data: TBkvType[];
}
export interface IMapDispatchToPropsWorkClassfier extends IDefaultMapDispatch {
  getWorkClassifier: () => void;
  iudWorkClassifier: () => void;
  getBkvtypes: () => void;
}
