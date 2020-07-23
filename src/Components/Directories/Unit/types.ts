import { TUnits } from "@AppStore/types/reducers/typesDataReducer";
import { IDefaultMapState, IDefaultMapDispatch } from "../types";

export interface IMapStateToPropsUnits extends IDefaultMapState {
    units_data: TUnits[]
}
export interface IMapDispatchToPropsUnits extends IDefaultMapDispatch {
    getUnits: () => void
    iudUnit: () => void
}