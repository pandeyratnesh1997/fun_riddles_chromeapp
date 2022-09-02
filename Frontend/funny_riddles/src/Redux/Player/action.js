import axios from 'axios';
import * as types from './actionType';

export const fetchRiddle =(payload)=>(dispatch) =>{
    dispatch({type: types.GET_RIDDLE_REQUEST});

    return axios({
        method: "get",
        url: "/riddle",
        baseURL: "http://localhost:8080",
        headers: {
          authorization: `Bearer ${localStorage.getItem("riddleapptoken")}`,
        },
        params : {
            riddle : payload
        }
    }).then((r)=> dispatch({type: types.GET_RIDDLE_SUCCESS, payload : r.data}))
    .catch((e)=>dispatch({type : types.GET_RIDDLE_FALIURE}))
}