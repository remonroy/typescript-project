import { User } from "../../../type/type";
import * as Types from "../action/types";

interface UserReducer {
  type: string;
  payload: { user: User[]; loading: boolean };
}

const initialState = {
  users: [],
  errors: {},
  isAuth: false,
  loading: false,
};

const findUserReducer = (
  state = initialState,
  { type, payload }: UserReducer
) => {
  switch (type) {
    case Types.USER_FIND_LOADING:
      return {
        loading: true,
      };

    case Types.USER_FIND_SUCCESS:
      return {
        loading: false,
        users: payload,
      };
    case Types.USER_FIND_FAIL:
      return {
        loading: false,
        errors: payload,
      };
    case Types.USER_LOGIN:
      return {
        ...state,
        loading: false,
        isAuth: payload,
      };
    case Types.USER_SHOW:
      return {
        ...state,
        loading: false,
        isAuth: payload,
      };

    default:
      return state;
  }
};

export default findUserReducer;
