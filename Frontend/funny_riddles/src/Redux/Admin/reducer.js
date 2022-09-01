import * as types from './actionTypes';

const init_state = {
    riddles  : [
        {
            riddle : "",
            answer :  "",
            creator : "",
            creatorId : 1
        }

    ],
    isAddRequest : false,
    isAddFaliure : false,

}

export const reducer = (state = init_state, action)=>{
    switch(action.type){
        case types.ADD_RIDDLE_REQUEST :{
            return {
                ...state,
                isAddRequest : true,
            }
        }
        case types.ADD_RIDDLE_SUCCESS:{
            const {riddle, answer, creator, creatorId} = action.payload;
            return {
                ...state,
                riddles  :  [
                    ...state.riddles,
                    {
                        riddle : riddle,
                        answer : answer,
                        creator : creator,
                        creatorId : creatorId
                    }
                ],
                isAddRequest : false,
                isAddFaliure : false
            }
        }
        case types.ADD_RIDDLE_FALIURE : {
            return {
                ...state,
                isAddRequest : false,
                isAddFaliure : true
            }
        }
       default :  return state;
    }
}