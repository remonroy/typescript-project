import { Dispatch } from "redux";
import * as Types from "./types";
import axios from "axios";

export const findUserAction = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: Types.USER_FIND_LOADING,
    });
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );

    dispatch({
      type: Types.USER_FIND_SUCCESS,
      payload: data,
    });
  } catch (e: any) {
    dispatch({
      type: Types.USER_FIND_FAIL,
      payload: e?.response?.data,
    });
  }
};
export const isAuthenTicate = () => (dispatch: Dispatch) => {
  return dispatch({
    type: Types.USER_LOGIN,
    payload: true,
  });
};
export const getAuth = () => (dispatch: Dispatch) => {
  const id = JSON.parse(localStorage.getItem("currentUser") || "{}");
  return dispatch({
    type: Types.USER_SHOW,
    payload: id,
  });
};
