import {
  USER_REGISTER,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
} from "../constants/actionsType";
import axios from "axios";

export const userRegister = (newUser) => async (dispatch) => {
  dispatch({ type: USER_REGISTER });

  try {
    const userAdd = await axios.post("/user/register", newUser);

    console.log(userAdd);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: userAdd.data });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.response.data });
  }
};
