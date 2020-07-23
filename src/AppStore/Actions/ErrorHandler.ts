import { ThunkType, DispatchType } from "../types";
import { ErrorMessage } from "./Notifications";

export const ErrorHandler = (err: any) => async(dispatch: DispatchType) => {
  if (err && err.response && err.response.data !== undefined) {
    //@ts-ignore
    dispatch(ErrorMessage(err.response.data.strErrorMessage));
  }
};
