import API from "../../api";
import {
  StuffRequested,
  StuffRequestReceived,
  StuffRequestFailed,
} from "./slice";

export const loadStuff = () => async (dispatch: any) => {
  try {
    dispatch(StuffRequested());
    const content = await API.produts.fetchAll();
    dispatch(StuffRequestReceived(content));
  } catch (error: any) {
    dispatch(StuffRequestFailed(error.message));
  }
};
