import * as types from './actionType';

const init_state = {
    isLoading : false,
    isError : false,
    playerRiddle : [],
    score : 0

}


export const reducer = (state = init_state, action)=>{
    const { type, payload} = action;
// helo
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
                score : state.score += 1,
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