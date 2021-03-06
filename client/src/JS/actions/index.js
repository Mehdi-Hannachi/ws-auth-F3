import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
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

export const userLogin = (loginCred) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });

  try {
    const userLogin = await axios.post("/user/login", loginCred);

    localStorage.setItem("token", userLogin.data.token);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: userLogin.data.token });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data });
  }
};

export const getProfile = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE });

  try {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const userProfil = await axios.get("/user/current", config);

    dispatch({ type: GET_PROFILE_SUCCESS, payload: userProfil.data });
  } catch (error) {
    dispatch({ type: GET_PROFILE_FAIL, payload: error.response.data });
  }
};
