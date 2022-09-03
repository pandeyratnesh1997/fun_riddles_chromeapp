import axios from 'axios';
import * as types from './actionType';

export const fetchRiddle =(payload, count)=>(dispatch) =>{
    dispatch({type: types.GET_RIDDLE_REQUEST});
// console.log(count)
    return axios({
        method: "get",
        url: "/riddle",
        baseURL: "http://localhost:8080",
        headers: {
          authorization: `Bearer ${localStorage.getItem("riddleapptoken")}`,
        },
        params : {
            page : payload
        }
    }).then((r)=> {
       
        dispatch({type: types.GET_RIDDLE_SUCCESS, payload : [r.data,count]})
    })
    .catch((e)=>dispatch({type : types.GET_RIDDLE_FALIURE}))
}