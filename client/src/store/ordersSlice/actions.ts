import API from "../../api";
import {
  OrderRequested,
  OrderRequestReceived,
  OrderRequestFailed,
} from "./slice";

export const loadStuff = () => async (dispatch: any) => {
  try {
    dispatch(OrderRequested());
    const content = await API.produts.fetchAll();
    dispatch(OrderRequestReceived(content));
  } catch (error: any) {
    dispatch(OrderRequestFailed(error.message));
  }
};
