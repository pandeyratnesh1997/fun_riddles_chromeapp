import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
} from "./actionTypes";
import axios from "axios"

export const register = (payload) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST })
  return axios
    .post("http://localhost:8080", payload)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      return res;
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_FAILURE });
      return err;
    });
};

export const login = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST })
  return axios
    .post("http://localhost:8080", payload)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      return res;
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
      return err;
    });
};
