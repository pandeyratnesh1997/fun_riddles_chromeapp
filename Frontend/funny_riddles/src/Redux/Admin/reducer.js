import * as types from "./actionTypes";

const init_state = {
  riddles: [
    {
      riddle: "",
      answer: "",
      creator: "",
   
    },
  ],

  isAddRequest: false,
  isAddFaliure: false,
  isLoading : false,
  isError : false,
  data : []
};

export const reducer = (state = init_state, action) => {
  switch (action.type) {
    case types.ADD_RIDDLE_REQUEST: {
      return {
        ...state,
        isAddRequest: true,
      };
    }
    case types.ADD_RIDDLE_SUCCESS: {
      const { riddle, answer, creator} = action.payload;
      return {
        ...state,
        riddles: [
          ...state.riddles,
          {
            riddle: riddle,
            answer: answer,
            creator: creator,
          
          },
        ],
        isAddRequest: false,
        isAddFaliure: false,
      };
    }
    case types.ADD_RIDDLE_FALIURE: {
      return {
        ...state,
        isAddRequest: false,
        isAddFaliure: true,
      };
    }
    case types.GET_DATA_REQUEST:{
      return {
        ...state,
        isLoading : true
      }
    }
    case types.GET_DATA_SUCCESS: {
      console.log("reducer", action.payload)
      return {
        ...state,
        isLoading : false,
        isError : false,
          data : action.payload
      }
    }
    case types.GET_DATA_FALIURE: {
      return {
        ...state,
          isLoading : false,
          isError : true
      }
    }

    default:
      return state;
  }
};
