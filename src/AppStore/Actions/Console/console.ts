import { instance, check_current } from "../Instance";
import { Methods } from "../Methods/methods";
import { ThunkType } from "../../types";
import { ErrorHandler } from "../ErrorHandler";
import { getScenarios } from "../Derictories/Scenarios";
import { SET_PLANS_DEFAULT_STRUCTURE } from "../../types/actions/actionsDataReducer";

interface IGetConsoleData {
  flag: string | null;
}
class ConsoleData implements IGetConsoleData {
  public flag: string | null;
  constructor(flag: string | null) {
    this.flag = flag;
  }
  getDefault = (): ThunkType => async (dispatch) => {
    try {
      const response = await instance(check_current()).post(``, {
        method: Methods.getPlanConsoleData,
        flag: this.flag,
      });
      const data = response.data;
      dispatch({ type: SET_PLANS_DEFAULT_STRUCTURE, payload: data });
      dispatch(getScenarios());
    } catch (err) {
      dispatch(ErrorHandler(err));
    }
  };
}
export const getConsoleData = (flag: string = null) =>
  new ConsoleData(flag).getDefault();
