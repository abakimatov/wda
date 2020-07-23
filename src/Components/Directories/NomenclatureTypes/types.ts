import { TNomenclatureType } from "@AppStore/types/reducers/typesDataReducer";
import { IDefaultMapDispatch, IDefaultMapState } from "../types";

export interface IMapStateToPropsNomenType extends IDefaultMapState {
  nomenclature_types: TNomenclatureType[];
}
export interface IMapDispatchToPropsNomenType extends IDefaultMapDispatch {
  getNomenclatureTypes: () => void;
  iudNomenclatureType: () => void;
}
