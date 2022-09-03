import * as types from './actionType';

const init_state = {
    isLoading : false,
    isError : false,
    playerRiddle : [],
    score : 1

}


export const reducer = (state = init_state, action)=>{
    const { type, payload} = action;
// helo
    switch(type){
        case types.GET_RIDDLE_REQUEST :{
            return {
                ...state,
                isLoading : true,
                isError : false,
                
            }
        }
        case types.GET_RIDDLE_SUCCESS :{
            if(state.score<1){
                state.score = 1
            }
            
            return {
                ...state,
                isLoading : false,
                isError : false,
                score :  state.score += payload[1],
                playerRiddle : payload[0]
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