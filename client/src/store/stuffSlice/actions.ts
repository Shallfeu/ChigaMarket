import stuffService from "../../services/stuffService";
import {
  StuffRequested,
  StuffRequestReceived,
  StuffRequestFailed,
} from "./slice";

export const loadStuff = () => async (dispatch: any) => {
  try {
    dispatch(StuffRequested());
    const { content } = await stuffService.fetchAll();
    dispatch(StuffRequestReceived(content));
  } catch (error: any) {
    dispatch(StuffRequestFailed(error.message));
  }
};
