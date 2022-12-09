import {
  RequestDecreaseSuccess,
  RequestAddToCartSuccess,
  RequestRemoveItemSuccess,
  RequestFailed,
  RequestClearSuccess,
} from "./slice";

export const addToCart =
  (payload: string) => (dispatch: any, getState: any) => {
    try {
      const state = getState();

      const findItem = state.cart.items.find(
        (item: any) => item._id === payload
      );

      if (!findItem) {
        const product = state.stuff.items.find((el: any) => el._id === payload);
        if (product) {
          return dispatch(RequestAddToCartSuccess({ quantity: 1, ...product }));
        }
      }

      dispatch(RequestAddToCartSuccess(findItem));
    } catch (error: any) {
      dispatch(RequestFailed(error.message));
    }
  };

export const DecreaseItem =
  (payload: string) => (dispatch: any, getState: any) => {
    try {
      const state = getState();
      const findItem = state.cart.items.find(
        (item: any) => item._id === payload
      );
      if (findItem) {
        dispatch(RequestDecreaseSuccess(findItem));
      }
    } catch (error: any) {
      dispatch(RequestFailed(error.message));
    }
  };

export const RemoveItem = (payload: string) => (dispatch: any) => {
  try {
    dispatch(RequestRemoveItemSuccess(payload));
  } catch (error: any) {
    dispatch(RequestFailed(error.message));
  }
};

export const ClearCart = () => (dispatch: any) => {
  try {
    dispatch(RequestClearSuccess());
  } catch (error: any) {
    dispatch(RequestFailed(error.message));
  }
};
