import * as types from './actionType';

const init_state = {
    isLoading : false,
    isError : false,
    playerRiddle : []

}


export const reducer = (state = init_state, action)=>{
    const { type, payload} = action;

    switch(type){
        case types.GET_RIDDLE_REQUEST :{
            return {
                ...state,
                isLoading : true
            }
        }
        case types.GET_RIDDLE_SUCCESS :{
            return {
                ...state,
                isLoading : false,
                playerRiddle : payload
            }
        }
        case types.GET_RIDDLE_FALIURE :{
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }
        
        default :{
            return state
        }
    }

}