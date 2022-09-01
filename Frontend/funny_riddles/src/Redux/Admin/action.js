import * as types from "./actionTypes";

export const addRiddles = (payload)=>(dispatch)=>{
        dispatch({type : types.ADD_RIDDLE_REQUEST});
      return  fetch('http://localhost:8080/riddle/create', {
            method: "POST",
            headers : {
                "content-type" : "application-json"
            },
            body : JSON.stringify(payload),
            
        }).then((res)=>res.json())
        .then((data)=> dispatch({type : types.ADD_RIDDLE_SUCCESS, payload : data}))
        .catch((error)=> dispatch({type : types.ADD_RIDDLE_FALIURE}))
}

export const deleteRiddle = (payload)=>(dispatch)=>{
    dispatch({type : types.DELETE_RIDDLE_REQUEST});
const id = payload;

  return fetch(`http://localhost:8080/riddle/delete/${id}`, {
            method :"Delete",

    }).then((res)=>res.json())
    .then(res => dispatch({type : types.DELETE_RIDDLE_REQUEST}))
    .catch((error)=> dispatch({type : types.DELETE_RIDDLE_FALIURE}))
}