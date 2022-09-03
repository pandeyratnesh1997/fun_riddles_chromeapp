import * as types from "./actionTypes";
import axios from "axios";

export const addRiddles = (payload) => async (dispatch) => {
  dispatch({ type: types.ADD_RIDDLE_REQUEST });
  console.log("payload", payload);
  //   try {
  //     let res = await axios.post("https://glacial-dawn-55521.herokuapp.com/riddle/create", {payload}, {
  //       headers: {
  //         "content-type": "application-json",
  //         authorization: `${localStorage.getItem("riddleapp")}`,
  //       },

  //     })
  //     let data = await res.data;
  //     dispatch({ type: types.ADD_RIDDLE_SUCCESS, payload: data })
  //   } catch (error) {
  //     dispatch({ type: types.ADD_RIDDLE_FALIURE })
  //   }
  // }
  return axios({
    method: "post",
    url: "/riddle/create",
    baseURL: "https://glacial-dawn-55521.herokuapp.com",
    headers: {
      authorization: `Bearer ${localStorage.getItem("riddleapptoken")}`,
    },
    data: payload,
  })
    .then((r) => dispatch({ type: types.ADD_RIDDLE_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.ADD_RIDDLE_FALIURE }));
};

export const deleteRiddle = (payload) => (dispatch) => {
  dispatch({ type: types.DELETE_RIDDLE_REQUEST });
  const id = payload;

  return axios({
    method: "delete",
    url: `/riddle/delete/${id}`,
    baseURL: "https://glacial-dawn-55521.herokuapp.com",
    headers: {
      authorization: `Bearer ${localStorage.getItem("riddleapptoken")}`,
    },
  })
    .then((r) => dispatch({ type: types.DELETE_RIDDLE_SUCCESS }))
    .catch((e) => dispatch({ type: types.DELETE_RIDDLE_FALIURE }));
};

export const getData = () => async (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });
  return axios({
    method: "get",
    url: "/riddle/admin",
    baseURL: "https://glacial-dawn-55521.herokuapp.com",
    headers: {
      authorization: `Bearer ${localStorage.getItem("riddleapptoken")}`,
    },
  })
    .then((r) => {
      // console.log("r",r)
      return dispatch({ type: types.GET_DATA_SUCCESS, payload: r.data });
    })
    .catch((e) => dispatch({ type: types.GET_DATA_FALIURE }));
};
