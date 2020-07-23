import {
  TNomenclatureType,
  TNomenclature,
  TUnits,
} from "@AppStore/types/reducers/typesDataReducer";
import { IDefaultMapDispatch, IDefaultMapState } from "../types";

export interface IMapStateToPropsNomen extends IDefaultMapState {
  nomenclature_data: TNomenclature[];
  nomenclature_types: TNomenclatureType[];
  units_data: TUnits[];
}
export interface IMapDispatchToPropsNomen extends IDefaultMapDispatch {
  getNomenclature: () => void;
  iudNomenclature: () => void;
  getUnits: () => void;
  getNomenclatureTypes: () => void;
}
